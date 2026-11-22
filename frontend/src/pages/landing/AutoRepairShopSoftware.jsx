import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Wrench, ClipboardCheck, FileText, Smartphone, Users, CreditCard } from 'lucide-react'
import SEO from '../../components/SEO'
import { PAGES, SITE, breadcrumbJsonLd, softwareAppJsonLd, faqPageJsonLd } from '../../lib/seo-config'
import { track } from '../../lib/analytics'

const faqs = [
  { q: 'Is Fixora ERP designed specifically for auto repair shops?', a: 'Yes. Fixora ERP is purpose-built for independent auto repair shops: estimates, repair orders, VIN-level vehicle history, digital vehicle inspections with photo capture, technician mobile submit, and customer online authorization.' },
  { q: 'Does it handle digital vehicle inspections (DVIs)?',          a: 'Yes. Build your own DVI templates with pass / fail / service-soon states, photo per item, and notes. Share the inspection with the customer via a secure link; they can approve items individually and the approved items roll onto the repair order automatically.' },
  { q: 'Can technicians submit work from their phones?',               a: 'Yes. You mint a secure, scoped link for a technician. They open it on any phone and fill inspection items with photos. The submission lands directly in the shop UI. Pricing is never exposed to them.' },
  { q: 'How are customer approvals handled?',                          a: 'You send a share link; the customer reviews each line item and chooses approve, decline, or request changes. Reminder emails are sent automatically. Approved items land on the repair order with an audit trail.' },
]

export default function AutoRepairShopSoftware() {
  return (
    <div>
      <SEO
        title={PAGES.autoRepair.title}
        description={PAGES.autoRepair.description}
        keywords={PAGES.autoRepair.keywords}
        path={PAGES.autoRepair.path}
        jsonLd={[
          softwareAppJsonLd(),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Auto Repair Shop Software', path: PAGES.autoRepair.path },
          ]),
        ]}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100">Auto repair shop software</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Auto repair shop software: estimates, repair orders, inspections, payments</h1>
        <p className="mt-5 text-lg text-slate-600 max-w-3xl">
          Fixora ERP is auto repair shop software built around the actual workflow of an independent shop — from the first phone call through the paid invoice. Estimates convert to repair orders. Digital inspections become customer approvals. Approvals roll onto the invoice. Nothing is retyped and nothing is lost between apps.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact?topic=demo" onClick={() => track.demoClick('lp_autorepair_hero')} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold hover:brightness-110">
            Book a Demo <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/features" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-800 border border-slate-200 font-semibold hover:border-slate-300">
            See all features
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Built for how a shop actually runs</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText,       title: 'Estimates &rarr; ROs &rarr; invoices', body: 'One editor across all three doc types. Labor and parts calculate live. Convert in a click; the record stays the same.' },
              { icon: ClipboardCheck, title: 'Digital vehicle inspections',           body: 'Customizable DVI templates. Pass / fail / service-soon with photo per item. Shareable link for the customer.' },
              { icon: Smartphone,     title: 'Technician mobile submit',               body: 'Secure link to the tech’s phone. They fill items with photos. No prices exposed. Submit lands in the shop UI.' },
              { icon: Users,          title: 'Customer online authorization',           body: 'Approve, decline, or request change per item. Reminder emails on autopilot. Signed items roll to the RO.' },
              { icon: CreditCard,     title: 'Online payments',                          body: 'Stripe Checkout link per invoice. Payment posts to the document. Receipt email automatically.' },
              { icon: Wrench,         title: 'Shop reporting',                            body: 'Parts profit, payment summaries, tax, technician productivity. Daily / weekly / monthly rollups.' },
            ].map((f) => (
              <div key={f.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
                  <f.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-semibold text-slate-900" dangerouslySetInnerHTML={{ __html: f.title }} />
                <p className="mt-2 text-sm text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900">What you stop juggling after you switch</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-3">
          {[
            'A paper inspection sheet the customer never sees',
            'A text message chain to approve $80 of recommended work',
            'A PDF of the estimate emailed, then re-typed as an invoice',
            'A spreadsheet of "who paid what" at the end of the week',
            'A separate card reader that does not know about the invoice',
            'A shop PC that holds the only copy of your customer history',
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
          <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
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
        <p className="mt-3 text-slate-600">No credit card required. No lock-in. Full access during your trial.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact?topic=demo" onClick={() => track.demoClick('lp_autorepair_bottom')} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold hover:brightness-110">
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
