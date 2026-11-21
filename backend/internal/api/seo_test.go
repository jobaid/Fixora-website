package api

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestSitemapXML(t *testing.T) {
	t.Setenv("PUBLIC_URL", "https://www.fixoraerp.com")

	mux := http.NewServeMux()
	New().Routes(mux)

	req := httptest.NewRequest(http.MethodGet, "/sitemap.xml", nil)
	rec := httptest.NewRecorder()
	mux.ServeHTTP(rec, req)

	if rec.Code != 200 {
		t.Fatalf("status = %d, want 200", rec.Code)
	}
	ct := rec.Header().Get("Content-Type")
	if !strings.HasPrefix(ct, "application/xml") {
		t.Fatalf("content-type = %q, want application/xml", ct)
	}
	body := rec.Body.String()
	for _, want := range []string{
		`<?xml version="1.0"`,
		`<urlset`,
		"https://www.fixoraerp.com/",
		"https://www.fixoraerp.com/pricing",
		"https://www.fixoraerp.com/lp/switch-to-fixoraerp",
		"https://www.fixoraerp.com/shop-management-software",
		"https://www.fixoraerp.com/blog/best-shop-management-software-for-small-business",
	} {
		if !strings.Contains(body, want) {
			t.Fatalf("sitemap missing %q\nbody:\n%s", want, body)
		}
	}
}

func TestRobotsTxt(t *testing.T) {
	t.Setenv("PUBLIC_URL", "https://www.fixoraerp.com")

	mux := http.NewServeMux()
	New().Routes(mux)

	req := httptest.NewRequest(http.MethodGet, "/robots.txt", nil)
	rec := httptest.NewRecorder()
	mux.ServeHTTP(rec, req)

	if rec.Code != 200 {
		t.Fatalf("status = %d, want 200", rec.Code)
	}
	ct := rec.Header().Get("Content-Type")
	if !strings.HasPrefix(ct, "text/plain") {
		t.Fatalf("content-type = %q, want text/plain", ct)
	}
	body := rec.Body.String()
	for _, want := range []string{
		"User-agent: *",
		"Allow: /",
		"Disallow: /thank-you",
		"Disallow: /api/",
		"Sitemap: https://www.fixoraerp.com/sitemap.xml",
	} {
		if !strings.Contains(body, want) {
			t.Fatalf("robots.txt missing %q\nbody:\n%s", want, body)
		}
	}
}
