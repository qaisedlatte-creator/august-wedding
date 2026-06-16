'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'
import IslamicPattern from './IslamicPattern'

const WEDDING_DATE = new Date('2026-08-09T11:00:00+05:30')

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

const CORNER_CLASSES = [
  'top-2 left-2 border-t border-l',
  'top-2 right-2 border-t border-r',
  'bottom-2 left-2 border-b border-l',
  'bottom-2 right-2 border-b border-r',
] as const

function CountUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0')

  return (
    <div className="flex flex-col items-center gap-3">
      {/* 3D flip card container */}
      <div
        style={{
          perspective: '500px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            width: 'clamp(72px, 18vw, 130px)',
            height: 'clamp(72px, 18vw, 130px)',
            background: 'rgba(201,168,76,0.05)',
            border: '1px solid rgba(201,168,76,0.18)',
            boxShadow: 'inset 0 0 24px rgba(201,168,76,0.03), 0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(45,5,5,0.3)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D depth face */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(201,168,76,0.04) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)',
            }}
          />

          {CORNER_CLASSES.map((c, i) => (
            <div
              key={i}
              className={`absolute ${c} w-3 h-3`}
              style={{ borderColor: 'rgba(201,168,76,0.38)' }}
            />
          ))}

          <AnimatePresence mode="popLayout">
            <motion.span
              key={display}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-cormorant font-light tabular-nums leading-none"
              style={{
                fontSize: 'clamp(1.8rem, 5.5vw, 3.6rem)',
                background: 'linear-gradient(135deg, #C9A84C 0%, #F0D060 50%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transformOrigin: '50% 50%',
                display: 'block',
                textShadow: 'none',
              }}
            >
              {display}
            </motion.span>
          </AnimatePresence>

          {/* Bottom sheen */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{
              background: 'linear-gradient(to top, rgba(139,26,26,0.08) 0%, transparent 100%)',
            }}
          />
        </motion.div>
      </div>
      <p
        className="font-cormorant tracking-[0.25em] uppercase"
        style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', color: 'rgba(201,168,76,0.55)' }}
      >
        {label}
      </p>
    </div>
  )
}

function Separator() {
  return (
    <motion.div
      className="font-cormorant self-start font-light leading-none"
      style={{
        fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
        color: 'rgba(201,168,76,0.35)',
        marginTop: 'clamp(20px, 5vw, 40px)',
      }}
      animate={{ opacity: [0.35, 0.7, 0.35] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      :
    </motion.div>
  )
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="countdown"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#3A0808' }}
    >
      <IslamicPattern opacity={0.075} color="#C9A84C" id="countdown-pattern" />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(201,168,76,0.048) 0%, transparent 65%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(139,26,26,0.25) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.p variants={fadeUp} className="font-cormorant tracking-[0.32em] text-xs uppercase mb-4" style={{ color: 'rgba(201,168,76,0.6)' }}>
            Counting Down To
          </motion.p>

          <motion.h2 variants={fadeUp} className="font-cormorant font-light mb-4" style={{ fontSize: 'clamp(2.4rem, 6.5vw, 4.5rem)', color: '#FAF7F0', lineHeight: 1 }}>
            The Wedding
          </motion.h2>

          <motion.p variants={fadeUp} className="font-playfair italic mb-12 md:mb-16" style={{ fontSize: '0.95rem', color: 'rgba(250,247,240,0.42)' }}>
            Sunday, 9 August 2026 · 11:00 AM
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6">
            <CountUnit value={timeLeft.days} label="Days" />
            <Separator />
            <CountUnit value={timeLeft.hours} label="Hours" />
            <Separator />
            <CountUnit value={timeLeft.minutes} label="Minutes" />
            <Separator />
            <CountUnit value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
