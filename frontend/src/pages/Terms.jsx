import LegalPage from '../components/LegalPage'
import { termsOfServiceMarkdown } from '../legal/termsOfService'

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service — Product & Website"
      kicker="Legal · Fixora ERP"
      effectiveDate="October 23, 2026"
      lastModified="October 23, 2026"
      content={termsOfServiceMarkdown}
    />
  )
}
