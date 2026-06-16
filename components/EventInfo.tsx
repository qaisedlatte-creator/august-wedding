'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '@/lib/animations'
import IslamicPattern from './IslamicPattern'

function MosqueIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
      <path d="M28 8 C18 8 12 16 12 24 L12 44 L44 44 L44 24 C44 16 38 8 28 8Z" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
      <path d="M6 44 C6 38 10 34 16 34 L16 44" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M50 44 C50 38 46 34 40 34 L40 44" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <rect x="2" y="22" width="5" height="22" rx="0.5" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M2 22 C2 18 4.5 16 4.5 16 C4.5 16 7 18 7 22" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <rect x="49" y="22" width="5" height="22" rx="0.5" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M49 22 C49 18 51.5 16 51.5 16 C51.5 16 54 18 54 22" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M22 44 L22 34 C22 30.7 24.7 28 28 28 C31.3 28 34 30.7 34 34 L34 44" stroke="#C9A84C" strokeWidth="1.1" fill="none" />
      <circle cx="28" cy="18" r="3.5" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <line x1="0" y1="44" x2="56" y2="44" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}

function Tilt3DCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 280, damping: 28 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 280, damping: 28 })
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="relative mt-6"
    >
      {/* 3D depth back layer */}
      <div
        className="absolute inset-0 translate-y-2 translate-x-1"
        style={{
          background: 'rgba(20,2,2,0.6)',
          border: '1px solid rgba(201,168,76,0.08)',
          transform: 'translateZ(-12px)',
        }}
      />

      {/* Spotlight glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-none"
        style={{
          background: `radial-gradient(circle 220px at ${glowX} ${glowY}, rgba(201,168,76,0.07) 0%, transparent 70%)`,
        }}
      />

      {children}
    </motion.div>
  )
}

const CORNER_POSITIONS = [
  'top-4 left-4 border-t border-l',
  'top-4 right-4 border-t border-r',
  'bottom-4 left-4 border-b border-l',
  'bottom-4 right-4 border-b border-r',
] as const

export default function EventInfo() {
  return (
    <section
      id="event"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#2D0505' }}
    >
      <IslamicPattern opacity={0.08} color="#C9A84C" id="event-pattern" />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 45% at 50% 30%, rgba(201,168,76,0.042) 0%, transparent 58%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 60%, rgba(139,26,26,0.18) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.p variants={fadeUp} className="font-cormorant tracking-[0.32em] text-xs uppercase mb-5" style={{ color: 'rgba(201,168,76,0.62)' }}>
            Ceremony Details
          </motion.p>

          <motion.h2 variants={fadeUp} className="font-cormorant font-light" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', color: '#FAF7F0', lineHeight: 1.1 }}>
            Wedding Ceremony
          </motion.h2>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 my-7">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
            <span style={{ color: '#C9A84C', fontSize: '8px' }}>✦</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
          </motion.div>

          {/* 3D Tilt Event Card */}
          <motion.div variants={scaleIn}>
            <Tilt3DCard>
              <div
                className="relative p-8 md:p-12"
                style={{
                  background: 'rgba(20,2,2,0.75)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(201,168,76,0.22)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.06)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {CORNER_POSITIONS.map((pos, i) => (
                  <div key={i} className={`absolute ${pos} w-6 h-6`} style={{ borderColor: 'rgba(201,168,76,0.38)' }} />
                ))}

                <div className="flex justify-center mb-7" style={{ transform: 'translateZ(20px)' }}>
                  <MosqueIcon />
                </div>

                <h3 className="font-cormorant font-semibold mb-8" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', color: '#FAF7F0', transform: 'translateZ(15px)' }}>
                  Wedding &amp; Walima Reception
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ transform: 'translateZ(10px)' }}>
                  <div>
                    <p className="font-cormorant tracking-[0.22em] text-xs uppercase mb-3" style={{ color: 'rgba(201,168,76,0.6)' }}>Date</p>
                    <p className="font-cormorant font-light" style={{ fontSize: '1.4rem', color: '#FAF7F0' }}>Sunday</p>
                    <p className="font-cormorant font-semibold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#D4AF37', lineHeight: 1.1 }}>9 August</p>
                    <p className="font-cormorant font-light" style={{ fontSize: '1.4rem', color: '#FAF7F0' }}>2026</p>
                  </div>
                  <div>
                    <p className="font-cormorant tracking-[0.22em] text-xs uppercase mb-3" style={{ color: 'rgba(201,168,76,0.6)' }}>Time</p>
                    <p className="font-cormorant font-semibold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#D4AF37', lineHeight: 1.1 }}>11:00 AM</p>
                    <p className="font-playfair italic my-2" style={{ fontSize: '0.85rem', color: 'rgba(250,247,240,0.4)' }}>to</p>
                    <p className="font-cormorant font-semibold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#D4AF37', lineHeight: 1.1 }}>2:30 PM</p>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
