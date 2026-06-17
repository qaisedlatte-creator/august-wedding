'use client'

import { motion } from 'framer-motion'
import { heroContainer, heroItem } from '@/lib/animations'

function pr(seed: number): number {
  return ((seed * 9301 + 49297) % 233280) / 233280
}

/* Falling rose petals — dark crimson */
const PETALS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: pr(i * 7 + 1) * 88 + 6,
  size: pr(i * 7 + 3) * 13 + 6,
  duration: pr(i * 7 + 4) * 11 + 13,
  delay: pr(i * 7 + 5) * 18,
  drift: (pr(i * 7 + 6) - 0.5) * 110,
  rotate: pr(i * 7 + 2) * 360,
  shape: i % 3, // 0: rounded petal, 1: elongated, 2: oval
}))

function Petal({ x, size, duration, delay, drift, rotate, shape, id }: typeof PETALS[0]) {
  const borderRadius =
    shape === 0 ? '50% 0 50% 0' :
    shape === 1 ? '40% 0 60% 10%' :
    '60% 40% 60% 40%'
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: '-3%',
        width: size,
        height: size * (shape === 1 ? 0.55 : 0.72),
        background: `radial-gradient(ellipse at 38% 32%, rgba(${id % 2 === 0 ? '160,20,20' : '130,10,10'},0.82) 0%, rgba(80,3,3,0.55) 100%)`,
        borderRadius,
        transform: `rotate(${rotate}deg)`,
        filter: 'blur(0.3px)',
      }}
      animate={{
        y: ['0vh', '108vh'],
        x: [0, drift, drift * 0.55, drift * 0.85, drift * 0.25],
        rotate: [rotate, rotate + 320 * (id % 2 === 0 ? 1 : -1)],
        opacity: [0, 0.82, 0.65, 0.45, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    />
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
    >
      {/* ── Actual wedding background image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/wedding-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
      />

      {/* Very subtle darkening in the middle content area for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 60% at 50% 42%, rgba(245,230,205,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Falling petals — on top of the background image */}
      {PETALS.map(p => <Petal key={p.id} {...p} />)}

      {/* ── Text content overlaid inside the arch area ── */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full max-w-xs mx-auto px-6"
        style={{ paddingTop: '22vh' }}
      >
        {/* "WEDDING" badge */}
        <motion.div variants={heroItem} className="mb-5">
          <span
            className="font-inter tracking-[0.42em] uppercase"
            style={{
              fontSize: '0.6rem',
              color: 'rgba(61,10,10,0.75)',
              fontWeight: 300,
              border: '1px solid rgba(139,26,26,0.35)',
              padding: '4px 20px',
            }}
          >
            Wedding
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={heroItem}
          className="font-playfair italic leading-relaxed mb-8"
          style={{ fontSize: 'clamp(0.78rem, 2.2vw, 0.95rem)', color: 'rgba(61,10,10,0.65)', maxWidth: '220px' }}
        >
          Together with our families joyfully invite you to celebrate our Wedding
        </motion.p>

        {/* Groom name */}
        <motion.h1
          variants={heroItem}
          className="font-playfair italic font-light leading-none"
          style={{ fontSize: 'clamp(3rem, 11vw, 5rem)', color: '#3D0A0A', letterSpacing: '-0.01em' }}
        >
          Unais
        </motion.h1>

        {/* Ampersand with lines */}
        <motion.div variants={heroItem} className="flex items-center justify-center gap-4 my-3 w-full max-w-[180px]">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(139,26,26,0.3))' }}/>
          <span className="font-playfair italic" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: '#8B1A1A', opacity: 0.7 }}>&amp;</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(139,26,26,0.3))' }}/>
        </motion.div>

        {/* Bride name */}
        <motion.h1
          variants={heroItem}
          className="font-playfair italic font-light leading-none"
          style={{ fontSize: 'clamp(3rem, 11vw, 5rem)', color: '#3D0A0A', letterSpacing: '-0.01em' }}
        >
          Nasma
        </motion.h1>

        {/* Bottom line */}
        <motion.div variants={heroItem} className="flex items-center justify-center gap-3 mt-6 mb-5 w-full max-w-[200px]">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.45))' }}/>
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: '#B8902A', opacity: 0.55 }}/>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.45))' }}/>
        </motion.div>

        {/* Date */}
        <motion.p
          variants={heroItem}
          className="font-inter tracking-[0.32em] uppercase"
          style={{ fontSize: 'clamp(0.55rem, 1.8vw, 0.68rem)', color: 'rgba(61,10,10,0.6)', fontWeight: 300 }}
        >
          Sunday · 9th August 2026
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-4 h-7 rounded-full border flex justify-center pt-1" style={{ borderColor: 'rgba(139,26,26,0.35)' }}>
          <motion.div
            className="w-0.5 rounded-full"
            style={{ background: '#8B1A1A', height: '8px' }}
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
