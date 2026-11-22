import { useLocation, Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import { PAGES } from '../lib/seo-config'

const COPY = {
  sales:   { title: 'Thanks for reaching out about pricing',  body: 'A member of our sales team will respond within one business day. In the meantime, feel free to look over our plans below.' },
  demo:    { title: 'Thanks for the demo request',             body: 'A member of our team will reach out within one business day to schedule a time. Our demos are tailored to your shop, not a generic walkthrough.' },
  support: { title: 'Thanks for contacting support',           body: 'A member of our support team will respond within one business day. If this is an existing-account issue, please reply from the email associated with your shop account.' },
  other:   { title: 'Thanks for your message',                 body: 'We will respond within one business day.' },
}

export default function ThankYou() {
  const { state } = useLocation()
  const topic = (state && state.topic) || 'other'
  const copy = COPY[topic] || COPY.other

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
      <SEO
        title={PAGES.thankYou.title}
        description={PAGES.thankYou.description}
        path={PAGES.thankYou.path}
        noindex
      />
      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">
        <CheckCircle2 size={34} aria-hidden="true" />
      </div>
      <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-slate-900">{copy.title}</h1>
      <p className="mt-4 text-slate-600">{copy.body}</p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold hover:brightness-110"
        >
          See pricing <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link
          to="/features"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-800 border border-slate-200 font-semibold hover:border-slate-300"
        >
          Explore features
        </Link>
      </div>
    </div>
  )
}
