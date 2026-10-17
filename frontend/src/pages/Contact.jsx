import { useState } from 'react'
import { Send, Check } from 'lucide-react'
import { api } from '../lib/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', shop: '', phone: '', topic: 'sales', message: '' })
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState('')
  const [err, setErr] = useState('')
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setErr(''); setSent(''); setBusy(true)
    try {
      const r = await api('/public/contact', { method: 'POST', body: form })
      setSent(r.message || 'Thanks! We will be in touch.')
    } catch (e) { setErr(e.message) }
    finally { setBusy(false) }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">Get in touch</h1>
      <p className="mt-3 text-slate-600">Questions about plans, a demo, or support? Send a note and we'll respond within one business day.</p>

      {sent ? (
        <div className="mt-8 p-5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
          <Check className="text-emerald-600 mt-0.5" />
          <div>
            <div className="font-semibold text-emerald-900">Message sent</div>
            <div className="text-sm text-emerald-800 mt-1">{sent}</div>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-8 space-y-4 bg-white border border-slate-200 rounded-xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Your name"       value={form.name}  onChange={update('name')}  required />
            <Field label="Email"           value={form.email} onChange={update('email')} type="email" required />
            <Field label="Shop name"       value={form.shop}  onChange={update('shop')} />
            <Field label="Phone (optional)" value={form.phone} onChange={update('phone')} type="tel" />
          </div>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">What's this about?</span>
            <select value={form.topic} onChange={update('topic')}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm">
              <option value="sales">Sales / pricing</option>
              <option value="demo">Request a demo</option>
              <option value="support">Support</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Message</span>
            <textarea value={form.message} onChange={update('message')} rows={5} required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm" />
          </label>
          {err && <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800">{err}</div>}
          <button type="submit" disabled={busy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold hover:brightness-110 disabled:opacity-50">
            <Send size={16} /> {busy ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  )
}

function Field({ label, type = 'text', ...rest }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input type={type} {...rest}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" />
    </label>
  )
}
