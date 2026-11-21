import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-24 text-center">
      <SEO
        title="Page not found — Fixora ERP"
        description="This page could not be found."
        path="/404"
        noindex
      />
      <h1 className="text-5xl font-extrabold text-slate-900">404</h1>
      <p className="mt-4 text-slate-600">We could not find the page you were looking for.</p>
      <div className="mt-8">
        <Link to="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">
          Back to home
        </Link>
      </div>
    </div>
  )
}
