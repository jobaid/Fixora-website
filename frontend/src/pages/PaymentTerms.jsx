import LegalPage from '../components/LegalPage'
import { paymentTermsMarkdown } from '../legal/paymentTerms'
import SEO from '../components/SEO'
import { PAGES, breadcrumbJsonLd } from '../lib/seo-config'

export default function PaymentTerms() {
  return (
    <>
      <SEO
        title={PAGES.paymentTerms.title}
        description={PAGES.paymentTerms.description}
        path={PAGES.paymentTerms.path}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Payment Terms', path: '/payment-terms' },
        ])}
      />
      <LegalPage
        title="Payment Processing Terms of Service"
        kicker="Legal · Fixora ERP"
        effectiveDate="October 23, 2026"
        lastModified="October 23, 2026"
        content={paymentTermsMarkdown}
      />
    </>
  )
}
