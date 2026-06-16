'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import IslamicPattern from './IslamicPattern'
import { stagger, fadeUp } from '@/lib/animations'
import { useConfetti, ConfettiRenderer } from './Confetti'

function WaxSeal({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.button
        onClick={onClick}
        className="relative w-36 h-36 rounded-full cursor-pointer flex items-end justify-center pb-4"
        animate={{
          scale: [1, 1.045, 1],
          boxShadow: [
            '0 0 0 0 rgba(201,168,76,0)',
            '0 0 0 18px rgba(201,168,76,0.12)',
            '0 0 0 0 rgba(201,168,76,0)',
          ],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        whileTap={{ scale: 0.92, transition: { duration: 0.15 } }}
        aria-label="Reveal wedding invitation details"
      >
        {/* SVG wax seal */}
        <svg
          viewBox="0 0 144 144"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="waxBody" cx="38%" cy="32%" r="72%">
              <stop offset="0%" stopColor="rgba(122,21,21,0.55)" />
              <stop offset="100%" stopColor="rgba(25,2,2,0.75)" />
            </radialGradient>
          </defs>
          {/* Outer dashed decorative ring */}
          <circle
            cx="72" cy="72" r="70"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            opacity="0.45"
          />
          {/* Wax body */}
          <circle cx="72" cy="72" r="62" fill="#4A0808" />
          <circle cx="72" cy="72" r="62" fill="url(#waxBody)" />
          {/* Inner gold border ring */}
          <circle
            cx="72" cy="72" r="58"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.9"
            opacity="0.4"
          />
          {/* Diamond lattice — elegant geometric motif */}
          <g transform="translate(28,28) scale(1.1)">
            <path d="M40,10 L70,40 L40,70 L10,40 Z" fill="none" stroke="#C9A84C" strokeWidth="1.1" opacity="0.65"/>
            <path d="M40,25 L55,40 L40,55 L25,40 Z" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.42"/>
            <circle cx="40" cy="40" r="5.5" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.35" />
            <circle cx="40" cy="40" r="2.2" fill="#C9A84C" opacity="0.38" />
          </g>
          {/* Highlight gloss */}
          <ellipse cx="52" cy="48" rx="16" ry="8" fill="rgba(255,255,255,0.04)" transform="rotate(-30 52 48)" />
        </svg>

        {/* "Open" label inside seal at bottom */}
        <span
          className="relative z-10 font-cormorant tracking-[0.35em] uppercase"
          style={{ fontSize: '0.58rem', color: 'rgba(201,168,76,0.65)' }}
        >
          Open
        </span>
      </motion.button>

      {/* Pulsing hint text */}
      <motion.p
        className="font-playfair italic"
        style={{ fontSize: '0.9rem', color: 'rgba(250,247,240,0.48)' }}
        animate={{ opacity: [0.38, 0.85, 0.38] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        Tap to open your invitation
      </motion.p>
    </div>
  )
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
      style={{
        background: 'rgba(201,168,76,0.1)',
        border: '1px solid rgba(201,168,76,0.28)',
      }}
    >
      {children}
    </div>
  )
}

export default function WeddingDetails() {
  const [revealed, setRevealed] = useState(false)
  const sealWrapRef = useRef<HTMLDivElement>(null)
  const { particles, trigger } = useConfetti()

  const handleReveal = () => {
    if (revealed) return
    if (sealWrapRef.current) {
      const r = sealWrapRef.current.getBoundingClientRect()
      trigger(r.left + r.width / 2, r.top + r.height / 2)
    } else {
      trigger()
    }
    setRevealed(true)
  }

  return (
    <section
      id="details"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#4A0A0A' }}
    >
      <IslamicPattern opacity={0.075} color="#C9A84C" id="details-pattern" />
      <ConfettiRenderer particles={particles} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(201,168,76,0.045) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,26,26,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Header */}
          <motion.p
            variants={fadeUp}
            className="font-cormorant tracking-[0.32em] text-xs uppercase mb-5"
            style={{ color: 'rgba(201,168,76,0.65)' }}
          >
            You Are Invited
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-cormorant font-light"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#FAF7F0', lineHeight: 1 }}
          >
            Wedding Day
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mt-5 mb-14"
          >
            <div
              className="h-px w-16"
              style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.42))' }}
            />
            <span style={{ color: '#C9A84C', fontSize: '8px' }}>✦</span>
            <div
              className="h-px w-16"
              style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.42))' }}
            />
          </motion.div>

          {/* Main reveal area */}
          <motion.div variants={fadeUp} className="relative">

            {/* Date/time cards — always in DOM, blur clears on reveal */}
            <motion.div
              animate={{
                filter: revealed ? 'blur(0px)' : 'blur(15px)',
                opacity: revealed ? 1 : 0.2,
                scale: revealed ? 1 : 0.97,
              }}
              transition={{
                duration: 1.3,
                delay: revealed ? 0.45 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Timeline */}
              <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0">
                {/* Connecting line (desktop) */}
                <div
                  className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px"
                  style={{
                    background:
                      'linear-gradient(to right, transparent 0%, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent 100%)',
                  }}
                />

                {/* Date block */}
                <div className="flex-1 relative z-10">
                  <div
                    className="inline-block md:block p-8 md:p-10"
                    style={{
                      background: 'rgba(30,3,3,0.65)',
                      border: '1px solid rgba(201,168,76,0.18)',
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    <IconBox><Calendar size={20} color="#C9A84C" /></IconBox>
                    <p
                      className="font-cormorant tracking-[0.22em] text-xs uppercase mb-3"
                      style={{ color: 'rgba(201,168,76,0.6)' }}
                    >
                      Date
                    </p>
                    <p
                      className="font-cormorant font-light"
                      style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', color: '#FAF7F0' }}
                    >
                      Sunday
                    </p>
                    <p
                      className="font-cormorant font-semibold leading-none"
                      style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: '#D4AF37' }}
                    >
                      09
                    </p>
                    <p
                      className="font-cormorant font-light tracking-widest"
                      style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#FAF7F0' }}
                    >
                      August 2026
                    </p>
                  </div>
                </div>

                {/* Center diamond */}
                <div className="hidden md:flex items-center justify-center z-10 relative">
                  <div
                    className="w-5 h-5 rotate-45"
                    style={{ background: '#C9A84C', boxShadow: '0 0 20px rgba(201,168,76,0.6)' }}
                  />
                </div>

                {/* Time block */}
                <div className="flex-1 relative z-10">
                  <div
                    className="inline-block md:block p-8 md:p-10"
                    style={{
                      background: 'rgba(30,3,3,0.65)',
                      border: '1px solid rgba(201,168,76,0.18)',
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    <IconBox><Clock size={20} color="#C9A84C" /></IconBox>
                    <p
                      className="font-cormorant tracking-[0.22em] text-xs uppercase mb-3"
                      style={{ color: 'rgba(201,168,76,0.6)' }}
                    >
                      Time
                    </p>
                    <p
                      className="font-cormorant font-semibold"
                      style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', color: '#D4AF37' }}
                    >
                      11:00 AM
                    </p>
                    <p
                      className="font-cormorant font-light my-1"
                      style={{ fontSize: '1rem', color: 'rgba(250,247,240,0.4)' }}
                    >
                      until
                    </p>
                    <p
                      className="font-cormorant font-semibold"
                      style={{ fontSize: 'clamp(2rem, 5.5vw, 3.5rem)', color: '#D4AF37' }}
                    >
                      2:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Wax seal overlay — exits when revealed */}
            <AnimatePresence>
              {!revealed && (
                <motion.div
                  exit={{
                    opacity: 0,
                    scale: 0,
                    rotate: 60,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="absolute inset-0 flex items-center justify-center z-20 py-8"
                >
                  <div ref={sealWrapRef}>
                    <WaxSeal onClick={handleReveal} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Post-reveal flourish */}
            <AnimatePresence>
              {revealed && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.8 }}
                  className="mt-12 flex flex-col items-center gap-3"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div
                      className="h-px w-16"
                      style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }}
                    />
                    <span style={{ color: '#C9A84C', fontSize: '8px' }}>✦</span>
                    <div
                      className="h-px w-16"
                      style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }}
                    />
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="font-playfair italic"
                    style={{ fontSize: '0.9rem', color: 'rgba(201,168,76,0.55)' }}
                  >
                    Jazakallahu Khairan for joining our celebration
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
