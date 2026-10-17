export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 prose prose-slate">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-slate-500">Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <p>This Privacy Policy describes how Fixora handles personal information. Replace this placeholder with your actual policy before launch — this template is not legal advice.</p>

      <h2>What we collect</h2>
      <ul>
        <li>Account info you provide (name, email, shop details)</li>
        <li>Billing info (handled by our payment processor; we never store card numbers)</li>
        <li>Usage data (logs, timestamps, feature usage) to improve the service</li>
        <li>Any shop data you upload (customers, vehicles, documents, photos)</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>Provide and secure the service</li>
        <li>Process payments through our payment provider</li>
        <li>Send transactional emails (confirmations, receipts, resets)</li>
        <li>Respond to support requests</li>
      </ul>

      <h2>Sharing</h2>
      <p>We don't sell your data. We share only with vendors necessary to operate the service (hosting, payment processing, transactional email) under appropriate agreements.</p>

      <h2>Security</h2>
      <p>Passwords are hashed with Argon2id. Sensitive secrets (SMTP passwords, OAuth tokens, payment keys) are encrypted at rest with AES-GCM. TLS everywhere in transit.</p>

      <h2>Your rights</h2>
      <p>Request access, export, or deletion of your account data at any time by <a href="/contact">contacting us</a>.</p>

      <h2>Contact</h2>
      <p>Privacy questions: <a href="/contact">contact us</a>.</p>
    </div>
  )
}
