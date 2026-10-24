import {
  FileText, ClipboardCheck, Smartphone, Users, CreditCard, ShieldCheck,
  BarChart3, MessageSquare, Mail, Package, Database, History, ArrowRight,
  Sparkles, Zap, Wrench, Car, Receipt, QrCode, Bell, TrendingUp, CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const APP_ORIGIN = import.meta.env.VITE_APP_ORIGIN || 'https://fixoraerp.com'

const groups = [
  {
    title: 'Shop operations',
    tagline: 'Run every bay from one screen.',
    description: 'The daily cockpit of your shop from the moment a customer calls to the keys handed back.',
    illustration: 'operations',
    accent: 'from-brand-500 to-brand-700',
    items: [
      { icon: FileText,       tint: 'from-brand-500 to-brand-700',    title: 'Estimates, repair orders, invoices', body: 'One editor for all three doc types. Convert between them in a click. Labor, parts, fees, discounts, taxes calculate live.' },
      { icon: ClipboardCheck, tint: 'from-emerald-500 to-teal-600',   title: 'Digital vehicle inspections (DVI)',  body: 'Build your own templates. Pass / fail / service-soon per item with photos. Share with customer or print.' },
      { icon: Smartphone,     tint: 'from-amber-500 to-brand-600',  title: 'Technician mobile submit',           body: 'Mint a secure link, tech fills inspection on their phone. No pricing exposed. Submit lands straight in the shop UI.' },
      { icon: Users,          tint: 'from-sky-500 to-blue-600',       title: 'Customers & vehicles',               body: 'Full history per customer and per VIN. Multiple vehicles per customer. Mileage tracking.' },
    ],
  },
  {
    title: 'Customer experience',
    tagline: 'Keep every customer in the loop automatically.',
    description: 'Online approvals, chat, payment and email all branded with your shop\'s identity.',
    illustration: 'customer',
    accent: 'from-pink-500 to-rose-600',
    items: [
      { icon: ShieldCheck,   tint: 'from-emerald-500 to-green-600', title: 'Online authorization',   body: 'Approve, decline, or request changes online. Per-item approval. Reminder emails on autopilot.' },
      { icon: MessageSquare, tint: 'from-sky-500 to-blue-600',      title: 'Customer chat',           body: 'Two-way messaging per repair order. Customer sees shop updates in real time via a share link.' },
      { icon: CreditCard,    tint: 'from-emerald-500 to-teal-600',  title: 'Online payments',         body: 'Send a Stripe Checkout link. Payment posts to the document. Automated receipt email.' },
      { icon: Mail,          tint: 'from-cyan-500 to-blue-600',     title: 'Email from your account', body: 'Connect Gmail / Outlook / any SMTP. Share links, authorization requests, receipts all come from your address.' },
    ],
  },
  {
    title: 'Admin & reporting',
    tagline: 'Numbers that actually run your business.',
    description: 'KPIs, backups and auditing the quiet systems that keep a shop safe and growing.',
    illustration: 'admin',
    accent: 'from-amber-500 to-orange-600',
    items: [
      { icon: BarChart3, tint: 'from-amber-500 to-brand-600',  title: 'Reports',             body: 'Parts profit, payments, tax, technician productivity. Export CSV. Daily / weekly / monthly rollups.' },
      { icon: Package,   tint: 'from-amber-500 to-orange-600',   title: 'Add-ons marketplace', body: 'Enable features à la carte. 30-day free trial on each. Change plan or cancel from inside the shop.' },
      { icon: Database,  tint: 'from-brand-600 to-brand-800',    title: 'Backup & restore',    body: 'Weekly automated backups. One-click manual snapshots. Restore from any point.' },
      { icon: History,   tint: 'from-slate-600 to-slate-800',    title: 'Audit log',           body: 'Every settings change and sensitive action is logged with who / when / what. Immutable from the UI.' },
    ],
  },
]

export default function Features() {
  return (
    <div className="relative overflow-hidden">
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[520px] -z-10"
        style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(249,115,22,0.22), transparent 60%), linear-gradient(180deg,#f6faff,#ffffff)' }} />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[520px] -z-10 opacity-[0.35]"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '22px 22px', maskImage: 'linear-gradient(180deg, black, transparent 70%)' }} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-14">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100 shadow-sm">
            <Sparkles size={12} /> Everything an independent shop needs
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
            Features that <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-amber-500 bg-clip-text text-transparent">move the needle.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Twelve tightly-integrated tools covering the whole repair lifecycle the first-call to the paid invoice —
            without the bloat of enterprise suites.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={`${APP_ORIGIN}/signup`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-lg hover:brightness-110">
              Start free trial <ArrowRight size={16} />
            </a>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-800 border border-slate-200 font-semibold hover:border-slate-300">
              See pricing
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { k: '12+',   v: 'Core features',       Icon: Zap,         tint: 'from-amber-500 to-orange-500' },
            { k: '< 5m',  v: 'Setup time',          Icon: Wrench,      tint: 'from-sky-500 to-blue-600' },
            { k: '99.9%', v: 'Uptime target',       Icon: ShieldCheck, tint: 'from-emerald-500 to-teal-600' },
            { k: '7 days', v: 'Free trial, no card', Icon: CheckCircle2, tint: 'from-amber-500 to-brand-600' },
          ].map((s) => (
            <div key={s.v} className="relative flex items-center gap-3 p-4 bg-white/80 backdrop-blur rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <span className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.tint} text-white grid place-items-center shadow`}>
                <s.Icon size={20} />
              </span>
              <div>
                <div className="font-extrabold text-slate-900 text-xl leading-none tabular-nums">{s.k}</div>
                <div className="text-xs text-slate-600 mt-1">{s.v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24 pb-16">
        {groups.map((g, idx) => (
          <section key={g.title} className="scroll-mt-20">
            {/* Section header with illustration */}
            <div className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 ? 'lg:[direction:rtl]' : ''}`}>
              <div className="[direction:ltr]">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${g.accent} text-white text-[11px] font-bold uppercase tracking-wider shadow`}>
                  <span className="w-5 h-5 rounded-full bg-white/20 grid place-items-center">{idx + 1}</span>
                  {g.title}
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">{g.tagline}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed max-w-xl">{g.description}</p>
              </div>
              <div className="[direction:ltr]">
                <Illustration kind={g.illustration} accent={g.accent} />
              </div>
            </div>

            {/* Feature grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {g.items.map((f) => (
                <div key={f.title}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                  {/* Hover accent */}
                  <div aria-hidden className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${f.tint} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${f.tint} text-white grid place-items-center shadow-lg ring-1 ring-white/40
                    group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                    <f.icon size={22} />
                  </div>

                  <h3 className="mt-4 font-bold text-slate-900 leading-snug">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.body}</p>

                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-brand-600 transition">
                    Included on every plan
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Workflow strip */}
        <section>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-700 border border-amber-100">
              <TrendingUp size={12} /> How it fits together
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">From first call to paid invoice</h2>
            <p className="mt-3 text-slate-600">Each step is linked update one place and everything downstream follows.</p>
          </div>

          <div className="mt-10 relative">
            <div aria-hidden className="hidden md:block absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-brand-200 via-amber-300 to-amber-200" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { Icon: Users,          tint: 'from-sky-500 to-blue-600',       title: 'Customer in' },
                { Icon: FileText,       tint: 'from-brand-500 to-brand-700',   title: 'Estimate' },
                { Icon: ClipboardCheck, tint: 'from-emerald-500 to-teal-600',   title: 'Inspection' },
                { Icon: Wrench,         tint: 'from-amber-500 to-brand-600',  title: 'Repair order' },
                { Icon: Receipt,        tint: 'from-amber-500 to-orange-600',   title: 'Invoice paid' },
              ].map((s, i) => (
                <div key={s.title} className="relative flex flex-col items-center text-center bg-white border border-slate-200 rounded-2xl p-4 pt-6 shadow-sm hover:shadow-md transition">
                  <div className={`absolute -top-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${s.tint} text-white grid place-items-center shadow-lg ring-4 ring-white`}>
                    <s.Icon size={22} />
                  </div>
                  <div className="mt-6 text-[10px] font-bold uppercase tracking-wider text-slate-400">Step {i + 1}</div>
                  <div className="mt-1 font-semibold text-slate-900 text-sm">{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote / testimonial */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-12">
          <div aria-hidden className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-500/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="text-5xl text-brand-400 leading-none font-serif">"</div>
            <blockquote className="mt-2 text-xl sm:text-2xl text-white font-medium leading-snug">
              It replaced three tools we used to juggle our estimates app, a separate inspection PDF generator, and a text-reminder service.
              Our techs picked it up in a day.
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-300">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white font-bold">M</span>
              <div className="text-left">
                <div className="font-semibold text-white">Marco D.</div>
                <div className="text-xs text-slate-400">Owner, 3-bay independent shop</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ready to see it in your shop?</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">7-day free trial. No credit card. Setup takes under 5 minutes.</p>
          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            <a href={`${APP_ORIGIN}/signup`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-lg hover:brightness-110">
              Start free trial <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-800 border border-slate-200 font-semibold hover:border-slate-300">
              Book a demo
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

function Illustration({ kind, accent }) {
  // Shared frame
  const Frame = ({ children }) => (
    <div className="relative">
      <div aria-hidden className={`absolute -inset-4 bg-gradient-to-br ${accent} opacity-10 blur-2xl rounded-3xl`} />
      <div className="relative bg-white border border-slate-200 rounded-3xl shadow-xl p-5 overflow-hidden">
        <div className="flex items-center gap-1.5 pb-3 mb-3 border-b border-slate-100">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
        </div>
        {children}
      </div>
    </div>
  )

  if (kind === 'operations') {
    return (
      <Frame>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2 space-y-2">
            {['Dashboard', 'Repair orders', 'Estimates', 'Inspections', 'Customers'].map((l, i) => (
              <div key={l} className={`flex items-center gap-2 text-xs rounded-lg px-2.5 py-1.5 ${i === 1 ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-slate-600'}`}>
                <span className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-brand-500' : 'bg-slate-300'}`}></span>
                {l}
              </div>
            ))}
          </div>
          <div className="col-span-3 space-y-2">
            {/* Car illustration */}
            <svg viewBox="0 0 200 80" className="w-full rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-2">
              <defs>
                <linearGradient id="carA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#3c6dff" />
                  <stop offset="1" stopColor="#2554f5" />
                </linearGradient>
              </defs>
              <path d="M20 55 L35 25 Q40 18 50 18 L130 18 Q140 18 145 25 L160 55 L180 55 Q185 55 185 60 L185 65 Q185 70 180 70 L175 70 Q175 75 170 75 Q165 75 165 70 L55 70 Q55 75 50 75 Q45 75 45 70 L20 70 Q15 70 15 65 L15 60 Q15 55 20 55 Z"
                fill="url(#carA)" stroke="#0a2bb8" strokeWidth="1" />
              <path d="M38 52 L48 28 Q50 24 54 24 L120 24 Q124 24 126 28 L140 52 Z" fill="#dbe6ff" opacity="0.9" />
              <circle cx="50" cy="70" r="7" fill="#0a1a3d" /><circle cx="50" cy="70" r="3" fill="#dbe6ff" />
              <circle cx="155" cy="70" r="7" fill="#0a1a3d" /><circle cx="155" cy="70" r="3" fill="#dbe6ff" />
            </svg>
            {/* RO rows */}
            {[
              { k: 'RO-1042', s: 'In progress', c: 'bg-amber-100 text-amber-800' },
              { k: 'RO-1041', s: 'Awaiting auth', c: 'bg-blue-100 text-blue-800' },
              { k: 'RO-1040', s: 'Ready', c: 'bg-emerald-100 text-emerald-800' },
            ].map((r) => (
              <div key={r.k} className="flex items-center gap-2 bg-slate-50 rounded-lg px-2.5 py-1.5 text-[11px]">
                <code className="font-mono text-slate-500">{r.k}</code>
                <span className="text-slate-700 truncate">2019 F-150</span>
                <span className={`ml-auto px-2 py-0.5 rounded-full font-semibold ${r.c}`}>{r.s}</span>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    )
  }

  if (kind === 'customer') {
    return (
      <Frame>
        <div className="grid grid-cols-5 gap-4 items-center">
          {/* Phone mockup */}
          <div className="col-span-2">
            <div className="mx-auto w-32 h-56 rounded-[1.5rem] bg-slate-900 p-1.5 shadow-xl">
              <div className="w-full h-full rounded-[1.25rem] bg-white overflow-hidden flex flex-col">
                <div className="h-5 bg-slate-900 flex justify-center items-end pb-1">
                  <span className="w-10 h-1 rounded-full bg-slate-700"></span>
                </div>
                <div className="flex-1 p-2 space-y-1.5 text-[8px] bg-slate-50">
                  <div className="bg-white rounded-md p-1.5 shadow-sm">
                    <div className="font-bold text-slate-800">Fixora</div>
                    <div className="text-slate-500">RO-1041 ready for approval</div>
                  </div>
                  <div className="bg-brand-500 text-white rounded-md p-1.5 shadow">
                    <div>Approve &amp; pay →</div>
                  </div>
                  <div className="bg-emerald-100 text-emerald-800 rounded-md p-1.5 flex items-center gap-1">
                    <CheckCircle2 size={9} /> Paid $482.60
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Chat / events */}
          <div className="col-span-3 space-y-2 text-[11px]">
            <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <MessageSquare size={12} /> Chat with customer
              </div>
              <div className="bg-white rounded-md p-1.5 text-slate-700 shadow-sm">Hi — brake pads need replacing. Approve to proceed?</div>
              <div className="bg-brand-500 text-white rounded-md p-1.5 mt-1 ml-6 shadow-sm">Approved! Thanks.</div>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 rounded-lg px-2 py-1.5">
              <CreditCard size={14} /> <span className="font-semibold">Payment captured</span>
              <span className="ml-auto font-mono">$482.60</span>
            </div>
            <div className="flex items-center gap-2 bg-sky-50 text-sky-800 rounded-lg px-2 py-1.5">
              <Mail size={14} /> <span className="font-semibold">Receipt sent</span>
            </div>
          </div>
        </div>
      </Frame>
    )
  }

  // admin / reporting
  return (
    <Frame>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { k: '$12.4k', l: 'Revenue', c: 'from-emerald-500 to-teal-600' },
            { k: '38',     l: 'ROs closed', c: 'from-brand-500 to-brand-700' },
            { k: '94%',    l: 'Approval rate', c: 'from-amber-500 to-orange-600' },
          ].map((m) => (
            <div key={m.l} className="bg-slate-50 rounded-xl p-2">
              <div className={`text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r ${m.c} bg-clip-text text-transparent`}>{m.l}</div>
              <div className="font-extrabold text-slate-900 tabular-nums text-lg leading-none mt-0.5">{m.k}</div>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <svg viewBox="0 0 200 70" className="w-full">
          <defs>
            <linearGradient id="barA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3c6dff" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {[42, 55, 38, 60, 48, 65, 52].map((h, i) => (
            <rect key={i} x={10 + i * 27} y={65 - h} width="18" height={h} rx="3" fill="url(#barA)" opacity={0.55 + i * 0.06} />
          ))}
          <line x1="5" y1="65" x2="195" y2="65" stroke="#cbd5e1" strokeWidth="1" />
        </svg>
        {/* Legend */}
        <div className="flex items-center gap-3 text-[10px] text-slate-500">
          <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-500"></span> Weekly revenue</span>
          <span className="ml-auto inline-flex items-center gap-1 text-emerald-700 font-semibold"><TrendingUp size={10} /> +18% MoM</span>
        </div>
      </div>
    </Frame>
  )
}
