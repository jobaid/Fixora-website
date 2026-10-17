export default function Logo({ size = 36, withWordmark = true, className = '' }) {
  const id = 'fx-' + Math.random().toString(36).slice(2, 8)
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Fixora logo"
        role="img"
      >
        <defs>
          <linearGradient id={`${id}-g1`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3c6dff" />
            <stop offset="55%" stopColor="#2554f5" />
            <stop offset="100%" stopColor="#0a2bb8" />
          </linearGradient>
          <linearGradient id={`${id}-g2`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#dbe6ff" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id={`${id}-shine`} cx="30%" cy="25%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Rounded shield / badge */}
        <rect x="2" y="2" width="60" height="60" rx="16" fill={`url(#${id}-g1)`} />
        <rect x="2" y="2" width="60" height="60" rx="16" fill={`url(#${id}-shine)`} />

        {/* Stylized car silhouette */}
        <g transform="translate(8 20)">
          {/* Car body */}
          <path
            d="M4 14 L8 6 Q10 3 14 3 L34 3 Q38 3 40 6 L44 14 L46 14 Q48 14 48 16 L48 22 Q48 24 46 24 L44 24 Q44 27 41 27 Q38 27 38 24 L10 24 Q10 27 7 27 Q4 27 4 24 L2 24 Q0 24 0 22 L0 16 Q0 14 2 14 Z"
            fill={`url(#${id}-g2)`}
          />
          {/* Windows */}
          <path
            d="M11 13 L14 6.5 Q15 5 17 5 L31 5 Q33 5 34 6.5 L37 13 Z"
            fill="#0a2bb8"
            opacity="0.78"
          />
          {/* Window split */}
          <line x1="24" y1="5" x2="24" y2="13" stroke="#dbe6ff" strokeWidth="0.8" opacity="0.9" />
          {/* Headlight */}
          <circle cx="44" cy="18" r="1.6" fill="#ffd84d" />
          {/* Wheels */}
          <circle cx="10" cy="25" r="4" fill="#0a1a3d" />
          <circle cx="10" cy="25" r="1.6" fill="#dbe6ff" />
          <circle cx="38" cy="25" r="4" fill="#0a1a3d" />
          <circle cx="38" cy="25" r="1.6" fill="#dbe6ff" />
        </g>

        {/* Wrench accent — crossing the badge corner */}
        <g transform="translate(36 8) rotate(35)">
          <path
            d="M0 6 Q0 2 4 2 Q5 0.5 7 0.5 Q11 0.5 11 4.5 Q11 6 10 7 L18 15 Q20 17 18 19 Q16 21 14 19 L6 11 Q5 11.5 4 11.5 Q0 11.5 0 7.5 Z"
            fill="#ffd84d"
            stroke="#0a2bb8"
            strokeWidth="0.6"
          />
        </g>
      </svg>
      {withWordmark && (
        <span className="font-extrabold text-lg tracking-tight text-slate-900">
          Fix<span className="text-brand-700">ora</span>
        </span>
      )}
    </span>
  )
}
