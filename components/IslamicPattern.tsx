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
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* 8-pointed star — geometric Islamic motif */}
            <g stroke={color} fill="none">
              <polygon
                points="40,8 45,27 63,17 53,35 72,40 53,45 63,63 45,53 40,72 35,53 17,63 27,45 8,40 27,35 17,17 35,27"
                strokeWidth="0.8"
                opacity={opacity}
              />
              {/* Inner octagon */}
              <polygon
                points="53,35 63,40 53,45 40,53 27,45 17,40 27,35 40,27"
                strokeWidth="0.5"
                opacity={opacity * 0.75}
              />
              {/* Center diamond */}
              <rect
                x="36"
                y="36"
                width="8"
                height="8"
                transform="rotate(45, 40, 40)"
                strokeWidth="0.5"
                opacity={opacity * 0.6}
              />
            </g>
            {/* Tile corner dots for continuity */}
            <circle cx="0"  cy="0"  r="1.5" fill={color} opacity={opacity * 0.4} />
            <circle cx="80" cy="0"  r="1.5" fill={color} opacity={opacity * 0.4} />
            <circle cx="0"  cy="80" r="1.5" fill={color} opacity={opacity * 0.4} />
            <circle cx="80" cy="80" r="1.5" fill={color} opacity={opacity * 0.4} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}
