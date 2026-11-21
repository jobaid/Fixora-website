import LegalPage from '../components/LegalPage'
import { privacyPolicyMarkdown } from '../legal/privacyPolicy'
import SEO from '../components/SEO'
import { PAGES, breadcrumbJsonLd } from '../lib/seo-config'

export default function Privacy() {
  return (
    <>
      <SEO
        title={PAGES.privacy.title}
        description={PAGES.privacy.description}
        path={PAGES.privacy.path}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Privacy', path: '/privacy' },
        ])}
      />
      <LegalPage
        title="Privacy Policy"
        kicker="Legal · Fixora ERP"
        effectiveDate="October 23, 2026"
        lastModified="October 23, 2026"
        content={privacyPolicyMarkdown}
      />
    </>
  )
}
