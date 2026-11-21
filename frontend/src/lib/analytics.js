// GA4 / GTM event wrapper.
//
// The tag snippets in index.html pull measurement IDs from meta tags so this
// file never needs a rebuild to switch accounts. To activate:
//   1. Add <meta name="ga4-id"   content="G-XXXXXXXXXX"> OR
//      Add <meta name="gtm-id"   content="GTM-XXXXXXX">
//      to frontend/index.html. Build the site. Google receives traffic.
//   2. In Search Console, add the DNS/HTML/meta verification of your choice.
//
// Nothing is reported until a measurement ID is present — no fake traffic.

const seenEvents = new Set() // de-dupe burst-fired events within a session

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  // Build a stable de-dupe key for events that should only fire once per unique
  // target (e.g. a specific CTA click within the same render).
  const dedupeKey = params.__dedupeKey
  if (dedupeKey) {
    if (seenEvents.has(dedupeKey)) return
    seenEvents.add(dedupeKey)
  }
  const clean = { ...params }
  delete clean.__dedupeKey

  // GA4 direct (gtag.js)
  if (typeof window.gtag === 'function') {
    try { window.gtag('event', name, clean) } catch {}
  }
  // GTM dataLayer
  if (Array.isArray(window.dataLayer)) {
    try { window.dataLayer.push({ event: name, ...clean }) } catch {}
  }
}

// Common funnel helpers — call-sites stay tidy.
export const track = {
  trialClick:    (location) => trackEvent('trial_click',    { location }),
  demoClick:     (location) => trackEvent('demo_click',     { location }),
  salesEmail:    (location) => trackEvent('contact_sales_email_click', { location }),
  contactSubmit: (topic)    => trackEvent('contact_form_submit', { topic }),
  pricingView:   ()         => trackEvent('pricing_view'),
  signIn:        (location) => trackEvent('sign_in_click', { location }),
}

// Page-view event on every client-side route change. Call from a top-level
// useEffect that depends on location.pathname.
export function trackPageView(path, title) {
  trackEvent('page_view', { page_path: path, page_title: title })
}
