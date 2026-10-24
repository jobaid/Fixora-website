import LegalPage from '../components/LegalPage'
import { privacyPolicyMarkdown } from '../legal/privacyPolicy'

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      kicker="Legal · Fixora ERP"
      effectiveDate="October 23, 2026"
      lastModified="October 23, 2026"
      content={privacyPolicyMarkdown}
    />
  )
}
