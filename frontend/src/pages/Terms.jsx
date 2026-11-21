import LegalPage from '../components/LegalPage'
import { termsOfServiceMarkdown } from '../legal/termsOfService'
import SEO from '../components/SEO'
import { PAGES, breadcrumbJsonLd } from '../lib/seo-config'

export default function Terms() {
  return (
    <>
      <SEO
        title={PAGES.terms.title}
        description={PAGES.terms.description}
        path={PAGES.terms.path}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Terms', path: '/terms' },
        ])}
      />
      <LegalPage
        title="Terms of Service — Product & Website"
        kicker="Legal · Fixora ERP"
        effectiveDate="October 23, 2026"
        lastModified="October 23, 2026"
        content={termsOfServiceMarkdown}
      />
    </>
  )
}
