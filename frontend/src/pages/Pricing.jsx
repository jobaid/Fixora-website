import { useEffect, useState } from 'react'
import {
  Check, Loader2, ShieldCheck, Zap, CreditCard, HelpCircle, ArrowRight, Sparkles,
  Rocket, Gauge, Building2, Wrench, Star, Clock, Users, Phone,
  FileText, ClipboardCheck, Smartphone, MessageSquare, Mail, BarChart3,
  Car, Package, Receipt, Lock, Headphones, Database, Globe, Cloud, Bell,
  Calendar, UserCheck, Settings, Infinity, Palette, Truck, DollarSign, PieChart, Camera, QrCode,
} from 'lucide-react'
import { api } from '../lib/api'

const APP_ORIGIN = import.meta.env.VITE_APP_ORIGIN || 'https://apps.2set.com'

// Visual identity per plan — picked by the plan key or name.
const PLAN_THEMES = {
  starter: {
    icon: Rocket,
    gradient: 'from-sky-500 to-blue-600',
    soft: 'from-sky-50 to-blue-50',
    ring: 'ring-sky-200',
    accent: 'text-sky-600',
    glow: 'shadow-sky-500/20',
  },
  professional: {
    icon: Gauge,
    gradient: 'from-brand-500 to-brand-700',
    soft: 'from-amber-50 to-brand-50',
    ring: 'ring-amber-200',
    accent: 'text-amber-600',
    glow: 'shadow-brand-500/30',
  },
  business: {
    icon: Building2,
    gradient: 'from-amber-500 to-orange-600',
    soft: 'from-amber-50 to-orange-50',
    ring: 'ring-amber-200',
    accent: 'text-amber-600',
    glow: 'shadow-amber-500/20',
  },
  default: {
    icon: Wrench,
    gradient: 'from-slate-600 to-slate-800',
    soft: 'from-slate-50 to-white',
    ring: 'ring-slate-200',
    accent: 'text-slate-600',
    glow: 'shadow-slate-500/20',
  },
}

