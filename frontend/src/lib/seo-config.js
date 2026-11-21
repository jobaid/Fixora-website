// Single source of truth for site-level SEO facts.
// Edit here; every SEO component, sitemap entry, and structured-data block reads from this.

export const SITE = {
  name: 'Fixora ERP',
  legalName: 'Web Services LLC',
  url: 'https://www.fixoraerp.com',
  description:
    'Fixora ERP is modern shop management software for independent auto repair shops. Estimates, repair orders, digital vehicle inspections, customer approvals, online payments, and real-time reporting in one connected platform.',
  tagline: 'Modern shop management software for auto repair shops',
  emails: {
    general: 'info@fixoraerp.com',
    sales: 'sales@fixoraerp.com',
  },
  trialDays: 30,
  startingPriceUSD: 29,
  twitter: '@fixoraerp',
  ogImage: '/fixora-logo.png',
  locale: 'en_US',
  country: 'US',
}

// Signup CTAs land on the same site origin by convention (/signup).
// Signin goes to the SaaS admin at my.fixoraerp.com (existing users only).
export const APP_ORIGIN =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_APP_ORIGIN) ||
  SITE.url
export const SIGNUP_URL = `${APP_ORIGIN}/signup`
export const SIGNIN_URL =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SIGNIN_URL) ||
  'https://my.fixoraerp.com'
// Legacy alias (kept so earlier blog/landing templates keep working).
export const LOGIN_URL = SIGNIN_URL

// Page-level metadata for each indexable route.
export const PAGES = {
  home: {
    path: '/',
    title: 'Fixora ERP — Shop Management Software for Auto Repair Shops',
    description:
      'Fixora ERP is cloud-based shop management software built for independent auto repair shops. Run estimates, repair orders, digital vehicle inspections, customer approvals, online payments, and shop reporting from one dashboard. 30-day free trial, no credit card required.',
    keywords:
      'shop management software, auto repair shop software, repair shop management system, cloud shop management, digital vehicle inspection, repair order software',
  },
  switchToFixora: {
    path: '/lp/switch-to-fixoraerp',
    title: 'Switch to Fixora ERP — Migrate Your Auto Repair Shop Software',
    description:
      'Switching to Fixora ERP from another shop management tool? Import your customers and vehicles, keep your invoice history, and go live in a single afternoon. 30-day free trial, no credit card required.',
    keywords:
      'switch to fixora, migrate shop management software, change auto repair software, fixora migration, fixora onboarding',
  },
  features: {
    path: '/features',
    title: 'Features — Fixora ERP Shop Management Software',
    description:
      'Every feature your auto repair shop needs: estimates, repair orders, digital vehicle inspections, technician mobile submit, customer approvals, online payments, reports, and secure tenant isolation. 30-day free trial.',
    keywords:
      'auto repair shop features, DVI software, digital vehicle inspection, repair order management, technician mobile app',
  },
  pricing: {
    path: '/pricing',
    title: 'Pricing — Fixora ERP Shop Management Software',
    description:
      'Straightforward pricing for Fixora ERP shop management software. Monthly or annual billing on every plan with a 30-day free trial. Cancel any time. No credit card required to start.',
    keywords:
      'shop management software pricing, auto repair software cost, fixora pricing, repair shop software cost',
  },
  about: {
    path: '/about',
    title: 'About Fixora ERP — Built by Web Services LLC',
    description:
      'Fixora ERP is built by Web Services LLC to give independent auto repair shops modern, affordable shop management software that scales from a one-bay operation to a multi-location group.',
    keywords: 'about fixora, web services llc, auto repair software company',
  },
  contact: {
    path: '/contact',
    title: 'Contact Fixora ERP — Sales, Demo, and Support',
    description:
      'Get in touch with Fixora ERP. Request a product demo, ask about pricing, or get support. Sales: sales@fixoraerp.com. General: info@fixoraerp.com. Response within one business day.',
    keywords: 'fixora contact, request demo, auto repair software demo',
  },
  faq: {
    path: '/faq',
    title: 'FAQ — Fixora ERP Shop Management Software',
    description:
      'Answers to the most common questions about Fixora ERP: free trial, billing, cancellation, data isolation, technician mobile access, customer approvals, backups, and more.',
    keywords: 'fixora faq, shop management software questions, auto repair software faq',
  },
  terms: {
    path: '/terms',
    title: 'Terms of Service — Fixora ERP',
    description: 'Terms of Service governing use of Fixora ERP shop management software.',
    keywords: 'fixora terms of service',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy — Fixora ERP',
    description:
      'How Fixora ERP collects, uses, and protects personal and shop data. Operated by Web Services LLC.',
    keywords: 'fixora privacy policy, data protection',
  },
  paymentTerms: {
    path: '/payment-terms',
    title: 'Payment Terms — Fixora ERP',
    description: 'Payment terms for Fixora ERP subscriptions, billing cycles, and refunds.',
    keywords: 'fixora payment terms, saas billing terms',
  },
  thankYou: {
    path: '/thank-you',
    title: 'Thank You — Fixora ERP',
    description: 'Thanks for reaching out to Fixora ERP. We will respond within one business day.',
    keywords: '',
    noindex: true,
  },
  // SEO landing pages
  shopMgmt: {
    path: '/shop-management-software',
    title: 'Shop Management Software — Fixora ERP for Auto Repair Shops',
    description:
      'Fixora ERP is cloud-based shop management software for auto repair shops. Replace paper, spreadsheets, and legacy tools with one connected system for estimates, repair orders, inspections, and invoicing. Start a 30-day free trial.',
    keywords:
      'shop management software, cloud shop management, auto repair shop management, repair order software',
  },
  smallBiz: {
    path: '/small-business-shop-management-software',
    title: 'Shop Management Software for Small Business Auto Repair Shops',
    description:
      'Affordable shop management software for small-business auto repair shops. Run every customer, vehicle, estimate, repair order, and invoice from one simple dashboard. 30-day free trial.',
    keywords:
      'small business shop management software, independent repair shop software, shop management for small business',
  },
  autoRepair: {
    path: '/auto-repair-shop-software',
    title: 'Auto Repair Shop Software — Estimates, ROs, Inspections',
    description:
      'Fixora ERP is auto repair shop software that handles estimates, repair orders, digital vehicle inspections, customer approvals, and online payments. Built for independent shops that want to replace paper and disjointed tools.',
    keywords:
      'auto repair shop software, DVI, repair order management, mechanic shop software, automotive shop management',
  },
  // Blog
  blogIndex: {
    path: '/blog',
    title: 'Blog — Fixora ERP',
    description:
      'Practical guides for auto repair shop owners: choosing shop management software, inventory tips, cloud vs on-premise, and how to improve daily shop operations.',
    keywords: 'auto repair blog, shop management guide',
  },
  blogBest: {
    path: '/blog/best-shop-management-software-for-small-business',
    title: 'Best Shop Management Software for Small Business Repair Shops (2026)',
    description:
      'What to look for in shop management software when you run a small auto repair shop, how to evaluate vendors honestly, and the questions most owners forget to ask before signing up.',
    keywords:
      'best shop management software small business, best auto repair software, small shop software review',
  },
  blogChoose: {
    path: '/blog/how-to-choose-shop-management-software',
    title: 'How to Choose Shop Management Software: A Buyer’s Checklist',
    description:
      'A practical checklist for picking shop management software — must-have workflow features, data-ownership questions, hidden costs, migration risks, and how to run a short trial that actually tells you something.',
    keywords:
      'how to choose shop management software, shop software buyer guide, repair shop software checklist',
  },
  blogCloud: {
    path: '/blog/benefits-of-cloud-based-shop-management-software',
    title: 'Benefits of Cloud-Based Shop Management Software',
    description:
      'Why most auto repair shops are moving off desktop-only tools: automatic backups, access from any device, real-time customer approvals, security, and lower total cost of ownership.',
    keywords:
      'cloud shop management software, cloud auto repair software, saas repair shop',
  },
}

