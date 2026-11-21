import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { PAGES, SITE, SIGNUP_URL, breadcrumbJsonLd, articleJsonLd } from '../../lib/seo-config'
import { track } from '../../lib/analytics'

const PUBLISHED = '2026-11-01'

export default function HowToChooseShopManagement() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 prose prose-slate">
      <SEO
        title={PAGES.blogChoose.title}
        description={PAGES.blogChoose.description}
        keywords={PAGES.blogChoose.keywords}
        path={PAGES.blogChoose.path}
        ogType="article"
        jsonLd={[
          articleJsonLd({ page: PAGES.blogChoose, published: PUBLISHED }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: 'How to Choose Shop Management Software', path: PAGES.blogChoose.path },
          ]),
        ]}
      />

      <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Buyer’s checklist</p>
      <h1>How to Choose Shop Management Software: A Buyer&rsquo;s Checklist</h1>
      <p className="text-sm text-slate-500">Published {PUBLISHED}</p>

      <p>Choosing shop management software is a decision you&rsquo;ll live with for years. Switching later is expensive &mdash; not because of the subscription cost, but because of the operational time lost in the transition. Use this checklist before you sign up.</p>

      <h2>Workflow fit</h2>
      <ul>
        <li>Can one record move from estimate to repair order to invoice without re-entry?</li>
        <li>Is the digital vehicle inspection tied to the repair order, or a separate document?</li>
        <li>Can the customer approve individual inspection items from a phone?</li>
        <li>Does the invoice know which items came from an approved inspection?</li>
      </ul>

      <h2>Data ownership &amp; portability</h2>
      <ul>
        <li>Can you export all of your data (customers, vehicles, invoices, inspections, photos) yourself?</li>
        <li>In what formats &mdash; CSV, JSON, raw files?</li>
        <li>How long does the vendor keep your data after cancellation?</li>
        <li>Is there any contractual lock-in &mdash; multi-year terms, early-termination fees?</li>
      </ul>

      <h2>Security</h2>
      <ul>
        <li>How are passwords stored? (&ldquo;Argon2id&rdquo; or &ldquo;bcrypt with a sensible cost factor&rdquo; are good answers; &ldquo;salted&rdquo; alone is not.)</li>
        <li>How is data encrypted at rest? TLS in transit?</li>
        <li>Is there optional two-factor authentication for shop logins?</li>
        <li>How is one shop&rsquo;s data isolated from another&rsquo;s? Is it enforced per endpoint or only at the UI layer?</li>
      </ul>

      <h2>Pricing surprises</h2>
      <ul>
        <li>Is pricing the same on the Pricing page as the one you get after a sales call?</li>
        <li>Are there per-seat charges? SMS quotas? Payment processing markups?</li>
        <li>Is setup or onboarding mandatory, and if so, what does it cost?</li>
        <li>Does the price step up after a promotional period?</li>
      </ul>

      <h2>The real trial</h2>
      <p>A real trial is where you do your actual work in the product for at least a week. Build a real estimate. Run a real digital inspection on a real customer&rsquo;s vehicle. Send an approval. Take a payment. If the trial locks you out of core features so you can&rsquo;t test the workflow, it&rsquo;s a sandbox, not a trial.</p>

      <h2>Support &amp; roadmap</h2>
      <ul>
        <li>What are support hours? Is there a shared inbox or is everything a ticket?</li>
        <li>Are software updates automatic? How often do they ship?</li>
        <li>Is there a public roadmap or changelog you can read?</li>
      </ul>

      <h2>How Fixora ERP answers this checklist</h2>
      <p>{SITE.name} is designed to pass this checklist by default: one record across the workflow, DVI tied to the RO, customer per-item online approval, full export in CSV/JSON, Argon2id passwords, AES-GCM for secrets at rest, company_id scoping enforced on every endpoint, transparent pricing starting at ${SITE.startingPriceUSD}/month, and a {SITE.trialDays}-day free trial that gives you full access.</p>
      <p><Link to="/features">Full feature list</Link> &middot; <Link to="/pricing">Pricing</Link> &middot; <a href={SIGNUP_URL} onClick={() => track.trialClick('blog_choose_body')}>Start the trial</a></p>

      <div className="not-prose mt-10 p-6 rounded-xl bg-brand-50 border border-brand-100 text-center">
        <p className="font-semibold text-slate-900">Want a quick demo tailored to your shop?</p>
        <Link to="/contact" onClick={() => track.demoClick('blog_choose_bottom')} className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold">
          Request a demo
        </Link>
      </div>
    </article>
  )
}
