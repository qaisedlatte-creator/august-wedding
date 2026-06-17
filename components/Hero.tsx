'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { heroContainer, heroItem } from '@/lib/animations'

function pr(seed: number): number {
  return ((seed * 9301 + 49297) % 233280) / 233280
}

/* Falling red petals */
const PETALS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: pr(i * 7 + 1) * 95 + 2,
  size: pr(i * 7 + 3) * 12 + 7,
  duration: pr(i * 7 + 4) * 9 + 12,
  delay: pr(i * 7 + 5) * 12,
  drift: (pr(i * 7 + 6) - 0.5) * 100,
  rotate: pr(i * 7 + 2) * 360,
}))

function Petal({ x, size, duration, delay, drift, rotate, id }: typeof PETALS[0]) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: '-4%',
        width: size,
        height: size * 0.7,
        background: 'radial-gradient(ellipse at 38% 32%, rgba(180,30,30,0.7) 0%, rgba(110,8,8,0.45) 100%)',
        borderRadius: '50% 0 50% 0',
        transform: `rotate(${rotate}deg)`,
      }}
      animate={{
        y: ['0vh', '108vh'],
        x: [0, drift, drift * 0.6, drift * 0.85, drift * 0.3],
        rotate: [rotate, rotate + 300 * (id % 2 === 0 ? 1 : -1)],
        opacity: [0, 0.65, 0.5, 0.38, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    />
  )
}

/* SVG botanical branch (top-left) */
function BotanicalTopLeft() {
  return (
    <svg viewBox="0 0 200 200" className="absolute top-0 left-0 w-48 md:w-72 pointer-events-none" style={{ color: '#8B1A1A' }}>
      <path d="M0,0 C40,60 80,100 60,160" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.55"/>
      <path d="M0,0 C30,40 70,60 100,40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      {/* Flower clusters */}
      {[[18,32],[8,55],[28,70],[45,88],[12,110],[30,128],[22,150]].map(([cx,cy],i) => (
        <g key={i} transform={`translate(${cx},${cy})`}>
          {[0,51,102,153,204,255,306].map((a,j) => (
            <ellipse key={j} cx={Math.cos(a*Math.PI/180)*5} cy={Math.sin(a*Math.PI/180)*5}
              rx="4.5" ry="3" transform={`rotate(${a})`}
              fill="currentColor" opacity={0.55 - j*0.02}/>
          ))}
          <circle cx="0" cy="0" r="2.2" fill="#D4AF37" opacity="0.65"/>
        </g>
      ))}
      {/* Small leaves */}
      <path d="M18,32 C8,22 2,12 14,8" fill="currentColor" opacity="0.28"/>
      <path d="M22,70 C12,58 6,46 18,42" fill="currentColor" opacity="0.22"/>
      <path d="M30,110 C18,98 12,86 24,82" fill="currentColor" opacity="0.2"/>
    </svg>
  )
}

/* SVG botanical branch (top-right, mirrored) */
function BotanicalTopRight() {
  return (
    <svg viewBox="0 0 200 200" className="absolute top-0 right-0 w-48 md:w-72 pointer-events-none" style={{ color: '#8B1A1A', transform: 'scaleX(-1)' }}>
      <path d="M0,0 C40,60 80,100 60,160" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.55"/>
      <path d="M0,0 C30,40 70,60 100,40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      {[[18,32],[8,55],[28,70],[45,88],[12,110],[30,128],[22,150]].map(([cx,cy],i) => (
        <g key={i} transform={`translate(${cx},${cy})`}>
          {[0,51,102,153,204,255,306].map((a,j) => (
            <ellipse key={j} cx={Math.cos(a*Math.PI/180)*5} cy={Math.sin(a*Math.PI/180)*5}
              rx="4.5" ry="3" transform={`rotate(${a})`}
              fill="currentColor" opacity={0.55 - j*0.02}/>
          ))}
          <circle cx="0" cy="0" r="2.2" fill="#D4AF37" opacity="0.65"/>
        </g>
      ))}
    </svg>
  )
}

