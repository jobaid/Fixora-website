// Fixora logo — the full illustrated wordmark PNG. Vite's base path handles
// prefixing /marketing/ in production, so we reference it relative to BASE_URL.
const LOGO_SRC = (import.meta.env.BASE_URL || '/') + 'fixora-logo.png'

export default function Logo({ size = 36, height, className = '' }) {
  const h = height ?? size
  return (
    <img
      src={LOGO_SRC}
      alt="Fixora"
      height={h}
      style={{ height: h }}
      className={`w-auto select-none ${className}`}
      draggable="false"
      href= "https://www.fixoraerp.com"
    />
  )
}
