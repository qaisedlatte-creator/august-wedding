'use client'

export default function Watermark() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="wm-pattern"
            x="0"
            y="0"
            width="320"
            height="200"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-32)"
          >
            <text
              x="160"
              y="110"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="36"
              fontWeight="700"
              fill="rgba(61,10,10,0.11)"
              textAnchor="middle"
              dominantBaseline="middle"
              letterSpacing="10"
            >
              PREVIEW
            </text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wm-pattern)" />
      </svg>
    </div>
  )
}
