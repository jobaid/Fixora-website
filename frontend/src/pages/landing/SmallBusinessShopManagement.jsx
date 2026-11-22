import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, DollarSign, Zap, ShieldCheck, CreditCard } from 'lucide-react'
import SEO from '../../components/SEO'
import { PAGES, SITE, breadcrumbJsonLd, softwareAppJsonLd, faqPageJsonLd } from '../../lib/seo-config'
import { track } from '../../lib/analytics'

const faqs = [
  { q: 'Is Fixora ERP suited for a one-person or one-bay shop?',    a: 'Yes. Fixora ERP is designed for independent shops that want modern tools without an enterprise price tag. The smallest plans do not charge per seat for your core workflow.' },
  { q: 'What does it cost to start?',                                a: 'Plans start at $150 per month, with a 30-day free trial on every plan. No setup fees. No mandatory onboarding package. You can cancel in Settings any time and your data is yours to export.' },
  { q: 'How long does setup take?',                                   a: 'Most small shops are live in a single afternoon. You add your shop profile, taxes, labor rate, and a few templates. Customers and vehicles can be imported from a spreadsheet or added as you go.' },
  { q: 'Can I keep my current email account?',                        a: 'Yes. Connect your existing Gmail, Outlook, or SMTP provider so share links, authorization requests, and receipts come from your shop’s email address.' },
]

export default function SmallBusinessShopManagement() {
  return (
    <div>
      <SEO
        title={PAGES.smallBiz.title}
        description={PAGES.smallBiz.description}
        keywords={PAGES.smallBiz.keywords}
        path={PAGES.smallBiz.path}
        jsonLd={[
          softwareAppJsonLd(),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Small Business Shop Management Software', path: PAGES.smallBiz.path },
          ]),
        ]}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100">Small business shop management software</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Shop management software for small-business auto repair shops</h1>
        <p className="mt-5 text-lg text-slate-600 max-w-3xl">
          Independent and small-business auto repair shops don’t need enterprise software to run well. Fixora ERP gives you a modern cloud-based shop management system at a price a one- to five-bay shop can afford. Plans start at ${SITE.startingPriceUSD}/month and include a {SITE.trialDays}-day free trial.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact?topic=demo" onClick={() => track.demoClick('lp_smallbiz_hero')} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold hover:brightness-110">
            Book a Demo <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-800 border border-slate-200 font-semibold hover:border-slate-300">
            See pricing
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900">Designed around small-shop realities</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: 'Honest, transparent pricing', body: `Plans start at $${SITE.startingPriceUSD}/month. What the Pricing page shows is what you pay. No setup fees and no per-seat gotchas on the smaller plans.` },
              { icon: Zap,        title: 'Live in an afternoon',          body: 'Add shop profile, tax, labor rate, a few templates — you are ready to write the next estimate. Full setup wizard guides each step.' },
              { icon: ShieldCheck,title: 'Data is yours, always',           body: 'Every shop has its own isolated workspace. Export your full data set as CSV or JSON at any time. Cancel in Settings whenever.' },
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
        <h2 className="text-3xl font-bold text-slate-900">What small shops get out of the box</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-3">
          {[
            'Customer + vehicle database with per-VIN history',
            'Estimates, repair orders, invoices in one editor',
            'Digital vehicle inspections with photo capture',
            'Customer approval by share link — no app install',
            'Stripe Checkout for one-tap online payments',
            'Reports on parts profit, payments, tax, productivity',
            'Argon2id passwords, AES-GCM at rest, TLS in transit',
            'Weekly automated backups and manual snapshots',
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
        <p className="mt-3 text-slate-600">No credit card required. No seat minimums. No mandatory onboarding package.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact?topic=demo" onClick={() => track.demoClick('lp_smallbiz_bottom')} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold hover:brightness-110">
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
