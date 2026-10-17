import { useEffect, useState } from 'react'
import { Check, Loader2, ShieldCheck, Zap, CreditCard, HelpCircle, ArrowRight, Sparkles } from 'lucide-react'
import { api } from '../lib/api'

const APP_ORIGIN = import.meta.env.VITE_APP_ORIGIN || 'https://apps.2set.com'

export default function Pricing() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState('')
  const [annual, setAnnual] = useState(false)

  useEffect(() => {
    api('/public/plans').then(setPlans).catch((e) => setErr(e.message)).finally(() => setLoading(false))
  }, [])

  const annualSavePct = (p) => {
    if (!p?.annualPrice || !p?.monthlyPrice) return 0
    const full = p.monthlyPrice * 12
    return Math.max(0, Math.round(((full - p.annualPrice) / full) * 100))
  }

  return (
    <div className="relative overflow-hidden">
      {/* Soft gradient backdrop */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[520px] -z-10"
        style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(60,109,255,0.18), transparent 60%), linear-gradient(180deg,#f8fbff,#ffffff)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100">
            <Sparkles size={12} /> Simple, honest pricing
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Pick a plan. <span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">Start free.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Full access during your free trial. No charge until it ends. Cancel any time from Settings.
          </p>

          {/* Monthly / Annual toggle */}
          <div className="mt-7 inline-flex items-center gap-1 p-1 bg-slate-900/5 backdrop-blur rounded-full border border-slate-200">
            <button onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${!annual ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'}`}>
              Monthly
            </button>
            <button onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${annual ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'}`}>
              Annual
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${annual ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>SAVE ~20%</span>
            </button>
          </div>
        </div>

        {loading && (
          <div className="mt-20 flex justify-center text-slate-500">
            <Loader2 className="animate-spin mr-2" size={18} /> Loading plans…
          </div>
        )}
        {err && (
          <div className="mt-10 max-w-xl mx-auto p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">{err}</div>
        )}

        {!loading && !err && (
          <>
            {/* Plan cards */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {plans.map((p) => {
                const price = annual && p.annualPrice ? p.annualPrice / 12 : p.monthlyPrice
                const total = annual ? p.annualPrice : p.monthlyPrice
                const save = annualSavePct(p)
                const signupHref = (p.signupUrl || `${APP_ORIGIN}/signup?plan=${p.key}`) + (annual ? '&cycle=annual' : '')
                const isTop = p.highlighted
                return (
                  <div key={p.key}
                    className={`relative flex flex-col rounded-2xl p-8 transition
                      ${isTop
                        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl shadow-brand-500/20 ring-1 ring-white/10 md:-mt-4 md:mb-4'
                        : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'}`}>
                    {isTop && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[11px] font-bold rounded-full bg-gradient-to-r from-brand-500 to-indigo-500 text-white shadow-lg">
                        MOST POPULAR
                      </span>
                    )}
                    <div className={`text-sm font-semibold ${isTop ? 'text-brand-300' : 'text-brand-600'}`}>{p.name}</div>
                    <p className={`mt-2 text-sm min-h-[2.75rem] ${isTop ? 'text-slate-300' : 'text-slate-600'}`}>{p.tagline || ' '}</p>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className={`text-5xl font-extrabold tracking-tight ${isTop ? 'text-white' : 'text-slate-900'}`}>
                        ${Math.round(price)}
                      </span>
                      <span className={`text-sm ${isTop ? 'text-slate-400' : 'text-slate-500'}`}>/mo</span>
                    </div>
                    <div className={`text-xs ${isTop ? 'text-slate-400' : 'text-slate-500'}`}>
                      {annual ? <>Billed <strong>${total}</strong>/year {save > 0 && <span className="text-emerald-400">— save {save}%</span>}</> : 'Billed monthly'}
                    </div>
                    {p.trialDays > 0 && (
                      <div className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold w-fit
                        ${isTop ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-50 text-emerald-700'}`}>
                        <Zap size={11} /> {p.trialDays}-day free trial
                      </div>
                    )}

                    <a href={signupHref}
                      className={`mt-7 inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-semibold text-sm transition
                        ${isTop
                          ? 'bg-white text-slate-900 hover:bg-slate-100'
                          : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                      Start free trial <ArrowRight size={16} />
                    </a>

                    <ul className={`mt-6 space-y-2.5 text-sm flex-1 ${isTop ? 'text-slate-200' : 'text-slate-700'}`}>
                      {(p.features || []).map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full grid place-items-center
                            ${isTop ? 'bg-emerald-500/20' : 'bg-emerald-100'}`}>
                            <Check size={11} className={isTop ? 'text-emerald-300' : 'text-emerald-700'} />
                          </span>
                          <span>{String(f).replace(/_/g, ' ')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            {/* Trust strip */}
            <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-600 text-sm">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-brand-600" /> Bank-grade encryption</span>
              <span className="inline-flex items-center gap-2"><Zap size={16} className="text-brand-600" /> Setup in minutes</span>
              <span className="inline-flex items-center gap-2"><CreditCard size={16} className="text-brand-600" /> No credit card during trial</span>
              <span className="inline-flex items-center gap-2"><HelpCircle size={16} className="text-brand-600" /> Cancel any time</span>
            </div>

            {/* Secondary CTA / sales */}
            <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Need a custom plan, SSO, or multi-shop support?</div>
                <div className="mt-1 text-sm text-slate-600">
                  Talk to us — we'll tailor pricing + features to your shop.
                </div>
              </div>
              <a href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800">
                Contact sales <ArrowRight size={14} />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
