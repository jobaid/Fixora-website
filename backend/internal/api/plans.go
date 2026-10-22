package api

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"
)

// Plans source-of-truth is the main Fixora SaaS admin UI
// (my.fixoraerp.com/portal/admin → signup_plans). This endpoint proxies the
// live list, decorates each row with a SignupURL, and caches for 60s so
// marketing-page traffic doesn't hammer the main app. If the upstream fails
// or isn't configured, we fall back to a built-in list so the Pricing page
// always renders.
//
// Env vars:
//   PLANS_UPSTREAM — full URL that returns the plans JSON array.
//                    Default: https://my.fixoraerp.com/api/public/signup/plans
//   APP_ORIGIN     — public domain used to build each plan's signup link.
//                    Default: https://fixoraerp.com

type Plan struct {
	Key          string   `json:"key"`
	Name         string   `json:"name"`
	Tagline      string   `json:"tagline"`
	MonthlyPrice float64  `json:"monthlyPrice"`
	AnnualPrice  float64  `json:"annualPrice"`
	TrialDays    int      `json:"trialDays"`
	Features     []string `json:"features"`
	Highlighted  bool     `json:"highlighted"`
	SignupURL    string   `json:"signupUrl"`
}

var builtinPlans = []Plan{
	{
		Key: "starter", Name: "Starter",
		Tagline:      "For a solo tech or a brand-new shop finding its feet.",
		MonthlyPrice: 29, AnnualPrice: 278, TrialDays: 7,
		Features: []string{
			"Unlimited estimates & repair orders",
			"Digital vehicle inspections with photos",
			"Customer approvals via share link",
			"Email receipts & invoice PDFs",
			"1 user included",
		},
	},
	{
		Key: "professional", Name: "Professional",
		Tagline:      "The daily driver for independent shops with a few bays.",
		MonthlyPrice: 79, AnnualPrice: 758, TrialDays: 7,
		Highlighted: true,
		Features: []string{
			"Everything in Starter",
			"Online payments via Stripe",
			"Technician mobile submit (secure link)",
			"Customer chat per repair order",
			"Reports: parts profit, tech productivity, tax",
			"Up to 5 users",
		},
	},
	{
		Key: "business", Name: "Business",
		Tagline:      "For high-volume shops and multi-bay operations.",
		MonthlyPrice: 149, AnnualPrice: 1428, TrialDays: 7,
		Features: []string{
			"Everything in Professional",
			"Priority support",
			"API & webhook integrations",
			"Automated backups & restore",
			"Audit log of sensitive actions",
			"Unlimited users",
		},
	},
}

var plansCache struct {
	sync.Mutex
	at   time.Time
	body []Plan
}

func (s *Server) listPlans(w http.ResponseWriter, r *http.Request) {
	appOrigin := strings.TrimRight(os.Getenv("APP_ORIGIN"), "/")
	if appOrigin == "" {
		appOrigin = "https://fixoraerp.com"
	}
	upstream := strings.TrimSpace(os.Getenv("PLANS_UPSTREAM"))
	if upstream == "" {
		upstream = "https://my.fixoraerp.com/api/public/signup/plans"
	}

	// Serve from cache if fresh.
	plansCache.Lock()
	fresh := time.Since(plansCache.at) < 60*time.Second && plansCache.body != nil
	cached := plansCache.body
	plansCache.Unlock()
	if fresh {
		writeJSON(w, 200, stampSignup(cached, appOrigin))
		return
	}

	// Try the upstream SaaS admin.
	plans, err := fetchPlans(r, upstream)
	if err != nil {
		log.Printf("plans upstream error (%s): %v — serving fallback", upstream, err)
		// Prefer last-good cache; otherwise built-in defaults.
		fallback := cached
		if fallback == nil {
			fallback = builtinPlans
		}
		writeJSON(w, 200, stampSignup(fallback, appOrigin))
		return
	}

	plansCache.Lock()
	plansCache.at, plansCache.body = time.Now(), plans
	plansCache.Unlock()
	writeJSON(w, 200, stampSignup(plans, appOrigin))
}

func fetchPlans(r *http.Request, url string) ([]Plan, error) {
	req, err := http.NewRequestWithContext(r.Context(), "GET", url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Accept", "application/json")
	resp, err := (&http.Client{Timeout: 8 * time.Second}).Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	if resp.StatusCode >= 300 {
		return nil, &statusErr{code: resp.StatusCode}
	}
	body, _ := io.ReadAll(io.LimitReader(resp.Body, 1<<20))
	var out []Plan
	if err := json.Unmarshal(body, &out); err != nil {
		return nil, err
	}
	if len(out) == 0 {
		return nil, &statusErr{code: 204}
	}
	return out, nil
}

type statusErr struct{ code int }

func (e *statusErr) Error() string { return http.StatusText(e.code) }

func stampSignup(src []Plan, origin string) []Plan {
	out := make([]Plan, len(src))
	copy(out, src)
	for i := range out {
		if out[i].SignupURL == "" {
			out[i].SignupURL = origin + "/signup?plan=" + out[i].Key
		}
	}
	return out
}
