import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const SIGNIN_URL = import.meta.env.VITE_SIGNIN_URL || 'https://my.fixoraerp.com'

const nav = [
  { to: '/features',   label: 'Features' },
  { to: '/pricing',    label: 'Pricing' },
  { to: '/#migration', label: 'Migration', hash: '#migration' },
  { to: '/faq',        label: 'FAQ' },
  { to: '/contact',    label: 'Contact' },
]

function NavItem({ item, mobile = false, onNavigate }) {
  const location = useLocation()
  const navigate = useNavigate()
  const base = mobile
    ? 'px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50'
    : 'px-3 py-2 rounded-md text-sm font-medium transition'

  if (item.hash) {
    const handleClick = (e) => {
      e.preventDefault()
      if (location.pathname === '/') {
        const el = document.querySelector(item.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        navigate(item.to)
      }
      if (onNavigate) onNavigate()
    }
    return (
      <a href={item.to} onClick={handleClick}
        className={`${base} ${mobile ? '' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>
        {item.label}
      </a>
    )
  }

  return (
    <NavLink to={item.to} onClick={onNavigate}
      className={({ isActive }) => mobile
        ? base
        : `${base} ${isActive ? 'text-brand-600 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`
      }>
      {item.label}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-20 gap-6">
        <Link to="/" aria-label="Fixora home" className="flex items-center shrink-0">
          <Logo height={64} className="drop-shadow-sm" />
        </Link>
        <div className="hidden md:flex items-center gap-1 ml-6">
          {nav.map((n) => <NavItem key={n.to} item={n} />)}
        </div>
        <div className="ml-auto hidden md:flex items-center gap-3">
          <a href={SIGNIN_URL} className="text-sm text-slate-600 hover:text-slate-900 font-medium">Sign in</a>
        </div>
        <button className="md:hidden ml-auto" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => <NavItem key={n.to} item={n} mobile onNavigate={close} />)}
            <a href={SIGNIN_URL} className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50">Sign in</a>
          </div>
        </div>
      )}
    </header>
  )
}
