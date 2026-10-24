import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <Logo height={56} />
          <p className="mt-3 text-sm text-slate-600">Modern shop management for independent repair shops.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900 mb-3">Product</div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link to="/features" className="hover:text-slate-900">Features</Link></li>
            <li><Link to="/pricing"  className="hover:text-slate-900">Pricing</Link></li>
            <li><Link to="/faq"      className="hover:text-slate-900">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900 mb-3">Company</div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link to="/about"    className="hover:text-slate-900">About</Link></li>
            <li><Link to="/contact"  className="hover:text-slate-900">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900 mb-3">Legal</div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link to="/terms"          className="hover:text-slate-900">Terms of Service</Link></li>
            <li><Link to="/privacy"        className="hover:text-slate-900">Privacy Policy</Link></li>
            <li><Link to="/payment-terms"  className="hover:text-slate-900">Payment Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Fixora. All rights reserved.
      </div>
    </footer>
  )
}
