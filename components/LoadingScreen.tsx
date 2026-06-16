'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Phase = 'draw' | 'text' | 'exit'

interface Props { onComplete: () => void }

const STAR_PATH =
  'M40,8 L45,27 L63,17 L53,35 L72,40 L53,45 L63,63 L45,53 L40,72 L35,53 L17,63 L27,45 L8,40 L27,35 L17,17 L35,27 Z'
const OCTAGON = 'M53,35 L63,40 L53,45 L40,53 L27,45 L17,40 L27,35 L40,27 Z'

function pr(n: number) { return ((n * 9301 + 49297) % 233280) / 233280 }
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: pr(i * 3) * 100,
  y: pr(i * 3 + 1) * 100,
  size: pr(i * 3 + 2) * 2.5 + 0.7,
  dur: pr(i) * 9 + 7,
  delay: pr(i + 8) * 6,
  opacity: pr(i + 16) * 0.3 + 0.1,
}))

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<Phase>('draw')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 1700)
    const t2 = setTimeout(() => setPhase('exit'), 3400)
    const t3 = setTimeout(onComplete, 4500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#2D0505' }}
        >
          {/* Islamic pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpolygon points='40,8 45,27 63,17 53,35 72,40 53,45 63,63 45,53 40,72 35,53 17,63 27,45 8,40 27,35 17,17 35,27' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Center red glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(139,26,26,0.4) 0%, transparent 70%)',
            }}
          />

          {/* Gold dust particles */}
          {PARTICLES.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: 'radial-gradient(circle, #F0D060 0%, #C9A84C 100%)',
              }}
              animate={{ y: [0, -45, 0], opacity: [0, p.opacity, 0], scale: [0.4, 1, 0.4] }}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
            {/* Animated SVG medallion */}
            <svg
              viewBox="0 0 80 80"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              {/* Outer ring */}
              <motion.circle
                cx="40" cy="40" r="38"
                fill="none"
                stroke="rgba(201,168,76,0.18)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              {/* 8-pointed star draws itself */}
              <motion.path
                d={STAR_PATH}
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.15, ease: 'easeInOut' }}
              />
              {/* Inner octagon */}
              <motion.path
                d={OCTAGON}
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.3, delay: 0.9, ease: 'easeInOut' }}
              />
              {/* Center circles */}
              <motion.circle
                cx="40" cy="40" r="5"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.7"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.42 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              />
              <motion.circle
                cx="40" cy="40" r="2.2"
                fill="#C9A84C"
                initial={{ scale: 0 }}
                animate={{ scale: 1, opacity: 0.55 }}
                transition={{ duration: 0.4, delay: 1.9 }}
              />
              {/* Outer shimmer ring */}
              <motion.circle
                cx="40" cy="40" r="38"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.4"
                strokeDasharray="2 6"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.3, rotate: 360 }}
                transition={{ opacity: { delay: 1.4, duration: 0.5 }, rotate: { duration: 20, repeat: Infinity, ease: 'linear' } }}
              />
            </svg>

            {/* Text content — appears in 'text' phase */}
            <AnimatePresence>
              {phase === 'text' && (
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center gap-5"
                >
                  <p
                    className="arabic-text"
                    style={{ fontSize: 'clamp(1.2rem, 4vw, 1.9rem)', color: '#C9A84C' }}
                  >
                    بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="h-px w-12"
                      style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.45))' }}
                    />
                    <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '7px' }}>✦</span>
                    <div
                      className="h-px w-12"
                      style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.45))' }}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="font-cormorant font-light tracking-[0.22em] uppercase"
                      style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2rem)', color: '#FAF7F0' }}
                    >
                      Unais Ibrahim
                    </motion.p>

                    <motion.span
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="font-vibes leading-none"
                      style={{ fontSize: 'clamp(2rem, 5.5vw, 3rem)', color: '#C9A84C' }}
                    >
                      &amp;
                    </motion.span>

                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.72 }}
                      className="font-cormorant font-light tracking-[0.22em] uppercase"
                      style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2rem)', color: '#FAF7F0' }}
                    >
                      Nasma Sherin
                    </motion.p>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.0 }}
                    className="font-cormorant tracking-[0.35em] uppercase"
                    style={{ fontSize: 'clamp(0.65rem, 1.8vw, 0.9rem)', color: 'rgba(201,168,76,0.58)' }}
                  >
                    09 · August · 2026
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            style={{ width: '120px', height: '1px', background: 'rgba(201,168,76,0.12)' }}
          >
            <motion.div
              className="h-full origin-left"
              style={{ background: 'linear-gradient(to right, #C9A84C, #F0D060)' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.4, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
