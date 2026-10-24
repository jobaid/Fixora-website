export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900">About Fixora</h1>
      <div className="prose prose-slate mt-6 text-slate-700 leading-relaxed">
        <p>
          Fixora is modern shop-management software for independent auto repair shops.
          We built it because the existing players either feel like 1998 or charge enterprise prices for things a one-bay shop should get out of the box.
        </p>
        <p className="mt-4">
          Every shop has its own isolated workspace your customers, vehicles, estimates, repair orders, inspections, chat messages, and payments never touch another shop's data.
        </p>
        <p className="mt-4">
          Add-ons like digital inspections, online payments, and customer chat come with a 30-day free trial so you only pay for what you actually use.
        </p>
      </div>
    </div>
  )
}
