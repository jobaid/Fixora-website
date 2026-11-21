package api

import (
	"encoding/json"
	"net/http"
)

type Server struct{}

func New() *Server { return &Server{} }

func (s *Server) Routes(mux *http.ServeMux) {
	mux.HandleFunc("GET /api/health", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, 200, map[string]string{"status": "ok"})
	})
	mux.HandleFunc("GET /api/public/plans", s.listPlans)
	mux.HandleFunc("POST /api/public/contact", s.submitContact)

	// SEO — served at site root with correct content types. These sit in
	// front of the SPA catch-all in main.go thanks to Go 1.22+'s pattern
	// specificity.
	mux.HandleFunc("GET /sitemap.xml", s.sitemapXML)
	mux.HandleFunc("GET /robots.txt", s.robotsTXT)
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no-store")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(v)
}

func writeErr(w http.ResponseWriter, status int, msg string) {
	writeJSON(w, status, map[string]string{"error": msg})
}
