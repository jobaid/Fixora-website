package api

import (
	"net/http"
	"os"
	"strings"
)

// Plans served by the marketing site. Hard-coded so the Pricing page always
// renders regardless of any upstream app; edit the slice below to change prices
// or feature lists. Each row's SignupURL is stamped from APP_ORIGIN at request
// time so changing the deployment target doesn't require a rebuild.

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

func (s *Server) listPlans(w http.ResponseWriter, r *http.Request) {
	appOrigin := strings.TrimRight(os.Getenv("APP_ORIGIN"), "/")
	if appOrigin == "" {
		appOrigin = "https://fixoraerp.com"
	}
	out := make([]Plan, len(builtinPlans))
	copy(out, builtinPlans)
	for i := range out {
		out[i].SignupURL = appOrigin + "/signup?plan=" + out[i].Key
	}
	writeJSON(w, 200, out)
}