// Map a feature string to an attractive icon + color based on keywords.
const FEATURE_RULES = [
  { re: /\bestimate/i,                       icon: FileText,        tint: 'from-brand-500 to-brand-700' },
  { re: /\brepair\s*order|workorder|\bro\b/i, icon: Wrench,          tint: 'from-amber-500 to-brand-600' },
  { re: /\binspection|vehicle check/i,       icon: ClipboardCheck,  tint: 'from-emerald-500 to-teal-600' },
  { re: /\bphoto|image|camera/i,             icon: Camera,          tint: 'from-pink-500 to-rose-600' },
  { re: /\binvoice|receipt/i,                icon: Receipt,         tint: 'from-amber-500 to-orange-600' },
  { re: /\bpayment|stripe|checkout|\bpay\b/i, icon: CreditCard,     tint: 'from-emerald-500 to-green-600' },
  { re: /\brevenue|profit|margin|dollar|price/i, icon: DollarSign,  tint: 'from-emerald-600 to-teal-700' },
  { re: /\breport|analytics|dashboard|chart/i, icon: BarChart3,     tint: 'from-amber-500 to-brand-600' },
  { re: /\binsight|metric|kpi/i,             icon: PieChart,        tint: 'from-amber-400 to-brand-500' },
  { re: /\bchat|message|sms|text/i,          icon: MessageSquare,   tint: 'from-sky-500 to-blue-600' },
  { re: /\bemail|mail|notification/i,        icon: Mail,            tint: 'from-cyan-500 to-blue-600' },
  { re: /\balert|reminder|notify/i,          icon: Bell,            tint: 'from-amber-500 to-yellow-600' },
  { re: /\bmobile|phone|app|android|ios/i,   icon: Smartphone,      tint: 'from-amber-500 to-brand-500' },
  { re: /\btechnician|tech\b|mechanic|staff|employee/i, icon: UserCheck, tint: 'from-blue-500 to-cyan-600' },
  { re: /\bcustomer|client/i,                icon: Users,           tint: 'from-brand-500 to-brand-700' },
  { re: /\bvehicle|\bcar\b|\bfleet\b/i,      icon: Car,             tint: 'from-slate-600 to-slate-800' },
  { re: /\btow|delivery|pickup/i,            icon: Truck,           tint: 'from-orange-500 to-red-600' },
  { re: /\bpart(s)?|inventory|stock|catalog/i, icon: Package,       tint: 'from-amber-500 to-orange-600' },
  { re: /\bqr|barcode|scan/i,                icon: QrCode,          tint: 'from-slate-700 to-slate-900' },
  { re: /\bsecurity|mfa|2fa|encrypt|argon|aes/i, icon: Lock,        tint: 'from-rose-500 to-red-600' },
  { re: /\bisolation|tenant|company|data/i,  icon: Database,        tint: 'from-brand-600 to-brand-800' },
  { re: /\bsupport|help|chat.*agent|priority/i, icon: Headphones,   tint: 'from-amber-400 to-brand-500' },
  { re: /\bapi|integration|webhook/i,        icon: Globe,           tint: 'from-cyan-500 to-sky-600' },
  { re: /\bcloud|backup|storage/i,           icon: Cloud,           tint: 'from-amber-400 to-brand-500' },
  { re: /\bschedul|calendar|booking|appointment/i, icon: Calendar,  tint: 'from-rose-500 to-pink-600' },
  { re: /\brole|permission|admin|access/i,   icon: Settings,        tint: 'from-slate-500 to-slate-700' },
  { re: /\bunlimited|unlimit|infinit/i,      icon: Infinity,        tint: 'from-amber-500 to-brand-500' },
  { re: /\bbrand|logo|white[- ]?label|custom/i, icon: Palette,      tint: 'from-pink-500 to-rose-600' },
  { re: /\btrial|free|days?/i,               icon: Clock,           tint: 'from-emerald-500 to-teal-600' },
  { re: /\bshield|protect|guard/i,           icon: ShieldCheck,     tint: 'from-emerald-500 to-green-600' },
  { re: /\bfast|speed|instant|quick/i,       icon: Zap,             tint: 'from-amber-400 to-orange-500' },
]
function iconFor(feature) {
  const text = String(feature || '')
  for (const r of FEATURE_RULES) if (r.re.test(text)) return r
  return { icon: Sparkles, tint: 'from-slate-500 to-slate-700' }
}