/* Bottom botanical cluster */
function BotanicalBottom() {
  return (
    <svg viewBox="0 0 400 160" className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ color: '#8B1A1A' }}>
      {/* Left side */}
      <path d="M0,160 C20,120 40,90 30,50" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.5"/>
      <path d="M0,160 C40,140 80,130 100,110" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      {[[15,130],[8,100],[22,72],[40,110],[60,125],[80,118]].map(([cx,cy],i) => (
        <g key={i} transform={`translate(${cx},${cy})`}>
          {[0,51,102,153,204,255,306].map((a,j) => (
            <ellipse key={j} cx={Math.cos(a*Math.PI/180)*4.5} cy={Math.sin(a*Math.PI/180)*4.5}
              rx="4" ry="2.8" transform={`rotate(${a})`}
              fill="currentColor" opacity={0.5 - j*0.02}/>
          ))}
          <circle cx="0" cy="0" r="1.8" fill="#D4AF37" opacity="0.6"/>
        </g>
      ))}
      {/* Right side (mirror) */}
      <path d="M400,160 C380,120 360,90 370,50" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.5"/>
      <path d="M400,160 C360,140 320,130 300,110" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      {[[385,130],[392,100],[378,72],[360,110],[340,125],[320,118]].map(([cx,cy],i) => (
        <g key={i} transform={`translate(${cx},${cy})`}>
          {[0,51,102,153,204,255,306].map((a,j) => (
            <ellipse key={j} cx={Math.cos(a*Math.PI/180)*4.5} cy={Math.sin(a*Math.PI/180)*4.5}
              rx="4" ry="2.8" transform={`rotate(${a})`}
              fill="currentColor" opacity={0.5 - j*0.02}/>
          ))}
          <circle cx="0" cy="0" r="1.8" fill="#D4AF37" opacity="0.6"/>
        </g>
      ))}
    </svg>
  )
}

