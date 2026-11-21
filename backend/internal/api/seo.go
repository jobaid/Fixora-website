package api

import (
	"fmt"
	"net/http"
	"os"
	"strings"
	"time"
)

// SEO endpoints — sitemap.xml and robots.txt are served directly by the Go
// backend so they live at the site root with correct XML/text Content-Type
// (a Vite SPA can't do either).

// publicURL returns the canonical site origin for sitemap/robots entries.
// Overridable via PUBLIC_URL env (e.g. staging).
func publicURL() string {
	if v := strings.TrimRight(os.Getenv("PUBLIC_URL"), "/"); v != "" {
		return v
	}
	return "https://www.fixoraerp.com"
}

type sitemapEntry struct {
	loc        string
	changefreq string
	priority   string
}

// Keep this list in sync with frontend/src/lib/seo-config.js SITEMAP_ROUTES.
var sitemapRoutes = []sitemapEntry{
	{"/", "weekly", "1.0"},
	{"/lp/switch-to-fixoraerp", "monthly", "0.95"},
	{"/shop-management-software", "monthly", "0.9"},
	{"/auto-repair-shop-software", "monthly", "0.9"},
	{"/small-business-shop-management-software", "monthly", "0.9"},
	{"/features", "monthly", "0.8"},
	{"/pricing", "weekly", "0.9"},
	{"/faq", "monthly", "0.6"},
	{"/about", "yearly", "0.5"},
	{"/contact", "yearly", "0.5"},
	{"/blog", "weekly", "0.6"},
	{"/blog/best-shop-management-software-for-small-business", "monthly", "0.6"},
	{"/blog/how-to-choose-shop-management-software", "monthly", "0.6"},
	{"/blog/benefits-of-cloud-based-shop-management-software", "monthly", "0.6"},
	{"/terms", "yearly", "0.2"},
	{"/privacy", "yearly", "0.2"},
	{"/payment-terms", "yearly", "0.2"},
}

func (s *Server) sitemapXML(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/xml; charset=utf-8")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	today := time.Now().UTC().Format("2006-01-02")
	origin := publicURL()

	var b strings.Builder
	b.WriteString(`<?xml version="1.0" encoding="UTF-8"?>` + "\n")
	b.WriteString(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` + "\n")
	for _, e := range sitemapRoutes {
		fmt.Fprintf(&b, "  <url>\n    <loc>%s%s</loc>\n    <lastmod>%s</lastmod>\n    <changefreq>%s</changefreq>\n    <priority>%s</priority>\n  </url>\n",
			origin, e.loc, today, e.changefreq, e.priority)
	}
	b.WriteString(`</urlset>` + "\n")
	w.WriteHeader(200)
	w.Write([]byte(b.String()))
}

func (s *Server) robotsTXT(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/plain; charset=utf-8")
	w.Header().Set("Cache-Control", "public, max-age=86400")
	origin := publicURL()

	body := "" +
		"# robots.txt for " + origin + "\n" +
		"User-agent: *\n" +
		"Allow: /\n" +
		"Disallow: /thank-you\n" +
		"Disallow: /api/\n" +
		"\n" +
		"# Common AI crawlers — allowed. Remove the ones you want to block.\n" +
		"User-agent: GPTBot\n" +
		"Allow: /\n" +
		"\n" +
		"User-agent: ClaudeBot\n" +
		"Allow: /\n" +
		"\n" +
		"User-agent: PerplexityBot\n" +
		"Allow: /\n" +
		"\n" +
		"User-agent: Google-Extended\n" +
		"Allow: /\n" +
		"\n" +
		"Sitemap: " + origin + "/sitemap.xml\n"

	w.WriteHeader(200)
	w.Write([]byte(body))
}