function themeFor(plan) {
  const key = String(plan?.key || plan?.name || '').toLowerCase()
  if (key.includes('start'))   return PLAN_THEMES.starter
  if (key.includes('pro'))     return PLAN_THEMES.professional
  if (key.includes('bus'))     return PLAN_THEMES.business
  if (key.includes('team'))    return PLAN_THEMES.business
  if (key.includes('enterp'))  return PLAN_THEMES.business
  return PLAN_THEMES.default
}

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
      <div aria-hidden className="absolute inset-x-0 top-0 h-[620px] -z-10"
        style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(249,115,22,0.22), transparent 60%), linear-gradient(180deg,#f6faff,#ffffff)' }} />
      {/* Decorative dot grid */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[620px] -z-10 opacity-[0.35]"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '22px 22px', maskImage: 'linear-gradient(180deg, black, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24">
        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100 shadow-sm">
            <Sparkles size={12} /> Simple, honest pricing — no hidden fees
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
            Pricing built for{' '}
            <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-amber-500 bg-clip-text text-transparent">
              every shop.
            </span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Full feature access during your <strong className="text-slate-900">7-day free trial</strong>.
            Your card will be charged after the trial ends. Cancel any time, right from Settings.
          </p>

          {/* Monthly / Annual toggle */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 bg-white/70 backdrop-blur rounded-full border border-slate-200 shadow-sm">
            <button onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${!annual ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}>
              Monthly
            </button>
            <button onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${annual ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}>
              Annual
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${annual ? 'bg-emerald-400 text-emerald-900' : 'bg-emerald-100 text-emerald-700'}`}>SAVE ~20%</span>
            </button>
          </div>
        </div>

        {loading && (
          <div className="mt-24 flex justify-center text-slate-500">
            <Loader2 className="animate-spin mr-2" size={18} /> Loading plans…
          </div>
        )}
        {err && (
          <div className="mt-10 max-w-xl mx-auto p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">{err}</div>
        )}

        {!loading && !err && (
          <>
            {/* Plan cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {plans.map((p) => {
                const theme = themeFor(p)
                const Icon = theme.icon
                const price = annual && p.annualPrice ? p.annualPrice / 12 : p.monthlyPrice
                const total = annual ? p.annualPrice : p.monthlyPrice
                const save = annualSavePct(p)
                const signupHref = (p.signupUrl || `${APP_ORIGIN}/signup?plan=${p.key}`) + (annual ? '&cycle=annual' : '')
                const isTop = p.highlighted

                return (
                  <div key={p.key}
                    className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 group
                      ${isTop
                        ? `bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white shadow-2xl ${theme.glow} ring-1 ring-white/10 md:-mt-6 md:mb-6 hover:shadow-[0_30px_80px_-15px_rgba(37,84,245,0.5)]`
                        : `bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-slate-300`}`}>

                    {isTop && (
                      <>
                        {/* Glow halo */}
                        <div aria-hidden className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-500/50 via-amber-500/30 to-brand-600/50 -z-10 blur-xl opacity-60" />
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold rounded-full bg-gradient-to-r from-amber-300 via-brand-500 to-brand-700 text-white shadow-lg uppercase tracking-wider">
                          <Star size={11} className="fill-white" /> Most Popular
                        </span>
                      </>
                    )}

                    {/* Plan logo badge */}
                    <div className={`w-14 h-14 rounded-2xl grid place-items-center shadow-lg
                      bg-gradient-to-br ${theme.gradient} ${isTop ? 'ring-2 ring-white/20' : `ring-1 ${theme.ring}`}
                      group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300`}>
                      <Icon size={26} className="text-white drop-shadow" />
                    </div>

                    <div className="mt-5 flex items-center gap-2">
                      <h3 className={`text-xl font-bold ${isTop ? 'text-white' : 'text-slate-900'}`}>{p.name}</h3>
                    </div>
                    <p className={`mt-2 text-sm leading-relaxed min-h-[2.75rem] ${isTop ? 'text-slate-300' : 'text-slate-600'}`}>
                      {p.tagline || ' '}
                    </p>

                    {/* Price */}
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className={`text-sm font-semibold mr-0.5 ${isTop ? 'text-slate-400' : 'text-slate-500'}`}>$</span>
                      <span className={`text-6xl font-extrabold tracking-tight tabular-nums ${isTop ? 'text-white' : 'text-slate-900'}`}>
                        {Math.round(price)}
                      </span>
                      <span className={`text-sm ml-1 ${isTop ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
                    </div>
                    <div className={`mt-1 text-xs ${isTop ? 'text-slate-400' : 'text-slate-500'}`}>
                      {annual ? (
                        <>Billed <strong className={isTop ? 'text-slate-200' : 'text-slate-700'}>${total}</strong>/year
                          {save > 0 && <span className="ml-1.5 font-semibold text-emerald-500">— save {save}%</span>}
                        </>
                      ) : 'Billed monthly, no commitment'}
                    </div>

                    {p.trialDays > 0 && (
                      <div className={`mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold w-fit
                        ${isTop ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30' : 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100'}`}>
                        <Clock size={11} /> {p.trialDays}-day free trial included
                      </div>
                    )}

                    {/* CTA */}
                    <a href={signupHref}
                      className={`mt-7 inline-flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl font-semibold text-sm transition-all
                        ${isTop
                          ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl'
                          : `bg-gradient-to-r ${theme.gradient} text-white shadow-md hover:shadow-lg hover:brightness-110`}`}>
                      Start free trial
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    {/* Divider */}
                    <div className={`mt-7 pt-6 border-t ${isTop ? 'border-white/10' : 'border-slate-100'}`}>
                      <div className={`text-[11px] font-bold uppercase tracking-wider mb-3 ${isTop ? 'text-slate-400' : theme.accent}`}>
                        What's included
                      </div>
                      <ul className={`space-y-3 text-sm flex-1 ${isTop ? 'text-slate-200' : 'text-slate-700'}`}>
                        {(p.features || []).map((f) => {
                          const label = String(f).replace(/_/g, ' ')
                          const { icon: FIcon, tint } = iconFor(label)
                          return (
                            <li key={f} className="flex items-start gap-3 group/feat">
                              <span className={`mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg grid place-items-center shadow-sm
                                bg-gradient-to-br ${tint}
                                ${isTop ? 'ring-1 ring-white/20' : 'ring-1 ring-white/40'}
                                group-hover/feat:scale-110 group-hover/feat:-rotate-3 transition-transform duration-200`}>
                                <FIcon size={14} className="text-white drop-shadow" strokeWidth={2.3} />
                              </span>
                              <span className="leading-relaxed pt-0.5">{label}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Trust strip */}
            <div className="mt-20">
              <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                Every plan includes
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { icon: ShieldCheck, title: 'Bank-grade security', body: 'AES-GCM at rest. TLS everywhere.' },
                  { icon: Zap,         title: 'Setup in minutes',   body: 'No installs. No training needed.' },
                  { icon: CreditCard,  title: 'Charged after trial', body: 'Card charges when the 7 days end — cancel any time before.' },
                  { icon: HelpCircle,  title: 'Cancel any time',    body: 'From Settings → Billing.' },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col items-start gap-2 p-4 rounded-xl bg-white/60 backdrop-blur border border-slate-200/70 hover:border-slate-300 hover:shadow-sm transition">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white grid place-items-center shadow-md">
                      <item.icon size={17} />
                    </span>
                    <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{item.body}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini FAQ */}
            <div className="mt-20 max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Pricing questions, answered</h2>
                <p className="mt-2 text-sm text-slate-600">Still unsure? Head to the <a href="/faq" className="text-brand-600 font-semibold hover:underline">full FAQ</a>.</p>
              </div>
              <div className="space-y-3">
                {[
                  { q: 'When will my card be charged?', a: 'Your card is charged once the 7-day free trial ends. Cancel any time before then from Settings → Billing and you won\'t be charged.' },
                  { q: 'Can I switch plans later?',                   a: 'Yes. Upgrade or downgrade at any time from Settings → Billing. We prorate the difference automatically.' },
                  { q: 'What payment methods do you accept?',          a: 'All major cards via Stripe. Enterprise customers can request ACH or invoicing.' },
                ].map((item) => (
                  <details key={item.q} className="group bg-white border border-slate-200 rounded-xl p-5 open:shadow-md transition">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-slate-900">
                      {item.q}
                      <span className="ml-2 w-6 h-6 rounded-full bg-slate-100 grid place-items-center text-slate-500 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Secondary CTA / sales */}
            <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-10">
              <div aria-hidden className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-500/20 blur-3xl" />
              <div aria-hidden className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 grid place-items-center text-white flex-shrink-0">
                  <Users size={26} />
                </div>
                <div className="flex-1">
                  <div className="text-xl font-bold text-white">Running multiple shops or need SSO?</div>
                  <div className="mt-1 text-sm text-slate-300 max-w-xl">
                    Enterprise, multi-location, custom integrations — we'll build pricing that fits.
                    Typical response in under one business hour.
                  </div>
                </div>
                <a href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 shadow-lg flex-shrink-0">
                  <Phone size={14} /> Talk to sales <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
