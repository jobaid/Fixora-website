import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Zap, ClipboardCheck, CreditCard, Users, Wrench, Smartphone, FileText } from 'lucide-react'

const APP_ORIGIN = import.meta.env.VITE_APP_ORIGIN || 'https://apps.2set.com'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100">
              Built for independent auto repair shops
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Run your auto repair shop <span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">smarter</span>.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl">
              Manage estimates, repair orders, vehicle inspections, customer approvals, invoices, and shop performance in one connected platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://apps.2set.com/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-lg shadow-brand-500/20 hover:brightness-110">
                Start free trial <ArrowRight size={18} />
              </a>
              <Link to="/features" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-800 border border-slate-200 font-semibold hover:border-slate-300">
                See features
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> AES-GCM at rest</span>
              <span className="flex items-center gap-1.5"><Zap size={14} /> 7-day free trial</span>
              <span className="flex items-center gap-1.5"><CreditCard size={14} /> Cancel any time</span>
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      {/* Features grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Everything your shop runs on, in one place</h2>
          <p className="mt-3 text-slate-600">From the first phone call to the paid invoice — track every step without juggling paper, spreadsheets, and sticky notes.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
                <f.icon size={22} />
              </div>
              <div className="mt-4 font-semibold text-slate-900">{f.title}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">A clean workflow from estimate to invoice</h2>
            <p className="mt-3 text-slate-600">Each step is linked, so a change in one place updates everything downstream.</p>
          </div>
          <ol className="mt-10 grid md:grid-cols-5 gap-4">
            {workflow.map((w, i) => (
              <li key={w.title} className="relative bg-white border border-slate-200 rounded-xl p-5">
                <div className="text-xs font-semibold text-brand-600">Step {i + 1}</div>
                <div className="mt-2 font-semibold text-slate-900">{w.title}</div>
                <p className="mt-2 text-sm text-slate-600">{w.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Try Fixora free for 7 days</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">No credit card charge until the trial ends. Cancel from Settings → Add-ons any time.</p>
        <div className="mt-8 flex justify-center gap-3">
          <a href={`${APP_ORIGIN}/signup`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-lg shadow-brand-500/20 hover:brightness-110">
            Start free trial <ArrowRight size={18} />
          </a>
          <a href={APP_ORIGIN} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-800 border border-slate-200 font-semibold hover:border-slate-300">
            I already have an account
          </a>
        </div>
      </section>
    </>
  )
}

function DashboardPreview() {
  return (
    <div className="mt-14 relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />
      <div className="relative bg-slate-900 rounded-2xl p-3 shadow-2xl ring-1 ring-slate-900/10">
        <div className="rounded-xl bg-white overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-200">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="ml-auto text-xs text-slate-400">apps.2set.com</span>
          </div>
          <div className="grid grid-cols-5 gap-4 p-5 text-sm">
            <aside className="col-span-1 bg-slate-50 rounded-lg p-3 text-slate-700 space-y-1">
              <div className="font-semibold text-slate-900">Shop</div>
              <div>Dashboard</div><div>Repair orders</div><div>Customers</div><div>Inspections</div><div>Reports</div>
            </aside>
            <div className="col-span-4 space-y-3">
              <div className="grid grid-cols-3 gap-3">
                <Metric label="Open ROs" value="14" />
                <Metric label="Awaiting approval" value="3" />
                <Metric label="Today's revenue" value="$2,840" />
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <div className="text-xs text-slate-500 mb-2">Repair orders</div>
                <div className="divide-y divide-slate-200">
                  {[
                    ['RO-1042', '2019 F-150 — Mendez', 'In progress', 'bg-amber-100 text-amber-800'],
                    ['RO-1041', '2022 Model Y — Chen',  'Awaiting authorization', 'bg-blue-100 text-blue-800'],
                    ['RO-1040', '2017 Civic — Patel',   'Ready for pickup', 'bg-emerald-100 text-emerald-800'],
                  ].map((r) => (
                    <div key={r[0]} className="flex items-center gap-3 py-2 text-xs">
                      <code className="font-mono text-slate-500">{r[0]}</code>
                      <span className="text-slate-700 truncate">{r[1]}</span>
                      <span className={`ml-auto px-2 py-0.5 rounded-full ${r[3]}`}>{r[2]}</span>
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

function Metric({ label, value }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-xl font-bold text-slate-900">{value}</div>
    </div>
  )
}

const features = [
  { icon: FileText,       title: 'Estimates & repair orders', body: 'Build an estimate in minutes with labor, parts, fees, discounts, taxes — then convert to a repair order in one click.' },
  { icon: ClipboardCheck, title: 'Digital vehicle inspections', body: 'Pass / fail / service-soon with photos. Customers see them on a share link and approve items one by one.' },
  { icon: Smartphone,     title: 'Technician mobile submit',   body: 'Issue a secure token link to your tech\'s phone. They fill inspection items with photos. No pricing exposed.' },
  { icon: Users,          title: 'Customer approvals',          body: 'Online authorization via share link. Approve, decline, or request changes — with reminder emails on autopilot.' },
  { icon: CreditCard,     title: 'Online payments',             body: 'Send a Stripe Checkout link. Payment posts to the document and emails a receipt automatically.' },
  { icon: ShieldCheck,    title: 'Tenant isolation + MFA',      body: 'Every shop\'s data is scoped by company_id on every endpoint. Argon2id passwords. Optional two-factor on login.' },
]

const workflow = [
  { title: 'Customer calls',    body: 'Capture the customer + vehicle. One keystroke to open an estimate.' },
  { title: 'Estimate',          body: 'Add labor, parts, inspections. Share link for customer review.' },
  { title: 'Authorization',     body: 'Customer approves online or in-shop. Items roll into the repair order.' },
  { title: 'Repair order',      body: 'Tech submits inspection + updates. Shop sees progress in real time.' },
  { title: 'Invoice & payment', body: 'Convert to invoice, email the Stripe link, mark paid automatically.' },
]
