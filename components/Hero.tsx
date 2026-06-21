'use client'

import { motion } from 'framer-motion'
import { heroContainer, heroItem } from '@/lib/animations'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Subtle overlay so text stays readable over the illustrated arch */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 65% at 50% 38%, rgba(255,248,240,0.18) 0%, transparent 72%)',
        }}
      />

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
