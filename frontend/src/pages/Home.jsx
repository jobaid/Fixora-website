import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, ShieldCheck, ClipboardCheck, CreditCard, Users, Wrench,
  FileText, Sparkles, BarChart3, CheckCircle2, Car, Receipt, Camera,
  RefreshCw, LifeBuoy, CalendarCheck, PhoneCall, Database, Rocket,
  DollarSign, UserPlus, Infinity as InfinityIcon, Puzzle, ChevronDown,
  Send, Check, HelpCircle,
} from 'lucide-react'
import { api } from '../lib/api'

const APP_ORIGIN = import.meta.env.VITE_APP_ORIGIN || 'https://fixoraerp.com'
const SIGNUP_URL = `${APP_ORIGIN}/signup`

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

export default function Home() {
  return (
    <>
      <AnimStyles />

      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-x-0 top-0 h-[720px] -z-10"
          style={{ background: 'radial-gradient(ellipse at 20% -10%, rgba(249,115,22,0.22), transparent 55%), radial-gradient(ellipse at 85% 10%, rgba(234,88,12,0.18), transparent 55%), linear-gradient(180deg,#f8fafc,#ffffff)' }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-[720px] -z-10 opacity-[0.3]"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '22px 22px', maskImage: 'linear-gradient(180deg, black, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-white/80 backdrop-blur text-brand-700 border border-brand-100 shadow-sm animate-fade-up">
                <Sparkles size={12} /> Built for independent auto repair shops
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05] animate-fade-up [animation-delay:120ms]">
                Ready for a better way to{' '}
                <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-amber-500 bg-clip-text text-transparent">
                  run your auto repair shop
                </span>
                ?
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed animate-fade-up [animation-delay:240ms]">
                Manage your automotive repair business with a smarter, more connected platform.
                Simplify daily operations, improve customer communication, and keep your shop
                organized with FixoraERP.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 animate-fade-up [animation-delay:360ms]">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck size={16} className="text-emerald-500" /> Secure & encrypted</span>
                <span className="inline-flex items-center gap-1.5"><CalendarCheck size={16} className="text-brand-500" /> Month-to-month</span>
                <span className="inline-flex items-center gap-1.5"><LifeBuoy size={16} className="text-amber-500" /> Real onboarding support</span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:480ms]">
                <a href="#migration"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                  See how switching works
                  <ArrowRight size={16} />
                </a>
                <a href="#pricing"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900">
                  View pricing
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 animate-fade-up [animation-delay:300ms]">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Migration Made Simple ───────────── */}
      <section id="migration" className="relative bg-white border-t border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-brand-50 text-brand-700 border border-brand-100">
              <RefreshCw size={12} /> Migration Made Simple
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Switch to FixoraERP with{' '}
              <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">confidence</span>.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Moving to a new shop management system shouldn't be complicated. We make the
              transition easier so you can focus on running your repair business.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {migration.map((m, i) => (
              <Reveal key={m.title} delay={i * 100}>
                <div className="group relative h-full bg-white border border-slate-200 rounded-2xl p-7 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                  <div aria-hidden className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${m.tint} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`} />
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${m.tint} text-white grid place-items-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                    <m.Icon size={26} />
                  </div>
                  <h3 className="mt-6 font-bold text-slate-900 text-lg">{m.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Transparent Pricing ───────────── */}
      <section id="pricing" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 scroll-mt-24">
        <div aria-hidden className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500/25 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div aria-hidden className="absolute inset-0 opacity-[0.1]"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-white/10 text-white border border-white/20 backdrop-blur">
              <DollarSign size={12} /> Transparent Pricing. No Hidden Fees.
            </div>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Starting at{' '}
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                $150/month
              </span>
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              Straightforward pricing for automotive repair shops. Get the tools you need
              without complicated pricing or unexpected commitments.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pricingHighlights.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="group h-full relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.tint} text-white grid place-items-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <p.Icon size={22} />
                  </div>
                  {p.big && (
                    <div className="mt-5 text-3xl font-extrabold text-white tabular-nums">{p.big}</div>
                  )}
                  <h3 className="mt-4 font-bold text-white text-base">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:brightness-105 transition-all">
              See full pricing details
              <ArrowRight size={16} />
            </Link>
            <p className="mt-4 text-xs text-slate-400">
              Advanced features may be available as optional add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Why Choose FixoraERP ───────────── */}
      <section id="why" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 border-y border-slate-200 scroll-mt-24">
        <div aria-hidden className="absolute inset-x-0 top-0 h-full -z-10 opacity-[0.3]"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-amber-50 text-amber-700 border border-amber-100">
              <Sparkles size={12} /> Why Choose FixoraERP
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Everything your shop runs on, in{' '}
              <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">one place</span>.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              From the first phone call to the paid invoice — track every step without juggling
              paper, spreadsheets, and sticky notes.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 h-full">
                  <div aria-hidden className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${f.tint} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity`} />
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${f.tint} text-white grid place-items-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                    <f.Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-bold text-slate-900 text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/features"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
              Explore all features
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── How Switching Works ───────────── */}
      <section id="how" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
            <Rocket size={12} /> How Switching Works
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Three steps to a{' '}
            <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">more organized</span>{' '}
            shop.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            A straightforward path from today's workflow to FixoraERP.
          </p>
        </div>

        <div className="mt-14 relative">
          <div aria-hidden className="hidden md:block absolute left-[12%] right-[12%] top-10 h-0.5 bg-gradient-to-r from-brand-200 via-amber-200 to-emerald-200" />
          <ol className="grid gap-6 md:grid-cols-3">
            {switchSteps.map((s, i) => (
              <Reveal key={s.title} as="li" delay={i * 120}>
                <div className="relative h-full bg-white border border-slate-200 rounded-2xl p-6 pt-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`absolute -top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${s.tint} text-white grid place-items-center shadow-lg ring-4 ring-white group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300`}>
                    <s.Icon size={24} />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Step {i + 1}</div>
                  <h3 className="mt-1 font-bold text-slate-900 text-lg">{s.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Product Showcase ───────────── */}
      <section id="showcase" className="relative bg-slate-50 border-y border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              <BarChart3 size={12} /> Inside the Platform
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Built to feel at home in a{' '}
              <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">busy shop</span>.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A clean workspace designed around repair orders, inspections, and the people who
              approve and pay for them.
            </p>
          </div>

          <div className="mt-14">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 py-20 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-sky-50 text-sky-700 border border-sky-100">
            <HelpCircle size={12} /> Frequently Asked Questions
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Answers to the{' '}
            <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">most common questions</span>.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* ───────────── Contact ───────────── */}
      <section id="contact" className="relative bg-gradient-to-br from-slate-50 to-white border-y border-slate-200 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                <Send size={12} /> Contact Us
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Questions? We're{' '}
                <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">ready to help</span>.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Ask about pricing, migration, subscriptions, or advanced add-ons. We respond
                within one business day.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Pricing & subscription guidance</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Data migration planning</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Product demos & walkthroughs</div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Final CTA ───────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-10 sm:p-16 text-center">
          <div aria-hidden className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500/25 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
          <div aria-hidden className="absolute inset-0 opacity-[0.12]"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-white/10 text-white border border-white/20 backdrop-blur">
              <Sparkles size={12} /> Make the switch
            </div>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to simplify your{' '}
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                auto repair business
              </span>
              ?
            </h2>
            <p className="mt-5 text-slate-300 max-w-2xl mx-auto text-lg">
              Take the next step toward a more organized and efficient repair shop with FixoraERP.
            </p>
            <div className="mt-10 flex justify-center">
              <a href={SIGNUP_URL}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-base shadow-xl shadow-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/40 hover:brightness-110 transition-all">
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Month-to-month. Cancel anytime from Settings.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─────────────────── FAQ accordion ─────────────────── */
function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300
      ${open ? 'bg-white border-slate-300 shadow-md' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
      <button type="button" onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
        <span className="font-semibold text-slate-900 text-base sm:text-lg">{q}</span>
        <ChevronDown size={20}
          className={`shrink-0 text-slate-500 transition-transform duration-300 ${open ? 'rotate-180 text-brand-600' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-out
        ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{a}</div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────── Contact form ─────────────────── */
function ContactForm() {
  const [form, setForm] = useState({
    name: '', shop: '', email: '', phone: '',
    subject: '', topic: 'sales', message: '',
  })
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState('')
  const [err, setErr] = useState('')
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (busy) return
    setErr(''); setSent(''); setBusy(true)
    try {
      const payload = {
        name: form.name,
        email: form.email,
        shop: form.shop,
        phone: form.phone,
        topic: form.topic,
        message: form.subject
          ? `Subject: ${form.subject}\n\n${form.message}`
          : form.message,
      }
      const r = await api('/public/contact', { method: 'POST', body: payload })
      setSent(r.message || "Thanks! We'll get back to you within one business day.")
    } catch (ex) {
      setErr(ex.message || 'Something went wrong. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  if (sent) {
    return (
      <div className="h-full bg-white border border-emerald-200 rounded-2xl p-8 flex items-start gap-3 shadow-sm">
        <span className="shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center">
          <Check size={20} />
        </span>
        <div>
          <div className="font-bold text-emerald-900 text-lg">Message sent</div>
          <div className="mt-1 text-sm text-emerald-800">{sent}</div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit}
      className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" value={form.name} onChange={update('name')} required autoComplete="name" />
        <Field label="Business / Shop Name" value={form.shop} onChange={update('shop')} autoComplete="organization" />
        <Field label="Email Address" type="email" value={form.email} onChange={update('email')} required autoComplete="email" />
        <Field label="Phone Number" type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />
      </div>
      <Field label="Subject" value={form.subject} onChange={update('subject')} placeholder="How can we help?" />
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Inquiry Type</span>
        <select value={form.topic} onChange={update('topic')}
          className="mt-1 block w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none">
          <option value="sales">General Information</option>
          <option value="pricing">Pricing and Subscription</option>
          <option value="migration">Data Migration</option>
          <option value="demo">Product Demonstration</option>
          <option value="addons">Advanced Add-Ons</option>
          <option value="support">Technical Questions</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Message</span>
        <textarea value={form.message} onChange={update('message')} rows={5} required
          className="mt-1 block w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" />
      </label>
      {err && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800">{err}</div>
      )}
      <button type="submit" disabled={busy}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold shadow-lg shadow-brand-500/30 hover:brightness-110 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed">
        {busy ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </button>
    </form>
  )
}

function Field({ label, type = 'text', ...rest }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input type={type} {...rest}
        className="mt-1 block w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" />
    </label>
  )
}

/* ─────────────────── Hero visual ─────────────────── */
function HeroVisual() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 bg-gradient-to-br from-brand-500/30 via-amber-500/20 to-brand-600/25 rounded-[2rem] blur-3xl -z-10" />
      <div className="relative bg-white/85 backdrop-blur border border-slate-200 rounded-3xl shadow-2xl p-6 overflow-hidden">
        <svg viewBox="0 0 260 110" className="w-full" aria-label="Auto repair illustration">
          <defs>
            <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f97316" />
              <stop offset="1" stopColor="#c2410c" />
            </linearGradient>
            <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="130" cy="98" rx="110" ry="6" fill="#7c2d12" opacity="0.15" />
          <path d="M20 70 L45 30 Q52 20 65 20 L170 20 Q183 20 190 30 L210 70 L240 70 Q248 70 248 78 L248 85 Q248 92 240 92 L232 92 Q230 100 220 100 Q210 100 208 92 L72 92 Q70 100 60 100 Q50 100 48 92 L20 92 Q12 92 12 85 L12 78 Q12 70 20 70 Z"
            fill="url(#body)" stroke="#7c2d12" strokeWidth="1.2" />
          <path d="M30 50 Q130 20 220 50 L220 68 L30 68 Z" fill="url(#shine)" />
          <path d="M50 65 L63 32 Q66 25 73 25 L160 25 Q167 25 170 32 L183 65 Z" fill="#7c2d12" opacity="0.75" />
          <line x1="117" y1="25" x2="117" y2="65" stroke="#fed7aa" strokeWidth="1" opacity="0.9" />
          <ellipse cx="235" cy="60" rx="4" ry="3" fill="#fde047" />
          <g className="animate-wheel" style={{ transformOrigin: '60px 92px' }}>
            <circle cx="60" cy="92" r="12" fill="#0f172a" />
            <circle cx="60" cy="92" r="6" fill="#334155" />
            <circle cx="60" cy="92" r="2.5" fill="#fed7aa" />
            <rect x="59" y="82" width="2" height="20" fill="#64748b" />
            <rect x="50" y="91" width="20" height="2" fill="#64748b" />
          </g>
          <g className="animate-wheel" style={{ transformOrigin: '220px 92px' }}>
            <circle cx="220" cy="92" r="12" fill="#0f172a" />
            <circle cx="220" cy="92" r="6" fill="#334155" />
            <circle cx="220" cy="92" r="2.5" fill="#fed7aa" />
            <rect x="219" y="82" width="2" height="20" fill="#64748b" />
            <rect x="210" y="91" width="20" height="2" fill="#64748b" />
          </g>
        </svg>

        <div className="absolute -top-3 -left-3 bg-white rounded-xl shadow-lg border border-slate-200 px-3 py-2 flex items-center gap-2 animate-float">
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

/* ─────────────────── Dashboard preview mockup ─────────────────── */
function DashboardPreview() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 bg-gradient-to-br from-brand-500/25 via-amber-500/15 to-brand-600/20 rounded-[2.5rem] blur-3xl" />
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-3 shadow-2xl ring-1 ring-white/10">
        <div className="rounded-2xl bg-white overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <div className="mx-auto px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 font-mono">
              fixoraerp.com / shop
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 p-5 text-sm">
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
                { l: 'Reports',       active: false, Icon: FileText },
              ].map((it) => (
                <div key={it.l}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs
                    ${it.active ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <it.Icon size={13} />
                  {it.l}
                </div>
              ))}
            </aside>

            <div className="col-span-4 space-y-3">
              <div className="grid grid-cols-3 gap-3">
                <Metric label="Open ROs"          value="14"      tint="from-brand-500 to-brand-700"   Icon={Wrench} />
                <Metric label="Awaiting approval" value="3"        tint="from-amber-500 to-orange-600"  Icon={ClipboardCheck} />
                <Metric label="Today's revenue"   value="$2,840"   tint="from-emerald-500 to-teal-600"  Icon={CreditCard} />
              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-slate-700">Recent repair orders</span>
                  <span className="text-brand-600 font-semibold">View all →</span>
                </div>
                <div className="divide-y divide-slate-200">
                  {[
                    { id: 'RO-1042', veh: '2019 F-150 — Mendez',   status: 'In progress',            c: 'bg-amber-100 text-amber-800',     Icon: Wrench,          tint: 'from-amber-500 to-orange-600' },
                    { id: 'RO-1041', veh: '2022 Model Y — Chen',   status: 'Awaiting authorization', c: 'bg-blue-100 text-blue-800',       Icon: ClipboardCheck,  tint: 'from-sky-500 to-blue-600' },
                    { id: 'RO-1040', veh: '2017 Civic — Patel',    status: 'Ready for pickup',       c: 'bg-emerald-100 text-emerald-800', Icon: CheckCircle2,    tint: 'from-emerald-500 to-teal-600' },
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
const migration = [
  {
    Icon: RefreshCw,
    tint: 'from-brand-500 to-brand-700',
    title: 'Quick Switchover',
    body: 'Smooth transition from your current system.',
  },
  {
    Icon: LifeBuoy,
    tint: 'from-amber-500 to-orange-600',
    title: 'Real Support Through the Process',
    body: 'We help you move your data and get running.',
  },
  {
    Icon: CalendarCheck,
    tint: 'from-emerald-500 to-teal-600',
    title: 'Month-to-Month',
    body: 'Cancel anytime. We earn your business every month.',
  },
]

const pricingHighlights = [
  {
    Icon: DollarSign,
    tint: 'from-brand-500 to-brand-700',
    big: '$150/mo',
    title: 'Starting Price',
    body: 'Get started with FixoraERP with plans starting at just $150 per month.',
  },
  {
    Icon: InfinityIcon,
    tint: 'from-amber-500 to-orange-600',
    title: 'Unlimited Users',
    body: 'Bring your entire team onto one platform — no per-seat charges.',
  },
  {
    Icon: CalendarCheck,
    tint: 'from-emerald-500 to-teal-600',
    title: 'No Long-Term Contracts',
    body: 'Month-to-month flexibility. No lock-in. Cancel anytime.',
  },
  {
    Icon: Puzzle,
    tint: 'from-sky-500 to-blue-600',
    title: 'Optional Add-Ons',
    body: 'Choose advanced features only when your business needs them.',
  },
]

const capabilities = [
  { Icon: FileText,       tint: 'from-brand-500 to-brand-700',   title: 'Estimates & repair orders', body: 'Build an estimate in minutes with labor, parts, fees, discounts, and taxes — then convert to a repair order in one click.' },
  { Icon: Receipt,        tint: 'from-amber-500 to-orange-600',  title: 'Invoices & payment tracking', body: 'Turn a finished RO into an invoice, send a secure payment link, and keep a clean record of what has been paid.' },
  { Icon: ClipboardCheck, tint: 'from-emerald-500 to-teal-600',  title: 'Digital vehicle inspections', body: 'Pass / fail / service-soon with photos. Customers see them on a share link and can review each item.' },
  { Icon: ShieldCheck,    tint: 'from-sky-500 to-blue-600',      title: 'Customer authorization',     body: 'Secure share links let customers approve work online or in-shop — no more phone tag before you can start.' },
  { Icon: Users,          tint: 'from-pink-500 to-rose-600',     title: 'Customer & vehicle records', body: 'Keep contact history, vehicles, and past work together so every service writer picks up where the last one left off.' },
  { Icon: Wrench,         tint: 'from-slate-700 to-slate-900',   title: 'Parts & labor management',   body: 'Price labor and parts the way your shop actually bills — overrides, discounts, and taxes all handled cleanly.' },
  { Icon: BarChart3,      tint: 'from-brand-500 to-amber-500',   title: 'Business reporting',         body: 'See how the shop is doing without exporting spreadsheets. Revenue, open ROs, and activity at a glance.' },
  { Icon: PhoneCall,      tint: 'from-emerald-500 to-brand-600', title: 'Customer communication',     body: 'Reach customers where they already are — share links for estimates, approvals, and receipts, all in one thread.' },
  { Icon: Database,       tint: 'from-slate-600 to-slate-800',   title: 'One connected system',       body: 'Estimates, ROs, inspections, invoices, and payments live in the same place — a change in one updates the rest.' },
]

const switchSteps = [
  {
    Icon: Rocket,
    tint: 'from-brand-500 to-brand-700',
    title: 'Get Started',
    body: 'Contact FixoraERP and begin the onboarding process. We walk you through what to expect and how to prepare your shop.',
  },
  {
    Icon: Database,
    tint: 'from-amber-500 to-orange-600',
    title: 'Move Your Information',
    body: 'Work with our team to plan the transition of your available business data so nothing important gets left behind.',
  },
  {
    Icon: Car,
    tint: 'from-emerald-500 to-teal-600',
    title: 'Start Using FixoraERP',
    body: 'Get familiar with the platform and manage your shop operations — estimates, ROs, inspections, invoices — through FixoraERP.',
  },
]

const faqs = [
  {
    q: 'What is FixoraERP?',
    a: 'FixoraERP is automotive repair shop management software designed to help repair businesses organize estimates, repair orders, invoices, inspections, customer communication, and other daily operations.',
  },
  {
    q: 'How much does FixoraERP cost?',
    a: 'Plans start at $150 per month. Additional advanced features may be available as optional paid add-ons. See the Pricing page for full details.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'FixoraERP aims to provide transparent pricing. Review the selected subscription plan and any optional add-ons before purchasing so you know exactly what you are paying for.',
  },
  {
    q: 'Can I add multiple employees?',
    a: 'Yes — the base subscription is built around a single shop, so your team uses the same platform without per-seat charges. If a specific plan has different terms, those will be clearly shown on the Pricing page.',
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No. FixoraERP subscriptions are month-to-month. You can cancel from inside Settings at any time, and your subscription will end at the close of the current billing period.',
  },
  {
    q: 'Can I migrate my existing shop data?',
    a: "Yes — we help you plan the move from your current system. Reach out through the Contact form and tell us what you're using today, and we'll walk through what data can be brought over.",
  },
  {
    q: 'Does FixoraERP offer additional features?',
    a: 'Yes. Certain advanced capabilities may be available as optional add-ons. Contact the team for details about availability and pricing for your shop.',
  },
  {
    q: 'How can I get started?',
    a: 'Use the Get Started button below to begin the signup process. You can also contact us first if you have questions about plans, migration, or add-ons.',
  },
  {
    q: 'How can I contact FixoraERP?',
    a: 'Use the Contact Us form on this page to send a message. We respond within one business day.',
  },
]

/* ─────────────────── Scoped keyframes ─────────────────── */
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
      @keyframes wheel {
        from { transform: rotate(0); }
        to   { transform: rotate(360deg); }
      }
      .animate-wheel {
        animation: wheel 3.5s linear infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .animate-fade-up,
        .animate-float,
        .animate-wheel {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `}</style>
  )
}