/* Mughal / Islamic arch behind names */
function MughalArch() {
  return (
    <svg
      viewBox="0 0 320 480"
      className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
      style={{ width: 'clamp(260px, 60vw, 420px)', top: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <defs>
        <filter id="arch-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      {/* Arch outline */}
      <path
        d="M50,460 L50,200 C50,90 270,90 270,200 L270,460"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.2"
        opacity="0.45"
        filter="url(#arch-glow)"
      />
      {/* Inner arch */}
      <path
        d="M68,460 L68,208 C68,108 252,108 252,208 L252,460"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.6"
        opacity="0.28"
      />
      {/* Keystone / pointed top ornament */}
      <path d="M160,88 L145,106 L160,100 L175,106 Z" fill="#C9A84C" opacity="0.45"/>
      {/* Arch top filigree */}
      <path d="M130,100 C135,92 145,88 160,86 C175,88 185,92 190,100" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.35"/>
      {/* Side column details */}
      <rect x="44" y="200" width="12" height="260" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2"/>
      <rect x="264" y="200" width="12" height="260" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.2"/>
      {/* Top ornamental flourish */}
      <path d="M140,78 C140,70 148,64 160,62 C172,64 180,70 180,78" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.32"/>
      <circle cx="160" cy="62" r="3" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.35"/>
      {/* Corner ornaments on arch */}
      <path d="M50,210 C42,202 50,194 58,198" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.28"/>
      <path d="M270,210 C278,202 270,194 262,198" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.28"/>
      {/* Horizontal ornament lines */}
      <line x1="50" y1="360" x2="85" y2="360" stroke="#C9A84C" strokeWidth="0.6" opacity="0.2"/>
      <line x1="235" y1="360" x2="270" y2="360" stroke="#C9A84C" strokeWidth="0.6" opacity="0.2"/>
    </svg>
  )
}

/* Gold filigree top ornament */
function GoldFiligree() {
  return (
    <svg viewBox="0 0 140 40" width="140" height="40" xmlns="http://www.w3.org/2000/svg">
      <path d="M70,8 C70,8 60,20 48,16 C36,12 32,20 40,26 C48,32 60,28 70,36 C80,28 92,32 100,26 C108,20 104,12 92,16 C80,20 70,8 70,8Z" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.55"/>
      <circle cx="70" cy="8" r="2" fill="#C9A84C" opacity="0.5"/>
      <path d="M40,20 C30,18 20,22 14,18" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.38"/>
      <path d="M100,20 C110,18 120,22 126,18" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.38"/>
      <circle cx="14" cy="18" r="1.5" fill="#C9A84C" opacity="0.38"/>
      <circle cx="126" cy="18" r="1.5" fill="#C9A84C" opacity="0.38"/>
      <path d="M25,24 C20,20 22,14 28,16" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.28"/>
      <path d="M115,24 C120,20 118,14 112,16" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.28"/>
    </svg>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#FAF0E4' }}
    >
      {/* Parchment texture gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 42%, rgba(255,245,230,0.9) 0%, rgba(240,220,195,0.35) 100%)',
      }}/>

      {/* Subtle warm shadow at edges */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 140% 140% at 50% 50%, transparent 30%, rgba(100,30,10,0.12) 100%)',
      }}/>

      {/* Botanical corner decorations */}
      <BotanicalTopLeft />
      <BotanicalTopRight />
      <BotanicalBottom />

      {/* Mughal arch (centered behind text) */}
      <MughalArch />

      {/* Falling petals */}
      {PETALS.map(p => <Petal key={p.id} {...p} />)}

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto w-full py-20"
      >
        <motion.div variants={heroContainer} initial="hidden" animate="visible">

          {/* Bismillah */}
          <motion.p
            variants={heroItem}
            className="arabic-text mb-4"
            style={{ color: '#8B1A1A', fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', opacity: 0.8 }}
          >
            بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيْمِ
          </motion.p>

          {/* Filigree ornament */}
          <motion.div variants={heroItem} className="flex justify-center mb-5 mt-2">
            <GoldFiligree />
          </motion.div>

          {/* Horizontal ornament line */}
          <motion.div variants={heroItem} className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(180,130,40,0.5))' }}/>
            <div className="w-1 h-1 rotate-45" style={{ background: '#C9A84C', opacity: 0.6 }}/>
            <div className="h-px w-10" style={{ background: 'rgba(180,130,40,0.4)' }}/>
            <div className="w-1 h-1 rotate-45" style={{ background: '#C9A84C', opacity: 0.6 }}/>
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(180,130,40,0.5))' }}/>
          </motion.div>

          {/* Groom name */}
          <motion.h1
            variants={heroItem}
            className="font-cormorant tracking-[0.18em] leading-none"
            style={{
              fontSize: 'clamp(1.5rem, 5.5vw, 4rem)',
              color: '#3D0A0A',
              fontWeight: 400,
            }}
          >
            Unais Ibrahim C.K
          </motion.h1>

          {/* Ampersand */}
          <motion.div variants={heroItem} className="flex items-center justify-center gap-4 md:gap-8 my-4 md:my-6">
            <div className="h-px w-10 md:w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(180,130,40,0.4))' }}/>
            <span className="font-vibes leading-none" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', color: '#C9A84C' }}>
              &amp;
            </span>
            <div className="h-px w-10 md:w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(180,130,40,0.4))' }}/>
          </motion.div>

          {/* Bride name */}
          <motion.h1
            variants={heroItem}
            className="font-cormorant tracking-[0.18em] leading-none"
            style={{
              fontSize: 'clamp(1.5rem, 5.5vw, 4rem)',
              color: '#3D0A0A',
              fontWeight: 400,
            }}
          >
            Nasma Sherin V
          </motion.h1>

          {/* Bottom ornament line */}
          <motion.div variants={heroItem} className="flex items-center justify-center gap-3 mt-8 mb-6">
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(180,130,40,0.5))' }}/>
            <div className="w-1 h-1 rotate-45" style={{ background: '#C9A84C', opacity: 0.6 }}/>
            <div className="h-px w-10" style={{ background: 'rgba(180,130,40,0.4)' }}/>
            <div className="w-1 h-1 rotate-45" style={{ background: '#C9A84C', opacity: 0.6 }}/>
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(180,130,40,0.5))' }}/>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={heroItem}
            className="font-playfair italic leading-relaxed mb-3"
            style={{ fontSize: 'clamp(0.85rem, 2vw, 1.05rem)', color: 'rgba(61,10,10,0.6)' }}
          >
            Together with their families invite you to celebrate their wedding
          </motion.p>

          {/* Date */}
          <motion.p
            variants={heroItem}
            className="font-inter tracking-[0.35em] uppercase mt-5 mb-10"
            style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', color: 'rgba(180,130,40,0.8)', fontWeight: 300 }}
          >
            Sunday · 9 August 2026
          </motion.p>

          {/* CTA */}
          <motion.div variants={heroItem}>
            <motion.a
              href="#parents"
              className="relative inline-flex items-center font-inter tracking-[0.28em] uppercase overflow-hidden"
              style={{
                fontSize: 'clamp(0.6rem, 1.4vw, 0.72rem)',
                border: '1px solid rgba(180,130,40,0.55)',
                color: '#8B4513',
                padding: '13px 40px',
                fontWeight: 300,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: 'rgba(180,130,40,0.07)' }}
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
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-5 h-8 rounded-full border flex justify-center pt-1.5" style={{ borderColor: 'rgba(180,130,40,0.38)' }}>
          <motion.div
            className="w-0.5 rounded-full"
            style={{ background: '#C9A84C', height: '10px' }}
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
        <p className="font-inter tracking-[0.22em] uppercase" style={{ fontSize: '0.55rem', color: 'rgba(100,50,10,0.42)', fontWeight: 300 }}>
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
