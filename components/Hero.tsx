'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import IslamicPattern from './IslamicPattern'
import { heroContainer, heroItem } from '@/lib/animations'

function pr(seed: number): number {
  return ((seed * 9301 + 49297) % 233280) / 233280
}

/* Gold dust particles */
const GOLD_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: pr(i * 3) * 90 + 5,
  y: pr(i * 3 + 1) * 85 + 8,
  size: pr(i * 3 + 2) * 2.5 + 0.7,
  duration: pr(i) * 10 + 9,
  delay: pr(i + 8) * 7,
  opacity: pr(i + 16) * 0.35 + 0.1,
}))

/* Rose petal particles */
const PETALS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: pr(i * 7 + 1) * 95 + 2,
  size: pr(i * 7 + 3) * 14 + 8,
  duration: pr(i * 7 + 4) * 8 + 10,
  delay: pr(i * 7 + 5) * 10,
  drift: (pr(i * 7 + 6) - 0.5) * 120,
  rotate: pr(i * 7 + 2) * 360,
}))

function RosePetal({ x, size, duration, delay, drift, rotate, id }: typeof PETALS[0]) {
  return (
    <motion.div
      key={id}
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: '-5%',
        width: size,
        height: size * 0.65,
        background: 'radial-gradient(ellipse at 40% 35%, rgba(220,50,50,0.55) 0%, rgba(150,10,10,0.35) 100%)',
        borderRadius: '50% 0 50% 0',
        transform: `rotate(${rotate}deg)`,
        filter: 'blur(0.4px)',
      }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, drift, drift * 0.5, drift * 0.8, drift * 0.3],
        rotate: [rotate, rotate + 360 * (id % 2 === 0 ? 1 : -1)],
        opacity: [0, 0.6, 0.5, 0.4, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const patternY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#2D0505' }}
    >
      {/* Parallax pattern */}
      <motion.div style={{ y: patternY }} className="absolute inset-0">
        <IslamicPattern opacity={0.1} color="#C9A84C" id="hero-pattern" />
      </motion.div>

      {/* Deep center glow — gold */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 65% 55% at 50% 48%, rgba(201,168,76,0.07) 0%, transparent 68%)',
      }} />

      {/* Warm red inner atmosphere */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(139,26,26,0.25) 0%, transparent 65%)',
      }} />

      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 130% 130% at 50% 50%, transparent 28%, rgba(10,1,1,0.82) 100%)',
      }} />

      {/* Falling rose petals */}
      {PETALS.map(p => <RosePetal key={p.id} {...p} />)}

      {/* Floating gold dust */}
      {GOLD_PARTICLES.map((p) => (
        <motion.div
          key={`gold-${p.id}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, #F0D060 0%, #C9A84C 100%)`,
          }}
          animate={{ y: [0, -55, 0], opacity: [0, p.opacity, 0], scale: [0.4, 1, 0.4] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Main parallax content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full py-20"
      >
        <motion.div variants={heroContainer} initial="hidden" animate="visible">

          {/* Bismillah */}
          <motion.p variants={heroItem} className="arabic-text mb-2 tracking-wider" style={{ color: '#C9A84C', fontSize: 'clamp(1.25rem, 3.5vw, 2rem)' }}>
            بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.p>

          {/* Top ornament */}
          <motion.div variants={heroItem} className="flex items-center justify-center gap-3 my-7">
            <div className="h-px flex-1 max-w-28" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.55))' }} />
            <span style={{ color: 'rgba(201,168,76,0.65)', fontSize: '9px' }}>✦</span>
            <div className="h-px w-12" style={{ background: 'rgba(201,168,76,0.45)' }} />
            <span style={{ color: 'rgba(201,168,76,0.65)', fontSize: '9px' }}>✦</span>
            <div className="h-px flex-1 max-w-28" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.55))' }} />
          </motion.div>

          {/* Groom name — 3D depth text */}
          <motion.h1
            variants={heroItem}
            className="font-cormorant font-light tracking-[0.14em] leading-none"
            style={{
              fontSize: 'clamp(1.8rem, 6.5vw, 5.2rem)',
              color: '#FAF7F0',
              textShadow: '2px 2px 0 rgba(45,5,5,0.5), 4px 4px 0 rgba(45,5,5,0.3), 6px 6px 0 rgba(45,5,5,0.15), 8px 8px 12px rgba(0,0,0,0.3)',
            }}
          >
            UNAIS IBRAHIM C.K
          </motion.h1>

          {/* Ampersand */}
          <motion.div variants={heroItem} className="flex items-center justify-center gap-4 md:gap-8 my-4">
            <div className="h-px w-14 md:w-28" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.38))' }} />
            <span className="font-vibes leading-none" style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)', color: '#D4AF37', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }}>
              &amp;
            </span>
            <div className="h-px w-14 md:w-28" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.38))' }} />
          </motion.div>

          {/* Bride name — 3D depth text */}
          <motion.h1
            variants={heroItem}
            className="font-cormorant font-light tracking-[0.14em] leading-none"
            style={{
              fontSize: 'clamp(1.8rem, 6.5vw, 5.2rem)',
              color: '#FAF7F0',
              textShadow: '2px 2px 0 rgba(45,5,5,0.5), 4px 4px 0 rgba(45,5,5,0.3), 6px 6px 0 rgba(45,5,5,0.15), 8px 8px 12px rgba(0,0,0,0.3)',
            }}
          >
            NASMA SHERIN V
          </motion.h1>

          {/* Bottom ornament */}
          <motion.div variants={heroItem} className="flex items-center justify-center gap-3 mt-7 mb-8">
            <div className="h-px flex-1 max-w-28" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.55))' }} />
            <span style={{ color: 'rgba(201,168,76,0.65)', fontSize: '9px' }}>✦</span>
            <div className="h-px w-12" style={{ background: 'rgba(201,168,76,0.45)' }} />
            <span style={{ color: 'rgba(201,168,76,0.65)', fontSize: '9px' }}>✦</span>
            <div className="h-px flex-1 max-w-28" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.55))' }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={heroItem} className="font-playfair italic max-w-md mx-auto leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.15rem)', color: 'rgba(250,247,240,0.62)' }}>
            Together with their families invite you to celebrate their wedding
          </motion.p>

          {/* Date */}
          <motion.p variants={heroItem} className="font-cormorant tracking-[0.3em] uppercase mt-5 mb-10" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)', color: '#D4AF37' }}>
            Sunday · 9 August 2026
          </motion.p>

          {/* CTA */}
          <motion.div variants={heroItem}>
            <motion.a
              href="#parents"
              className="relative inline-flex items-center font-cormorant tracking-[0.22em] uppercase overflow-hidden"
              style={{
                fontSize: 'clamp(0.7rem, 1.6vw, 0.85rem)',
                border: '1px solid rgba(201,168,76,0.5)',
                color: '#C9A84C',
                padding: '14px 42px',
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: 'rgba(201,168,76,0.07)' }}
                initial={{ x: '-101%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10">View Invitation</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-5 h-8 rounded-full border flex justify-center pt-1.5" style={{ borderColor: 'rgba(201,168,76,0.38)' }}>
          <motion.div
            className="w-0.5 rounded-full"
            style={{ background: '#C9A84C', height: '10px' }}
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
        <p className="font-cormorant tracking-[0.22em] uppercase" style={{ fontSize: '0.6rem', color: 'rgba(201,168,76,0.42)' }}>
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
