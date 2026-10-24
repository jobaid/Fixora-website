import LegalPage from '../components/LegalPage'
import { paymentTermsMarkdown } from '../legal/paymentTerms'

export default function PaymentTerms() {
  return (
    <LegalPage
      title="Payment Processing Terms of Service"
      kicker="Legal · Fixora ERP"
      effectiveDate="October 23, 2026"
      lastModified="October 23, 2026"
      content={paymentTermsMarkdown}
    />
  )
}
