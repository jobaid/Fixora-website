package api

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/mail"
	"net/smtp"
	"os"
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
	if strings.Count(strings.ToLower(in.Message), "http") >= 3 {
		writeErr(w, 400, "Please remove the links and try again.")
		return
	}

	log.Printf("CONTACT [%s] %s <%s> shop=%q phone=%q: %s",
		in.Topic, in.Name, in.Email, in.Shop, in.Phone, in.Message)

	go sendContactEmail(in)

	writeJSON(w, 200, map[string]any{"ok": true, "message": "Thanks! We'll get back to you within one business day."})
}

func sendContactEmail(in contactReq) {
	host := os.Getenv("SMTP_HOST")
	port := os.Getenv("SMTP_PORT")
	user := os.Getenv("SMTP_USER")
	pass := os.Getenv("SMTP_PASS")
	to := os.Getenv("CONTACT_TO")
	from := os.Getenv("CONTACT_FROM")

	if host == "" || user == "" || pass == "" {
		log.Println("CONTACT email skipped: SMTP_HOST / SMTP_USER / SMTP_PASS not set")
		return
	}
	if port == "" {
		port = "587"
	}
	if to == "" {
		to = "info@fixoraerp.com"
	}
	if from == "" {
		from = user
	}

	subject := fmt.Sprintf("[Fixora Contact] %s — %s", in.Topic, in.Name)
	body := fmt.Sprintf(
		"Name:    %s\nEmail:   %s\nShop:    %s\nPhone:   %s\nTopic:   %s\n\n%s\n",
		in.Name, in.Email, in.Shop, in.Phone, in.Topic, in.Message,
	)
	msg := []byte(
		"From: " + from + "\r\n" +
			"To: " + to + "\r\n" +
			"Reply-To: " + in.Email + "\r\n" +
			"Subject: " + subject + "\r\n" +
			"MIME-Version: 1.0\r\n" +
			"Content-Type: text/plain; charset=utf-8\r\n" +
			"\r\n" +
			body,
	)

	auth := smtp.PlainAuth("", user, pass, host)
	addr := host + ":" + port
	if err := smtp.SendMail(addr, auth, from, []string{to}, msg); err != nil {
		log.Printf("CONTACT email send failed: %v", err)
		return
	}
	log.Printf("CONTACT email sent to %s from %s <%s>", to, in.Name, in.Email)
}
