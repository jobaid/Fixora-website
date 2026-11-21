import { useEffect } from 'react'
import { SITE, canonical } from '../lib/seo-config'

// Lightweight head manager — no external deps. Runs on every route change.
// Updates <title>, meta description, keywords, canonical, Open Graph, Twitter,
// and injects per-page JSON-LD into <head>.
//
// Values are replaced in place (not stacked) so the last-mounted SEO wins,
// which matches the mount order of a single page component.
export default function SEO({
  title,
  description,
  keywords,
  path,
  noindex = false,
  ogImage,
  ogType = 'website',
  jsonLd,
}) {
  useEffect(() => {
    if (title) document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'keywords', keywords)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')

    const canonicalUrl = canonical(path || '/')
    setLink('canonical', canonicalUrl)

    // Open Graph
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:site_name', SITE.name)
    setMeta('property', 'og:locale', SITE.locale)
    if (ogImage) setMeta('property', 'og:image', `${SITE.url}${ogImage}`)
    else setMeta('property', 'og:image', `${SITE.url}${SITE.ogImage}`)

    // Twitter card
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    // JSON-LD: wipe previous block and write a new one
    writeJsonLd(jsonLd)

    // On unmount, remove any JSON-LD this component injected. Meta/canonical
    // get overwritten by the next SEO component — no cleanup needed.
    return () => clearJsonLd()
  }, [title, description, keywords, path, noindex, ogImage, ogType, JSON.stringify(jsonLd)])

  return null
}

function setMeta(attr, key, content) {
  if (content === undefined || content === null || content === '') {
    const existing = document.head.querySelector(`meta[${attr}="${key}"]`)
    if (existing) existing.setAttribute('content', '')
    return
  }
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const JSONLD_ID = 'seo-jsonld-block'
function writeJsonLd(data) {
  clearJsonLd()
  if (!data) return
  const items = Array.isArray(data) ? data : [data]
  items.forEach((item, idx) => {
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = `${JSONLD_ID}-${idx}`
    s.textContent = JSON.stringify(item)
    document.head.appendChild(s)
  })
}
function clearJsonLd() {
  document.head.querySelectorAll(`script[id^="${JSONLD_ID}-"]`).forEach((n) => n.remove())
}
