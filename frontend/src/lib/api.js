// Tiny fetch wrapper for the public API this site exposes. There's no auth
// here — everything is public — so no bearer token handling needed.
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
export async function api(path, opts = {}) {
  const url = (path.startsWith('/api/') ? path : '/api' + path)
  const res = await fetch(BASE + url, {
    method: opts.method || 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(body?.error || `Request failed (${res.status})`)
  return body
}
