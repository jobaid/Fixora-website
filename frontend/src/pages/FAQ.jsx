import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes, 30 days on every plan. No charge until the trial ends, cancel from Settings → Add-ons.' },
  { q: 'How does billing work?', a: 'Monthly or annual, through Stripe. Annual plans save about 20%. Invoices and card updates live in your account.' },
  { q: 'Can I cancel any time?', a: 'Yes. Cancellation takes effect at the end of your current paid period, you keep access until then.' },
  { q: 'Will my shop data be isolated from other shops?', a: 'Yes. Every table and every API endpoint is scoped by your company_id. One shop can never see another shop\'s data.' },
  { q: 'Can my technicians use their phones?', a: 'Yes. The Technician Mobile Submit add-on gives techs a secure link to fill inspections from a phone. No pricing is ever exposed to them.' },
  { q: 'Can customers approve estimates online?', a: 'Yes. The Online Authorization add-on lets you send a share link; customers approve, decline, or request changes per item. Reminder emails go out on autopilot.' },
  { q: 'Which payment processors do you support?', a: 'Stripe (fully integrated) and Authorize.Net (configurable). Payments post to the invoice and send a receipt automatically.' },
  { q: 'What about backups?', a: 'Weekly automated backups ship with the Backup & Restore add-on. One-click manual snapshots any time. Restore from any point.' },
  { q: 'Can I use my own email account to send to customers?', a: 'Yes. Connect any Gmail, Outlook, Yahoo, iCloud, or SMTP provider. Share links, authorization requests, and receipts come from your address.' },
  { q: 'Do you offer a demo?', a: 'Yes contact us and we\'ll walk you through the parts most relevant to your shop.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">Frequently asked questions</h1>
      <p className="mt-3 text-slate-600">The quick answers. Still have questions? <a href="/contact" className="text-brand-600 font-semibold">Contact us.</a></p>
      <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
        {faqs.map((f, i) => (
          <div key={i}>
            <button type="button" onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left py-5 flex items-center gap-3">
              <span className="flex-1 font-semibold text-slate-900">{f.q}</span>
              <ChevronDown className={`transition-transform ${open === i ? 'rotate-180' : ''}`} size={18} />
            </button>
            {open === i && <div className="pb-5 text-slate-600 text-sm leading-relaxed">{f.a}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
