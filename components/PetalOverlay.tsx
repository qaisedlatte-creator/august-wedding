'use client'

function pr(seed: number) { return ((seed * 9301 + 49297) % 233280) / 233280 }

const PETALS = Array.from({ length: 22 }, (_, i) => ({
  left:     pr(i * 7 + 1) * 86 + 5,
  duration: pr(i * 7 + 2) * 10 + 9,
  delay:   -(pr(i * 7 + 3) * 24),          // negative = already mid-flight on load
  size:     pr(i * 7 + 4) * 12 + 9,
  drift:   (pr(i * 7 + 5) - 0.5) * 170,
  spin:    (pr(i * 7 + 6) * 440 + 160) * (i % 2 === 0 ? 1 : -1),
  shape:    i % 3,
  dark:     i % 2 === 0,
}))

export default function PetalOverlay() {
  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        zIndex: 8,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {PETALS.map((p, i) => {
        const h = p.size * (p.shape === 1 ? 0.54 : p.shape === 2 ? 0.70 : 0.65)
        const br =
          p.shape === 0 ? '50% 0 50% 0' :
          p.shape === 1 ? '38% 5% 62% 8%' :
          '60% 40% 55% 45%'
        const col = p.dark ? '#B01414' : '#D02020'
        return (
          <div
            key={i}
            className="petal"
            style={{
              position: 'absolute',
              top: '-4%',
              left: `${p.left}%`,
              width: p.size,
              height: h,
              background: `radial-gradient(ellipse at 35% 30%, ${col}DD 0%, ${col}66 100%)`,
              borderRadius: br,
              boxShadow: `inset 0 1px 2px rgba(255,255,255,0.15)`,
              '--petal-drift': `${p.drift}px`,
              '--petal-spin': `${p.spin}deg`,
              '--petal-dur':   `${p.duration}s`,
              '--petal-delay': `${p.delay}s`,
            } as React.CSSProperties}
          />
        )
      })}
    </div>
  )
}
