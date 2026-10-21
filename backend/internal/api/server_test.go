package api

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestPublicPlansRoute(t *testing.T) {
	t.Setenv("APP_ORIGIN", "https://www.fixoraerp.com")

	mux := http.NewServeMux()
	New().Routes(mux)

	req := httptest.NewRequest(http.MethodGet, "/api/public/plans", nil)
	rec := httptest.NewRecorder()
	mux.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("GET /api/public/plans returned status %d, want %d", rec.Code, http.StatusOK)
	}

	var plans []Plan
	if err := json.NewDecoder(rec.Body).Decode(&plans); err != nil {
		t.Fatalf("decode plans response: %v", err)
	}
	if len(plans) != 3 {
		t.Fatalf("GET /api/public/plans returned %d plans, want 3", len(plans))
	}
	if plans[0].Key != "starter" || plans[1].Key != "professional" || plans[2].Key != "business" {
		t.Fatalf("unexpected plan keys: got %q, %q, %q", plans[0].Key, plans[1].Key, plans[2].Key)
	}
	if plans[0].SignupURL != "https://www.fixoraerp.com/signup?plan=starter" {
		t.Fatalf("starter signup URL = %q, want %q", plans[0].SignupURL, "https://www.fixoraerp.com/signup?plan=starter")
	}
}
