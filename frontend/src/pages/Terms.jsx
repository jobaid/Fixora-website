export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 prose prose-slate">
      <h1>Terms of Service</h1>
      <p className="text-sm text-slate-500">Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <p>These Terms of Service govern your use of Fixora. By creating an account or using the service you agree to these terms. Replace this placeholder with your actual terms before launch.</p>

      <h2>1. Service</h2>
      <p>Fixora provides software to manage auto repair shop operations. Features available depend on your subscription plan and any add-ons you have purchased.</p>

      <h2>2. Accounts</h2>
      <p>You are responsible for keeping your login credentials confidential and for all activity on your account. Notify us immediately of any unauthorized use.</p>

      <h2>3. Subscription + billing</h2>
      <p>Subscriptions auto-renew at the end of each billing period unless cancelled. Cancellations take effect at the end of the current paid period.</p>

      <h2>4. Acceptable use</h2>
      <p>You may not use Fixora to violate laws, infringe third-party rights, or impair the integrity of the service.</p>

      <h2>5. Data</h2>
      <p>You retain ownership of all data you upload. We store it securely and only use it to provide the service. See our Privacy Policy for details.</p>

      <h2>6. Termination</h2>
      <p>We may suspend or terminate accounts that violate these terms. Upon termination you may export your data for 30 days.</p>

      <h2>7. Disclaimer</h2>
      <p>The service is provided "as is" without warranties of any kind.</p>

      <h2>8. Contact</h2>
      <p>Questions about these terms? <a href="/contact">Contact us</a>.</p>
    </div>
  )
}
