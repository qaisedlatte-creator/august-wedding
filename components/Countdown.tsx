'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

const WEDDING_DATE = new Date('2026-08-09T11:00:00+05:30')

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

function CountUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="invite-card flex items-center justify-center relative"
        style={{ width: 'clamp(62px, 16vw, 86px)', height: 'clamp(62px, 16vw, 86px)' }}
      >
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l" style={{ borderColor: 'rgba(184,144,42,0.4)' }}/>
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r" style={{ borderColor: 'rgba(184,144,42,0.4)' }}/>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l" style={{ borderColor: 'rgba(184,144,42,0.4)' }}/>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r" style={{ borderColor: 'rgba(184,144,42,0.4)' }}/>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 18, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant tabular-nums leading-none"
            style={{ fontSize: 'clamp(1.6rem, 4.5vw, 2.4rem)', color: '#8B1A1A', fontWeight: 400 }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="font-inter tracking-[0.24em] uppercase" style={{ fontSize: '0.58rem', color: 'rgba(61,10,10,0.5)', fontWeight: 300 }}>
        {label}
      </p>
    </div>
  )
}

function Dot() {
  return (
    <motion.span
      className="font-cormorant self-center pb-5"
      style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'rgba(184,144,42,0.45)' }}
      animate={{ opacity: [0.45, 0.85, 0.45] }}
      transition={{ duration: 1, repeat: Infinity }}
    >:</motion.span>
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
    <section id="countdown" className="relative py-10 md:py-16 overflow-hidden" style={{ backgroundColor: '#FAF0E4' }}>
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
        <motion.div className="invite-card p-8 md:p-10" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          {/* Header ornament */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.45))' }}/>
            <div className="w-2 h-2 rotate-45" style={{ background: '#B8902A', opacity: 0.5 }}/>
            <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.45))' }}/>
          </motion.div>

          <motion.p variants={fadeUp} className="font-inter tracking-[0.32em] text-xs uppercase text-center mb-7" style={{ color: 'rgba(61,10,10,0.5)', fontWeight: 300 }}>
            Counting Down
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-start justify-center gap-2 md:gap-3">
            <CountUnit value={timeLeft.days}    label="Days" />
            <Dot/>
            <CountUnit value={timeLeft.hours}   label="Hrs" />
            <Dot/>
            <CountUnit value={timeLeft.minutes} label="Min" />
            <Dot/>
            <CountUnit value={timeLeft.seconds} label="Sec" />
          </motion.div>

          <motion.p variants={fadeUp} className="font-playfair italic text-center mt-7" style={{ fontSize: '0.88rem', color: 'rgba(61,10,10,0.42)' }}>
            Sunday, 9 August 2026 · 11:00 AM
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
