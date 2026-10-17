package api

import (
	"encoding/json"
	"log"
	"net/http"
	"net/mail"
	"strings"
)

type contactReq struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Shop    string `json:"shop"`
	Phone   string `json:"phone"`
	Message string `json:"message"`
	Topic   string `json:"topic"` // "sales" | "support" | "demo" | "other"
}

// submitContact — currently logs to stdout (so journalctl captures leads)
// and acknowledges. A later phase persists these to a leads table and / or
// emails the SaaS owner through Fixora's platform mailer.
func (s *Server) submitContact(w http.ResponseWriter, r *http.Request) {
	r.Body = http.MaxBytesReader(w, r.Body, 32<<10)
	var in contactReq
	if err := json.NewDecoder(r.Body).Decode(&in); err != nil {
		writeErr(w, 400, "Invalid request body.")
		return
	}
	in.Name = strings.TrimSpace(in.Name)
	in.Email = strings.ToLower(strings.TrimSpace(in.Email))
	in.Message = strings.TrimSpace(in.Message)
	if in.Name == "" || in.Email == "" || in.Message == "" {
		writeErr(w, 400, "Name, email, and message are required.")
		return
	}
	if _, err := mail.ParseAddress(in.Email); err != nil {
		writeErr(w, 400, "That doesn't look like a valid email address.")
		return
	}
	if len(in.Message) > 4000 {
		writeErr(w, 413, "Message is too long (max 4000 characters).")
		return
	}
	// Rudimentary spam guard: ignore anything with 3+ URLs in the message
	// since legitimate inquiries almost never need links.
	if strings.Count(strings.ToLower(in.Message), "http") >= 3 {
		writeErr(w, 400, "Please remove the links and try again.")
		return
	}
	log.Printf("CONTACT [%s] %s <%s> shop=%q phone=%q: %s",
		in.Topic, in.Name, in.Email, in.Shop, in.Phone, in.Message)
	writeJSON(w, 200, map[string]any{"ok": true, "message": "Thanks! We'll get back to you within one business day."})
}
