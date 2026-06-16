interface IslamicPatternProps {
  opacity?: number
  color?: string
  id?: string
}

export default function IslamicPattern({
  opacity = 0.08,
  color = '#C9A84C',
  id = 'islamic-pattern',
}: IslamicPatternProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id={id}
            x="0"
            y="0"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* Outer diamond */}
            <path
              d="M32,5 L59,32 L32,59 L5,32 Z"
              stroke={color}
              fill="none"
              strokeWidth="0.75"
              opacity={opacity}
            />
            {/* Inner diamond */}
            <path
              d="M32,18 L46,32 L32,46 L18,32 Z"
              stroke={color}
              fill="none"
              strokeWidth="0.5"
              opacity={opacity * 0.72}
            />
            {/* Center dot */}
            <circle cx="32" cy="32" r="1.8" fill={color} opacity={opacity * 0.55} />
            {/* Corner connector dots */}
            <circle cx="0"  cy="0"  r="1.4" fill={color} opacity={opacity * 0.38} />
            <circle cx="64" cy="0"  r="1.4" fill={color} opacity={opacity * 0.38} />
            <circle cx="0"  cy="64" r="1.4" fill={color} opacity={opacity * 0.38} />
            <circle cx="64" cy="64" r="1.4" fill={color} opacity={opacity * 0.38} />
            {/* Midpoint edge dots */}
            <circle cx="32" cy="0"  r="1"   fill={color} opacity={opacity * 0.28} />
            <circle cx="32" cy="64" r="1"   fill={color} opacity={opacity * 0.28} />
            <circle cx="0"  cy="32" r="1"   fill={color} opacity={opacity * 0.28} />
            <circle cx="64" cy="32" r="1"   fill={color} opacity={opacity * 0.28} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}
