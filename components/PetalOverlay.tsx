'use client'

import { useEffect, useState } from 'react'

function pr(seed: number) { return ((seed * 9301 + 49297) % 233280) / 233280 }

// Rose petal: wide rounded body, narrows to a point at the base
const PETAL_PATH =
  'M0,-30 C10,-28 22,-18 24,-6 C26,6 22,22 14,32 C8,40 2,44 0,44 ' +
  'C-2,44 -8,40 -14,32 C-22,22 -26,6 -24,-6 C-22,-18 -10,-28 0,-30 Z'

const PALETTE = [
  { tip: '#D45A72', base: '#7D0A0A' },
  { tip: '#C23050', base: '#6B1111' },
  { tip: '#E06888', base: '#8B0000' },
  { tip: '#B82848', base: '#5C0808' },
  { tip: '#CF3C6A', base: '#7A1010' },
]

interface PetalConfig {
  count: number
  sizeMin: number
  sizeRange: number
  driftRange: number
  swayAmpRange: number
}

const DESKTOP: PetalConfig = {
  count: 23, sizeMin: 12, sizeRange: 18, driftRange: 160, swayAmpRange: 60,
}
const MOBILE: PetalConfig = {
  count: 13, sizeMin: 9, sizeRange: 12, driftRange: 80, swayAmpRange: 32,
}

function buildPetals(cfg: PetalConfig) {
  return Array.from({ length: cfg.count }, (_, i) => {
    const s = (n: number) => pr(i * 17 + n)
    return {
      id:           i,
      left:         s(1) * 88 + 4,
      size:         s(2) * cfg.sizeRange + cfg.sizeMin,
      fallDur:      s(3) * 9 + 7,
      fallDelay:   -(s(4) * 16),
      drift:        (s(5) - 0.5) * cfg.driftRange,
      swayDur:      s(6) * 4 + 3,
      swayAmp:      (s(7) - 0.5) * cfg.swayAmpRange,
      swayDelay:   -(s(8) * 6),
      flutterDur:   s(9) * 2.5 + 2,
      flutterDelay:-(s(10) * 3),
      opacity:      0.55 + s(11) * 0.4,
      depthBlur:    s(12) < 0.2 ? s(12) * 3 + 0.3 : 0,
      rotateStart:  s(13) * 360,
      color:        PALETTE[Math.floor(s(14) * PALETTE.length)],
    }
  })
}

// Pre-built at module level — seeded PRNG keeps server/client consistent
const DESKTOP_PETALS = buildPetals(DESKTOP)
const MOBILE_PETALS  = buildPetals(MOBILE)

export default function PetalOverlay() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onMotion = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', onMotion)

    // Viewport width — update on resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })

    return () => {
      mq.removeEventListener('change', onMotion)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const allPetals = isMobile ? MOBILE_PETALS : DESKTOP_PETALS
  // Reduce to 5 when motion is reduced
  const petals = reducedMotion ? allPetals.slice(0, 5) : allPetals

  return (
    <div
      className="petal-overlay-wrap"
      style={{
        position: 'fixed', inset: 0,
        zIndex: 8,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {petals.map((p) => {
        const w = p.size
        const h = p.size * 1.55
        const gradId = `rg-${p.id}-${isMobile ? 'm' : 'd'}`
        const fallDur = reducedMotion ? p.fallDur * 1.8 : p.fallDur

        return (
          // Layer 1: vertical fall + horizontal drift
          <div
            key={p.id}
            style={{
              position: 'absolute',
              top: '-6%',
              left: `${p.left}%`,
              width: w,
              height: h,
              opacity: p.opacity,
              filter: p.depthBlur > 0 ? `blur(${p.depthBlur.toFixed(1)}px)` : undefined,
              willChange: 'transform',
              animation: `petal-fall ${fallDur}s ${p.fallDelay}s infinite linear`,
              '--petal-drift': `${p.drift}px`,
            } as React.CSSProperties}
          >
            {/* Layer 2: pendulum sway */}
            <div
              style={{
                width: '100%',
                height: '100%',
                animation: reducedMotion
                  ? 'none'
                  : `petal-sway ${p.swayDur}s ${p.swayDelay}s infinite ease-in-out`,
                '--petal-sway': `${p.swayAmp}px`,
              } as React.CSSProperties}
            >
              {/* Layer 3: 3-D flutter */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  animation: reducedMotion
                    ? 'none'
                    : `petal-flutter ${p.flutterDur}s ${p.flutterDelay}s infinite ease-in-out`,
                }}
              >
                <svg
                  viewBox="-28 -32 56 80"
                  width={w}
                  height={h}
                  style={{
                    display: 'block',
                    filter: 'drop-shadow(0 2px 4px rgba(80,0,0,0.25))',
                  }}
                >
                  <defs>
                    <linearGradient
                      id={gradId}
                      x1="0" y1="-30"
                      x2="0" y2="44"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%"   stopColor={p.color.tip}  stopOpacity="0.88" />
                      <stop offset="55%"  stopColor={p.color.base} stopOpacity="0.95" />
                      <stop offset="100%" stopColor={p.color.base} stopOpacity="0.78" />
                    </linearGradient>
                  </defs>
                  <path
                    d={PETAL_PATH}
                    fill={`url(#${gradId})`}
                    transform={`rotate(${p.rotateStart})`}
                  />
                </svg>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
