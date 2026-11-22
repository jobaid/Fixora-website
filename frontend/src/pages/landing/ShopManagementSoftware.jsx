import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, CreditCard, Smartphone, ShieldCheck, Zap } from 'lucide-react'
import SEO from '../../components/SEO'
import { PAGES, SITE, breadcrumbJsonLd, softwareAppJsonLd, faqPageJsonLd } from '../../lib/seo-config'
import { track } from '../../lib/analytics'

const faqs = [
  { q: 'What is shop management software?', a: 'Shop management software is a single system that replaces the stack of paper, spreadsheets, and standalone apps most shops use. It handles customers, vehicles, estimates, repair orders, inspections, authorizations, payments, and reporting in one place so the same record flows cleanly from phone call to paid invoice.' },
  { q: 'Is Fixora ERP cloud-based?',        a: 'Yes. Fixora ERP is cloud-based — you sign in from any browser or phone. Nothing is installed on a shop computer. Weekly automated backups and one-click manual snapshots keep your data recoverable.' },
  { q: 'How much does it cost?',             a: 'Plans start at $150 per month with a 30-day free trial. Monthly or annual billing; annual plans save about 20%. See the Pricing page for a full feature breakdown per plan.' },
  { q: 'Can I try it before I pay?',          a: 'Yes. The 30-day free trial includes full access — no credit card is required to start. If it does not fit your shop, you simply do not subscribe.' },
]

export default function ShopManagementSoftware() {
  return (
    <div>
      <SEO
        title={PAGES.shopMgmt.title}
        description={PAGES.shopMgmt.description}
        keywords={PAGES.shopMgmt.keywords}
        path={PAGES.shopMgmt.path}
        jsonLd={[
          softwareAppJsonLd(),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Shop Management Software', path: PAGES.shopMgmt.path },
          ]),
        ]}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100">Shop management software</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Shop management software built for independent auto repair shops</h1>
        <p className="mt-5 text-lg text-slate-600 max-w-3xl">
          Fixora ERP is cloud-based <strong>shop management software</strong> that replaces paper estimates, spreadsheet trackers, and separate payment and inspection tools. Run estimates, repair orders, digital vehicle inspections, customer approvals, and payments from one connected system you access from any browser or phone.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact?topic=demo" onClick={() => track.demoClick('lp_shopmgmt_hero')} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold hover:brightness-110">
            Book a Demo <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-800 border border-slate-200 font-semibold hover:border-slate-300">
            See pricing
          </Link>
        </div>
        <div className="mt-5 flex items-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><Zap size={14} aria-hidden="true" /> 30-day free trial</span>
          <span className="flex items-center gap-1.5"><CreditCard size={14} aria-hidden="true" /> No credit card required</span>
          <span className="flex items-center gap-1.5"><ShieldCheck size={14} aria-hidden="true" /> AES-GCM at rest</span>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900">What the software covers</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Everything in Fixora ERP is built around the same underlying record, so the estimate you quote on Monday is the repair order the technician works on Tuesday and the invoice you send Wednesday — no retyping, no re-pricing, no lost context.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: 'Estimates, repair orders, invoices', body: 'One editor for all three. Convert in a click. Labor, parts, fees, discounts, taxes all calculate live.' },
              { icon: ClipboardCheck, title: 'Digital vehicle inspections', body: 'Templated inspections with photo capture. Share link so customers can approve items individually.' },
              { icon: Smartphone, title: 'Technician mobile submit', body: 'Secure link to the technician’s phone. They fill inspection items. No pricing exposed to them.' },
              { icon: CreditCard, title: 'Online payments', body: 'Send a Stripe Checkout link. Payment posts to the document. Receipts email automatically.' },
              { icon: ShieldCheck, title: 'Customer approvals', body: 'Per-item approve, decline, or request changes. Reminder emails on autopilot.' },
              { icon: FileText, title: 'Reports', body: 'Parts profit, payments, tax, technician productivity. CSV export. Daily/weekly/monthly rollups.' },
            ].map((f) => (
              <div key={f.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
                  <f.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Why shops switch to cloud-based shop management software</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-3">
          {[
            'Access the same data from the front desk, the bay, or at home',
            'Automatic backups — no more lost estimates on a crashed shop PC',
            'Customers approve on their phone instead of waiting on hold',
            'Technicians submit inspections from their phones with photo evidence',
            'Payments post directly to the invoice — no duplicate entry',
            'Updates ship automatically — no software to install on each machine',
          ].map((p) => (
            <li key={p} className="flex items-start gap-3 text-slate-700">
              <CheckCircle2 size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-brand-50/50 border-y border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-xl px-6">
            {faqs.map((f, i) => (
              <div key={i} className="py-5">
                <h3 className="font-semibold text-slate-900">{f.q}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Try {SITE.name} free for 30 days</h2>
        <p className="mt-3 text-slate-600">Full access during your trial. No credit card required. Cancel from Settings any time.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact?topic=demo" onClick={() => track.demoClick('lp_shopmgmt_bottom')} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold hover:brightness-110">
            Book a Demo <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-800 border border-slate-200 font-semibold hover:border-slate-300">
            See pricing
          </Link>
        </div>
      </section>
    </div>
  )
}
