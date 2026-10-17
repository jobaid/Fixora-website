import { FileText, ClipboardCheck, Smartphone, Users, CreditCard, ShieldCheck, BarChart3, MessageSquare, Mail, Package, Database, History } from 'lucide-react'

const groups = [
  {
    title: 'Shop operations',
    items: [
      { icon: FileText,       title: 'Estimates, repair orders, invoices', body: 'One editor for all three doc types. Convert between them in a click. Labor, parts, fees, discounts, taxes all calculate live.' },
      { icon: ClipboardCheck, title: 'Digital vehicle inspections (DVI)', body: 'Build your own templates. Pass / fail / service-soon per item with photos. Share with customer or print.' },
      { icon: Smartphone,     title: 'Technician mobile submit',          body: 'Mint a secure link, tech fills inspection on their phone. No pricing exposed. Submit lands straight in the shop UI.' },
      { icon: Users,          title: 'Customers & vehicles',              body: 'Full history per customer and per VIN. Multiple vehicles per customer. Mileage tracking.' },
    ],
  },
  {
    title: 'Customer experience',
    items: [
      { icon: ShieldCheck,   title: 'Online authorization',  body: 'Approve, decline, or request changes online. Per-item approval. Reminder emails on autopilot.' },
      { icon: MessageSquare, title: 'Customer chat',          body: 'Two-way messaging per repair order. Customer sees shop updates in real time via a share link.' },
      { icon: CreditCard,    title: 'Online payments',        body: 'Send a Stripe Checkout link. Payment posts to the document. Automated receipt email.' },
      { icon: Mail,          title: 'Email through your account', body: 'Connect Gmail / Outlook / any SMTP. Share links, authorization requests, receipts all come from your address.' },
    ],
  },
  {
    title: 'Admin & reporting',
    items: [
      { icon: BarChart3, title: 'Reports',           body: 'Parts profit, payments, tax, technician productivity. Export CSV. Daily / weekly / monthly rollups.' },
      { icon: Package,   title: 'Add-ons marketplace', body: 'Enable features à la carte. 7-day free trial on each. Change plan or cancel from inside the shop.' },
      { icon: Database,  title: 'Backup & restore',  body: 'Weekly automated backups. One-click manual snapshots. Restore from any point.' },
      { icon: History,   title: 'Audit log',         body: 'Every settings change and sensitive action is logged with who / when / what. Immutable from the UI.' },
    ],
  },
]

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900">Everything your shop needs</h1>
        <p className="mt-3 text-slate-600">Built for independent repair shops. No bloat. No per-seat gotchas on the smaller plans.</p>
      </div>
      <div className="mt-12 space-y-14">
        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-600">{g.title}</h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {g.items.map((f) => (
                <div key={f.title} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center">
                    <f.icon size={20} />
                  </div>
                  <div className="mt-3 font-semibold text-slate-900">{f.title}</div>
                  <p className="mt-2 text-sm text-slate-600">{f.body}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
