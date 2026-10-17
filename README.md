# Fixora Marketing Site

Standalone marketing + pricing site for Fixora. **Separate** from the main
Fixora app repo. Connects via public HTTP and (later) authenticated
server-to-server API.

- Marketing website — www.2set.com (recommended)
- Main app — https://apps.2set.com (unchanged)

## Stack

- **Frontend:** React + Vite + Tailwind CSS. No TypeScript to keep the
  surface tiny for Phase A.
- **Backend:** Go stdlib only. One binary. Serves the SPA + public API.
- **Deployment:** host nginx reverse proxy → `127.0.0.1:8090`.

## Phase A — what's shipped

- Public marketing site: Home, Features, Pricing, About, Contact, FAQ,
  Terms, Privacy.
- `GET /api/public/plans` — three subscription tiers (Starter, Professional,
  Business). Edit `backend/internal/api/plans.go` to change prices or
  features until Phase B wires an authenticated fetch from the main app.
- `POST /api/public/contact` — contact form. Logs to stdout today;
  Phase B persists to a leads table + routes through the main app's
  platform mailer.
- Signup CTA buttons link to `${APP_ORIGIN}/signup?plan=...`. The real
  signup page itself is **Phase B**.

## Local development

```bash
# Terminal 1 — Go backend
cd backend
go run .                 # listens on :8090

# Terminal 2 — Vite dev server
cd frontend
npm install
npm run dev              # listens on :5174, proxies /api → :8090
```

Open http://localhost:5174

## Production build

```bash
cd frontend && npm ci && npm run build         # outputs frontend/dist
cd ../backend && go build -o fixora-marketing-server .
```

Then run the server with the SPA path set:

```bash
STATIC_DIR=/opt/fixora-marketing/frontend/dist \
APP_ORIGIN=https://apps.2set.com \
./fixora-marketing-server --addr=:8090
```

## nginx (sample for www.2set.com)

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name www.2set.com;
    return 301 https://$host$request_uri;
}
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.2set.com;
    ssl_certificate     /etc/letsencrypt/live/www.2set.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.2set.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8090;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Then issue a cert:

```bash
sudo certbot --nginx -d www.2set.com
```

## systemd service

`/etc/systemd/system/fixora-marketing.service`:

```ini
[Unit]
Description=Fixora Marketing site
After=network.target

[Service]
Type=simple
User=fixora
WorkingDirectory=/opt/fixora-marketing/backend
Environment=STATIC_DIR=/opt/fixora-marketing/frontend/dist
Environment=APP_ORIGIN=https://apps.2set.com
Environment=ADDR=:8090
ExecStart=/opt/fixora-marketing/backend/fixora-marketing-server
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now fixora-marketing
```

## What's next (Phase B)

- `/signup?plan=…` lands on the main app, collects the business + owner
  details, creates a pending `companies` row and Stripe Checkout
  subscription session.
- Stripe webhook → flips the company status to active, feature flags on,
  welcome email.
- Owner Admin sees the signup appear automatically.
