package api

import (
	"encoding/json"
	"io"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"
)

// Plans are the source-of-truth in the main Fixora app (signup_plans
// table, edited at Owner → Plans). This endpoint proxies that live list and
// decorates each row with a SignupURL that lands on www.fixoraerp.com/signup.
// Cached for 60s so marketing-page traffic doesn't hammer the main app.

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

var plansCache struct {
	sync.Mutex
	at   time.Time
	body []Plan
}

func (s *Server) listPlans(w http.ResponseWriter, r *http.Request) {
	appOrigin := strings.TrimRight(os.Getenv("APP_ORIGIN"), "/")
	if appOrigin == "" {
		appOrigin = "https://www.fixoraerp.com"
	}

	plansCache.Lock()
	fresh := time.Since(plansCache.at) < 60*time.Second && plansCache.body != nil
	cached := plansCache.body
	plansCache.Unlock()
	if fresh {
		writeJSON(w, 200, cached)
		return
	}

	req, _ := http.NewRequestWithContext(r.Context(), "GET", appOrigin+"/api/public/signup/plans", nil)
	resp, err := (&http.Client{Timeout: 8 * time.Second}).Do(req)
	if err != nil || resp.StatusCode >= 300 {
		if cached != nil {
			writeJSON(w, 200, cached) // serve stale on upstream hiccup
			return
		}
		writeErr(w, 502, "could not reach plans upstream")
		if resp != nil {
			resp.Body.Close()
		}
		return
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(io.LimitReader(resp.Body, 1<<20))
	var upstream []Plan
	if err := json.Unmarshal(body, &upstream); err != nil {
		writeErr(w, 502, "could not parse plans upstream")
		return
	}
	for i := range upstream {
		upstream[i].SignupURL = appOrigin + "/signup?plan=" + upstream[i].Key
	}
	plansCache.Lock()
	plansCache.at, plansCache.body = time.Now(), upstream
	plansCache.Unlock()
	writeJSON(w, 200, upstream)
}
