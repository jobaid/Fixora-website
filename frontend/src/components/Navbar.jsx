import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const APP_ORIGIN = import.meta.env.VITE_APP_ORIGIN || 'https://apps.2set.com'

const nav = [
  { to: '/features', label: 'Features' },
  { to: '/pricing',  label: 'Pricing' },
  { to: '/about',    label: 'About' },
  { to: '/faq',      label: 'FAQ' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-16 gap-6">
        <Link to="/" aria-label="Fixora home">
          <Logo size={36} />
        </Link>
        <div className="hidden md:flex items-center gap-1 ml-6">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to}
              className={({ isActive }) => `px-3 py-2 rounded-md text-sm ${isActive ? 'text-brand-700 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>
              {n.label}
            </NavLink>
          ))}
        </div>
        <div className="ml-auto hidden md:flex items-center gap-3">
          <a href={APP_ORIGIN} className="text-sm text-slate-600 hover:text-slate-900">Sign in</a>
          <a href={`${APP_ORIGIN}/signup`} className="btn-primary">Start free trial</a>
        </div>
        <button className="md:hidden ml-auto" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50">
                {n.label}
              </NavLink>
            ))}
            <a href={APP_ORIGIN} className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50">Sign in</a>
            <a href={`${APP_ORIGIN}/signup`} className="btn-primary mt-2 text-center">Start free trial</a>
          </div>
        </div>
      )}
      <style>{`
        .btn-primary { background: linear-gradient(90deg,#3c6dff,#2554f5); color:#fff; padding: 0.5rem 0.9rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 600; transition: filter .15s; }
        .btn-primary:hover { filter: brightness(1.1); }
      `}</style>
    </header>
  )
}