// Routes included in sitemap.xml (keep in sync with backend/internal/api/seo.go).
export const SITEMAP_ROUTES = [
  { page: PAGES.home, priority: 1.0, changefreq: 'weekly' },
  { page: PAGES.switchToFixora, priority: 0.95, changefreq: 'monthly' },
  { page: PAGES.shopMgmt, priority: 0.9, changefreq: 'monthly' },
  { page: PAGES.autoRepair, priority: 0.9, changefreq: 'monthly' },
  { page: PAGES.smallBiz, priority: 0.9, changefreq: 'monthly' },
  { page: PAGES.features, priority: 0.8, changefreq: 'monthly' },
  { page: PAGES.pricing, priority: 0.9, changefreq: 'weekly' },
  { page: PAGES.faq, priority: 0.6, changefreq: 'monthly' },
  { page: PAGES.about, priority: 0.5, changefreq: 'yearly' },
  { page: PAGES.contact, priority: 0.5, changefreq: 'yearly' },
  { page: PAGES.blogIndex, priority: 0.6, changefreq: 'weekly' },
  { page: PAGES.blogBest, priority: 0.6, changefreq: 'monthly' },
  { page: PAGES.blogChoose, priority: 0.6, changefreq: 'monthly' },
  { page: PAGES.blogCloud, priority: 0.6, changefreq: 'monthly' },
  { page: PAGES.terms, priority: 0.2, changefreq: 'yearly' },
  { page: PAGES.privacy, priority: 0.2, changefreq: 'yearly' },
  { page: PAGES.paymentTerms, priority: 0.2, changefreq: 'yearly' },
]

// Structured data helpers.
export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/fixora-logo.png`,
    description: SITE.description,
    email: SITE.emails.general,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: SITE.emails.sales,
        areaServed: SITE.country,
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SITE.emails.general,
        areaServed: SITE.country,
        availableLanguage: ['English'],
      },
    ],
  }
}
export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    publisher: { '@type': 'Organization', name: SITE.legalName },
  }
}
export function softwareAppJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Auto Repair Shop Management',
    operatingSystem: 'Web, iOS, Android',
    url: SITE.url,
    description: SITE.description,
    offers: {
      '@type': 'Offer',
      price: String(SITE.startingPriceUSD),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/pricing`,
    },
    publisher: { '@type': 'Organization', name: SITE.legalName },
  }
}
export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  }
}
export function faqPageJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
export function articleJsonLd({ page, published, modified, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${page.path}` },
    author: { '@type': 'Organization', name: SITE.legalName },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/fixora-logo.png` },
    },
    datePublished: published,
    dateModified: modified || published,
    image: image ? `${SITE.url}${image}` : `${SITE.url}${SITE.ogImage}`,
  }
}
export function canonical(path) {
  return `${SITE.url}${path === '/' ? '' : path}`
}
