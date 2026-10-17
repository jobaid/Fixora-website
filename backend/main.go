// Fixora marketing backend — zero-dep Go server for the public site.
//
// Responsibilities:
//   - Serve the built React frontend (if STATIC_DIR exists)
//   - GET  /api/public/plans   — the current pricing tiers (phase A)
//   - POST /api/public/contact — contact / sales lead submissions
//
// Separate from the main Fixora app. In production it runs behind
// nginx on its own subdomain (e.g. www.2set.com) with its own TLS cert.
package main

import (
	"context"
	"errors"
	"flag"
	"log"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"strings"
	"syscall"
	"time"

	"fixora-marketing/backend/internal/api"
)

func main() {
	addr := flag.String("addr", envOr("ADDR", ":8090"), "HTTP listen address")
	static := flag.String("static", envOr("STATIC_DIR", "../frontend/dist"), "built React frontend (optional)")
	flag.Parse()

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	srv := api.New()
	mux := http.NewServeMux()
	srv.Routes(mux)

	// SPA static serving — any path that isn't /api/ falls through to
	// index.html so React Router can take over.
	if st, err := os.Stat(*static); err == nil && st.IsDir() {
		fsrv := http.FileServer(http.Dir(*static))
		mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			if strings.HasPrefix(r.URL.Path, "/api/") {
				http.NotFound(w, r)
				return
			}
			if _, err := os.Stat(filepath.Join(*static, filepath.Clean(r.URL.Path))); err != nil {
				http.ServeFile(w, r, filepath.Join(*static, "index.html"))
				return
			}
			fsrv.ServeHTTP(w, r)
		})
		log.Printf("serving frontend from %s", *static)
	}

	httpSrv := &http.Server{Addr: *addr, Handler: securityHeaders(logRequests(mux)), ReadHeaderTimeout: 10 * time.Second}
	go func() {
		log.Printf("fixora-marketing listening on %s", *addr)
		if err := httpSrv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Printf("http: %v", err)
		}
	}()
	<-ctx.Done()
	log.Printf("shutting down")
	shutdown, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	httpSrv.Shutdown(shutdown)
}

func envOr(k, def string) string {
	if v := os.Getenv(k); v != "" {
		return v
	}
	return def
}

func logRequests(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		if strings.HasPrefix(r.URL.Path, "/api/") {
			log.Printf("%s %s %s", r.Method, r.URL.Path, time.Since(start).Round(time.Millisecond))
		}
	})
}

func securityHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.Header().Set("Referrer-Policy", "strict-origin-when-cross-origin")
		w.Header().Set("X-Frame-Options", "SAMEORIGIN")
		next.ServeHTTP(w, r)
	})
}
