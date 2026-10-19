import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, ShieldCheck, Zap, ClipboardCheck, CreditCard, Users, Wrench,
  Smartphone, FileText, Sparkles, Star, PlayCircle, BarChart3, MessageSquare,
  CheckCircle2, Clock, TrendingUp, Mail, Receipt, Car, Camera,
} from 'lucide-react'

const APP_ORIGIN = import.meta.env.VITE_APP_ORIGIN || 'https://apps.2set.com'

/* Reveal — fades + slides a child in when it scrolls into view. */
function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (!ref.current || shown) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect() } },
      { threshold: 0.12 }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [shown])
  return (
    <Tag ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform
        ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>
      {children}
    </Tag>
  )
}

/* Animates a numeric value when the element becomes visible. */
function CountUp({ to, duration = 1400, prefix = '', suffix = '', decimals = 0, format }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const step = (t) => {
        const p = Math.min(1, (t - start) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setVal(to * eased)
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.3 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to, duration])
  const text = format ? format(val) : (prefix + val.toFixed(decimals) + suffix)
  return <span ref={ref} className="tabular-nums">{text}</span>
}

export default function Home() {
  return (
    <>
      <AnimStyles />
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden">
        {/* Backdrop */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-[760px] -z-10"
          style={{ background: 'radial-gradient(ellipse at 20% -10%, rgba(249,115,22,0.22), transparent 55%), radial-gradient(ellipse at 85% 10%, rgba(234,88,12,0.18), transparent 55%), linear-gradient(180deg,#f5f9ff,#ffffff)' }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-[760px] -z-10 opacity-[0.3]"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '22px 22px', maskImage: 'linear-gradient(180deg, black, transparent 70%)' }} />
        {/* Floating orbs */}
        <div aria-hidden className="pointer-events-none absolute top-32 right-10 w-72 h-72 rounded-full bg-brand-400/25 blur-3xl -z-10 animate-orbit" />
        <div aria-hidden className="pointer-events-none absolute top-60 left-5 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl -z-10 animate-orbit-rev" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Text column */}
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-white/80 backdrop-blur text-brand-700 border border-brand-100 shadow-sm animate-fade-up [animation-delay:0ms]">
                <Sparkles size={12} className="animate-wiggle" /> Built for independent auto repair shops
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.03] animate-fade-up [animation-delay:120ms]">
                Run your repair shop{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-amber-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-pan">smarter</span>
                  <svg aria-hidden className="absolute left-0 -bottom-2 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                    <path d="M2 7 Q 75 1 150 5 T 298 4" stroke="url(#u)" strokeWidth="3" strokeLinecap="round" fill="none"
                      strokeDasharray="320" strokeDashoffset="320" className="animate-draw-line" />
                    <defs>
                      <linearGradient id="u" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#3c6dff" />
                        <stop offset="1" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                , not harder.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed animate-fade-up [animation-delay:240ms]">
                Estimates, repair orders, vehicle inspections, customer approvals and invoices —
                all in one connected platform, from the first phone call to the paid receipt.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:360ms]">
                <a href={`${APP_ORIGIN}/signup`}
                  className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:brightness-110 transition-all overflow-hidden">
                  <span aria-hidden className="absolute inset-0 rounded-xl bg-white/20 opacity-0 animate-ping-slow" />
                  <span aria-hidden className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <span className="relative">Start free trial</span>
                  <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/features"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 backdrop-blur text-slate-800 border border-slate-200 font-semibold hover:border-slate-300 shadow-sm">
                  <PlayCircle size={18} className="text-brand-600 animate-pulse" /> See it in action
                </Link>
              </div>

              {/* Trust row */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 animate-fade-up [animation-delay:480ms]">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck size={16} className="text-emerald-500" /> AES-GCM encrypted</span>
                <span className="inline-flex items-center gap-1.5"><Clock size={16} className="text-amber-500 animate-tick" /> 7-day free trial</span>
                <span className="inline-flex items-center gap-1.5"><CreditCard size={16} className="text-brand-500" /> No card required</span>
              </div>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-4 animate-fade-up [animation-delay:600ms]">
                <div className="flex -space-x-2">
                  {['from-brand-500 to-brand-700', 'from-emerald-500 to-teal-600', 'from-amber-500 to-orange-600', 'from-pink-500 to-rose-600'].map((g, i) => (
                    <span key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} ring-2 ring-white text-white text-xs font-bold grid place-items-center shadow`}>
                      {'JMAK'[i]}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-slate-600">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-current" />)}
                    <span className="ml-1.5 text-slate-700 font-semibold">4.9/5</span>
                  </div>
                  <div>Trusted by shops across the US</div>
                </div>
              </div>
            </div>

            {/* Visual column */}
            <div className="lg:col-span-2 animate-fade-up [animation-delay:300ms]">
              <HeroVisual />
            </div>
          </div>

          <DashboardPreview />
        </div>
      </section>

      {/* ───────────── Logo cloud strip ───────────── */}
      <section className="border-y border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">
            One connected platform — replaces half a dozen tools
          </div>
          <div className="mt-5 grid grid-cols-3 md:grid-cols-6 gap-4 items-center text-slate-500">
            {[
              { Icon: FileText,       label: 'Estimates' },
              { Icon: ClipboardCheck, label: 'Inspections' },
              { Icon: CreditCard,     label: 'Payments' },
              { Icon: MessageSquare,  label: 'Chat' },
              { Icon: Mail,           label: 'Email' },
              { Icon: BarChart3,      label: 'Reports' },
            ].map((t) => (
              <div key={t.label} className="flex items-center justify-center gap-2 opacity-80 hover:opacity-100 hover:text-slate-900 transition">
                <t.Icon size={18} /> <span className="text-sm font-semibold">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Stat strip ───────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: 'Time to send an estimate',  Icon: Zap,          tint: 'from-amber-500 to-orange-500', node: <><CountUp to={2} /> min</> },
            { v: 'Online approval rate',       Icon: CheckCircle2, tint: 'from-emerald-500 to-teal-600', node: <><CountUp to={94} />%</> },
            { v: 'Faster than paper',          Icon: TrendingUp,   tint: 'from-brand-500 to-brand-700', node: <><CountUp to={3} />×</> },
            { v: 'Setup, start to finish',     Icon: Wrench,       tint: 'from-pink-500 to-rose-600',    node: <>&lt; <CountUp to={5} /> min</> },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 80}>
              <div className="group relative flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.tint} text-white grid place-items-center shadow group-hover:-rotate-12 group-hover:scale-110 transition-transform`}>
                  <s.Icon size={22} />
                </span>
                <div>
                  <div className="font-extrabold text-slate-900 text-2xl leading-none tabular-nums">{s.node}</div>
                  <div className="mt-1 text-xs text-slate-600">{s.v}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── Features grid ───────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-100">
            <Sparkles size={12} /> Why shops switch to Fixora
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Everything your shop runs on, in <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">one place</span>.
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            From the first phone call to the paid invoice — track every step without juggling paper, spreadsheets, and sticky notes.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                <div aria-hidden className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${f.tint} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`} />
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${f.tint} text-white grid place-items-center shadow-lg
                  group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                  <f.icon size={22} />
                </div>
                <div className="mt-5 font-bold text-slate-900 text-lg">{f.title}</div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.body}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-brand-600 transition">
                  Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── Workflow ───────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 border-y border-slate-200">
        <div aria-hidden className="absolute inset-x-0 top-0 h-full -z-10 opacity-[0.3]"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100">
              <TrendingUp size={12} /> The Fixora workflow
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              From estimate to invoice, <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">one clean flow</span>.
            </h2>
            <p className="mt-3 text-slate-600">Each step is linked — a change in one place updates everything downstream automatically.</p>
          </div>

          <div className="mt-14 relative">
            <div aria-hidden className="hidden md:block absolute left-[10%] right-[10%] top-10 h-0.5 bg-gradient-to-r from-amber-200 via-brand-200 to-amber-300" />
            <ol className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {workflow.map((w, i) => (
                <Reveal key={w.title} as="li" delay={i * 120}>
                  <div className="relative flex flex-col items-center text-center bg-white border border-slate-200 rounded-2xl p-5 pt-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full group">
                    <div className={`absolute -top-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${w.tint} text-white grid place-items-center shadow-lg ring-4 ring-white
                      group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300`}>
                      <w.Icon size={22} />
                    </div>
                    <div className="mt-7 text-[10px] font-bold uppercase tracking-wider text-slate-400">Step {i + 1}</div>
                    <div className="mt-1 font-bold text-slate-900">{w.title}</div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{w.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── Testimonial ───────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-100">
              <Star size={12} className="fill-current" /> Loved by shop owners
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Shops save hours every week.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Fixora replaces estimate books, inspection PDFs, text-reminder tools and payment links with one connected system —
              so techs stay in the bay and owners stay out of the paperwork.
            </p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-center gap-0.5 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.tint} text-white font-bold grid place-items-center shadow`}>
                      {t.name[0]}
                    </span>
                    <div className="text-sm">
                      <div className="font-semibold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Final CTA ───────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-10 sm:p-14 text-center">
          <div aria-hidden className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
          <div aria-hidden className="absolute inset-0 opacity-[0.15]"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white border border-white/20 backdrop-blur">
              <Sparkles size={12} /> Try Fixora today
            </div>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to run your shop <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">on autopilot</span>?
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Full access during your 7-day trial. No credit card. Cancel from Settings any time.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <a href={`${APP_ORIGIN}/signup`}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-bold shadow-xl hover:shadow-2xl hover:brightness-105 transition-all">
                Start free trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={APP_ORIGIN}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur font-semibold hover:bg-white/15">
                I already have an account
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─────────────────── Hero visual: shop/car illustration ─────────────────── */
function HeroVisual() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 bg-gradient-to-br from-brand-500/35 via-amber-500/20 to-brand-600/30 rounded-[2rem] blur-3xl -z-10" />
      <div className="relative bg-white/80 backdrop-blur border border-slate-200 rounded-3xl shadow-2xl p-6 overflow-hidden">
        {/* Car SVG */}
        <svg viewBox="0 0 260 110" className="w-full">
          <defs>
            <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3c6dff" />
              <stop offset="1" stopColor="#1e3fcc" />
            </linearGradient>
            <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Shadow */}
          <ellipse cx="130" cy="98" rx="110" ry="6" fill="#0a2bb8" opacity="0.12" />
          {/* Body */}
          <path d="M20 70 L45 30 Q52 20 65 20 L170 20 Q183 20 190 30 L210 70 L240 70 Q248 70 248 78 L248 85 Q248 92 240 92 L232 92 Q230 100 220 100 Q210 100 208 92 L72 92 Q70 100 60 100 Q50 100 48 92 L20 92 Q12 92 12 85 L12 78 Q12 70 20 70 Z"
            fill="url(#body)" stroke="#0a2bb8" strokeWidth="1.2" />
          {/* Shine */}
          <path d="M30 50 Q130 20 220 50 L220 68 L30 68 Z" fill="url(#shine)" />
          {/* Windows */}
          <path d="M50 65 L63 32 Q66 25 73 25 L160 25 Q167 25 170 32 L183 65 Z" fill="#0a2bb8" opacity="0.75" />
          <line x1="117" y1="25" x2="117" y2="65" stroke="#dbe6ff" strokeWidth="1" opacity="0.9" />
          {/* Headlight */}
          <ellipse cx="235" cy="60" rx="4" ry="3" fill="#ffd84d" />
          {/* Wheels (spinning) */}
          <g className="animate-wheel" style={{ transformOrigin: '60px 92px' }}>
            <circle cx="60" cy="92" r="12" fill="#0a1a3d" />
            <circle cx="60" cy="92" r="6" fill="#334155" />
            <circle cx="60" cy="92" r="2.5" fill="#dbe6ff" />
            <rect x="59" y="82" width="2" height="20" fill="#64748b" />
            <rect x="50" y="91" width="20" height="2" fill="#64748b" />
          </g>
          <g className="animate-wheel" style={{ transformOrigin: '220px 92px' }}>
            <circle cx="220" cy="92" r="12" fill="#0a1a3d" />
            <circle cx="220" cy="92" r="6" fill="#334155" />
            <circle cx="220" cy="92" r="2.5" fill="#dbe6ff" />
            <rect x="219" y="82" width="2" height="20" fill="#64748b" />
            <rect x="210" y="91" width="20" height="2" fill="#64748b" />
          </g>
        </svg>

        {/* Floating badges */}
        <div className="absolute -top-3 -left-3 bg-white rounded-xl shadow-lg border border-slate-200 px-3 py-2 flex items-center gap-2 animate-float [animation-delay:0ms]">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white grid place-items-center">
            <CheckCircle2 size={16} />
          </span>
          <div className="text-xs">
            <div className="font-bold text-slate-900 leading-tight">Approved</div>
            <div className="text-slate-500 leading-tight">RO-1041</div>
          </div>
        </div>

        <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg border border-slate-200 px-3 py-2 flex items-center gap-2 animate-float [animation-delay:1200ms]">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white grid place-items-center">
            <Receipt size={16} />
          </span>
          <div className="text-xs">
            <div className="font-bold text-slate-900 leading-tight">$482.60</div>
            <div className="text-slate-500 leading-tight">Paid online</div>
          </div>
        </div>

        <div className="absolute top-14 -right-5 bg-white rounded-xl shadow-lg border border-slate-200 px-3 py-2 flex items-center gap-2 rotate-3 animate-float [animation-delay:600ms]">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-white grid place-items-center">
            <Camera size={16} />
          </span>
          <div className="text-xs">
            <div className="font-bold text-slate-900 leading-tight">Photo added</div>
            <div className="text-slate-500 leading-tight">brake pads</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────── Dashboard preview (big screenshot-mockup) ─────────────────── */
function DashboardPreview() {
  return (
    <div className="mt-20 relative">
      <div aria-hidden className="absolute -inset-6 bg-gradient-to-br from-brand-500/30 via-amber-500/20 to-brand-600/25 rounded-[2.5rem] blur-3xl" />
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-3 shadow-2xl ring-1 ring-white/10">
        <div className="rounded-2xl bg-white overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <div className="mx-auto px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 font-mono">
              apps.2set.com / shop
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 p-5 text-sm">
            {/* Sidebar */}
            <aside className="col-span-1 bg-gradient-to-b from-slate-50 to-white rounded-xl p-3 border border-slate-100 space-y-1">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white grid place-items-center">
                  <Wrench size={14} />
                </span>
                <span className="font-bold text-slate-900 text-sm">Fixora</span>
              </div>
              {[
                { l: 'Dashboard',     active: true,  Icon: BarChart3 },
                { l: 'Repair orders', active: false, Icon: Wrench },
                { l: 'Customers',     active: false, Icon: Users },
                { l: 'Inspections',   active: false, Icon: ClipboardCheck },
                { l: 'Reports',       active: false, Icon: TrendingUp },
              ].map((it) => (
                <div key={it.l}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs
                    ${it.active ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <it.Icon size={13} />
                  {it.l}
                </div>
              ))}
            </aside>

            {/* Main */}
            <div className="col-span-4 space-y-3">
              {/* Metric tiles */}
              <div className="grid grid-cols-3 gap-3">
                <Metric label="Open ROs"          value="14"      tint="from-brand-500 to-brand-700"    Icon={Wrench} />
                <Metric label="Awaiting approval" value="3"        tint="from-amber-500 to-orange-600"    Icon={ClipboardCheck} />
                <Metric label="Today's revenue"   value="$2,840"   tint="from-emerald-500 to-teal-600"    Icon={CreditCard} />
              </div>

              {/* RO list */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-slate-700">Recent repair orders</span>
                  <span className="text-brand-600 font-semibold">View all →</span>
                </div>
                <div className="divide-y divide-slate-200">
                  {[
                    { id: 'RO-1042', veh: '2019 F-150 — Mendez',    status: 'In progress',           c: 'bg-amber-100 text-amber-800',   Icon: Wrench,          tint: 'from-amber-500 to-orange-600' },
                    { id: 'RO-1041', veh: '2022 Model Y — Chen',    status: 'Awaiting authorization', c: 'bg-blue-100 text-blue-800',   Icon: ClipboardCheck,  tint: 'from-sky-500 to-blue-600' },
                    { id: 'RO-1040', veh: '2017 Civic — Patel',     status: 'Ready for pickup',       c: 'bg-emerald-100 text-emerald-800', Icon: CheckCircle2, tint: 'from-emerald-500 to-teal-600' },
                  ].map((r) => (
                    <div key={r.id} className="flex items-center gap-3 py-2.5 text-xs">
                      <span className={`w-7 h-7 rounded-lg bg-gradient-to-br ${r.tint} text-white grid place-items-center shadow-sm`}>
                        <r.Icon size={13} />
                      </span>
                      <code className="font-mono text-slate-500 font-semibold">{r.id}</code>
                      <span className="text-slate-700 truncate">{r.veh}</span>
                      <span className={`ml-auto px-2 py-0.5 rounded-full font-semibold ${r.c}`}>{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Metric({ label, value, tint, Icon }) {
  return (
    <div className="relative bg-white rounded-xl p-3 border border-slate-200 shadow-sm overflow-hidden">
      <div aria-hidden className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br ${tint} opacity-20 blur-xl`} />
      <div className="relative flex items-center gap-2">
        <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tint} text-white grid place-items-center shadow`}>
          <Icon size={14} />
        </span>
        <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{label}</div>
      </div>
      <div className="mt-2 text-xl font-extrabold text-slate-900 tabular-nums">{value}</div>
    </div>
  )
}

/* ─────────────────── Data ─────────────────── */
const features = [
  { icon: FileText,       tint: 'from-brand-500 to-brand-700',   title: 'Estimates & repair orders', body: 'Build an estimate in minutes with labor, parts, fees, discounts, taxes — then convert to a repair order in one click.' },
  { icon: ClipboardCheck, tint: 'from-emerald-500 to-teal-600',  title: 'Digital vehicle inspections', body: 'Pass / fail / service-soon with photos. Customers see them on a share link and approve items one by one.' },
  { icon: Smartphone,     tint: 'from-amber-500 to-brand-600', title: 'Technician mobile submit',    body: 'Issue a secure token link to your tech\'s phone. They fill inspection items with photos. No pricing exposed.' },
  { icon: Users,          tint: 'from-sky-500 to-blue-600',      title: 'Customer approvals',          body: 'Online authorization via share link. Approve, decline, or request changes — with reminder emails on autopilot.' },
  { icon: CreditCard,     tint: 'from-emerald-500 to-green-600', title: 'Online payments',             body: 'Send a Stripe Checkout link. Payment posts to the document and emails a receipt automatically.' },
  { icon: ShieldCheck,    tint: 'from-rose-500 to-red-600',      title: 'Tenant isolation + MFA',      body: 'Every shop\'s data is scoped per company on every endpoint. Argon2id passwords. Optional two-factor on login.' },
]

const workflow = [
  { title: 'Customer calls',    body: 'Capture the customer + vehicle. One keystroke to open an estimate.',       Icon: Users,          tint: 'from-sky-500 to-blue-600' },
  { title: 'Estimate',          body: 'Add labor, parts, inspections. Share link for customer review.',           Icon: FileText,       tint: 'from-brand-500 to-brand-700' },
  { title: 'Authorization',     body: 'Customer approves online or in-shop. Items roll into the repair order.',   Icon: ClipboardCheck, tint: 'from-emerald-500 to-teal-600' },
  { title: 'Repair order',      body: 'Tech submits inspection + updates. Shop sees progress in real time.',      Icon: Wrench,         tint: 'from-amber-500 to-brand-600' },
  { title: 'Invoice & payment', body: 'Convert to invoice, email the Stripe link, mark paid automatically.',      Icon: Receipt,        tint: 'from-amber-500 to-orange-600' },
]

/* ─────────────────── Global keyframe styles (scoped by name, kept tiny) ─────────────────── */
function AnimStyles() {
  return (
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(14px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-up {
        opacity: 0;
        animation: fadeUp .9s cubic-bezier(.21,.68,.3,1) forwards;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0); }
        50%      { transform: translateY(-8px) rotate(-1.5deg); }
      }
      .animate-float {
        animation: float 4.5s ease-in-out infinite;
      }

      @keyframes wiggle {
        0%, 100% { transform: rotate(0); }
        25%      { transform: rotate(-14deg); }
        50%      { transform: rotate(10deg); }
        75%      { transform: rotate(-6deg); }
      }
      .animate-wiggle {
        animation: wiggle 2.4s ease-in-out infinite;
        display: inline-block;
      }

      @keyframes gradientPan {
        0%   { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }
      .animate-gradient-pan {
        animation: gradientPan 6s linear infinite;
      }

      @keyframes drawLine {
        from { stroke-dashoffset: 320; }
        to   { stroke-dashoffset: 0; }
      }
      .animate-draw-line {
        animation: drawLine 1.6s .8s ease-out forwards;
      }

      @keyframes pingSlow {
        0%   { opacity: .55; transform: scale(1); }
        70%  { opacity: 0;   transform: scale(1.25); }
        100% { opacity: 0;   transform: scale(1.25); }
      }
      .animate-ping-slow {
        animation: pingSlow 2.4s cubic-bezier(.3,.6,.6,1) infinite;
      }

      @keyframes wheel {
        from { transform: rotate(0); }
        to   { transform: rotate(360deg); }
      }
      .animate-wheel {
        animation: wheel 3.5s linear infinite;
      }

      @keyframes orbit {
        0%, 100% { transform: translate(0, 0); }
        25%      { transform: translate(10px, -14px); }
        50%      { transform: translate(-6px, 10px); }
        75%      { transform: translate(-14px, -6px); }
      }
      .animate-orbit     { animation: orbit 14s ease-in-out infinite; }
      .animate-orbit-rev { animation: orbit 18s ease-in-out infinite reverse; }

      @keyframes tick {
        0%, 100% { transform: rotate(0); }
        50%      { transform: rotate(45deg); }
      }
      .animate-tick {
        transform-origin: center;
        animation: tick 2.6s ease-in-out infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        .animate-fade-up,
        .animate-float,
        .animate-wiggle,
        .animate-gradient-pan,
        .animate-draw-line,
        .animate-ping-slow,
        .animate-wheel,
        .animate-orbit,
        .animate-orbit-rev,
        .animate-tick {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `}</style>
  )
}

const testimonials = [
  { name: 'Marco D.',   role: 'Owner, 3-bay independent shop', tint: 'from-brand-500 to-brand-700',   quote: 'It replaced three tools we juggled — our estimates app, a PDF inspection generator, and a text-reminder service. Techs picked it up in a day.' },
  { name: 'Jaylen K.',  role: 'Service manager, European specialist',   tint: 'from-emerald-500 to-teal-600',   quote: 'Online approvals are a game-changer. Customers approve work from the parking lot — we skipped a whole round of phone tag.' },
  { name: 'Amelia R.',  role: 'Owner, high-volume collision shop',       tint: 'from-amber-500 to-orange-600',   quote: 'Reports actually tell me which services are profitable. I rebalanced my pricing in the first month and margins went up.' },
  { name: 'Kavi P.',    role: 'Lead technician, family-owned garage',     tint: 'from-pink-500 to-rose-600',      quote: 'Mobile inspection submit saved me from running back to the service writer every 10 minutes. Photos go straight to the customer.' },
]
