// Tiny fetch wrapper for the public API this site exposes. There's no auth
// here — everything is public — so no bearer token handling needed.
export async function api(path, opts = {}) {
  const res = await fetch(path.startsWith('/api/') ? path : '/api' + path, {
    method: opts.method || 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(body?.error || `Request failed (${res.status})`)
  return body
}
