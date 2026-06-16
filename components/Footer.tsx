'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'
import IslamicPattern from './IslamicPattern'

function Spinning3DMedallion() {
  return (
    <div style={{ perspective: '600px' }}>
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg viewBox="0 0 80 80" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
          {/* Outer 8-pointed star */}
          <polygon
            points="40,8 45,27 63,17 53,35 72,40 53,45 63,63 45,53 40,72 35,53 17,63 27,45 8,40 27,35 17,17 35,27"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1"
            opacity="0.6"
          />
          {/* Inner octagon */}
          <polygon
            points="53,35 63,40 53,45 40,53 27,45 17,40 27,35 40,27"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.7"
            opacity="0.45"
          />
          {/* Center */}
          <circle cx="40" cy="40" r="6" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4" />
          <circle cx="40" cy="40" r="3" fill="#C9A84C" opacity="0.35" />
          {/* Outer ring */}
          <circle cx="40" cy="40" r="36" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.25" />
        </svg>
      </motion.div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: '#2D0505' }}
    >
      <IslamicPattern opacity={0.09} color="#C9A84C" id="footer-pattern" />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 110%, rgba(201,168,76,0.045) 0%, transparent 60%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(139,26,26,0.22) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          {/* 3D spinning medallion */}
          <motion.div variants={fadeUp} className="flex justify-center mb-10">
            <Spinning3DMedallion />
          </motion.div>

          <motion.p variants={fadeUp} className="font-cormorant tracking-[0.3em] text-xs uppercase mb-4" style={{ color: 'rgba(201,168,76,0.58)' }}>
            With Love
          </motion.p>

          <motion.div variants={fadeUp} className="text-3xl mb-6" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
            ❤️
          </motion.div>

          <motion.p variants={fadeUp} className="font-cormorant font-light tracking-wide" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', color: '#FAF7F0' }}>
            Unais Ibrahim C.K
          </motion.p>

          <motion.div variants={fadeUp} className="my-3">
            <span className="font-vibes" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', color: '#C9A84C' }}>&amp;</span>
          </motion.div>

          <motion.p variants={fadeUp} className="font-cormorant font-light tracking-wide" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', color: '#FAF7F0' }}>
            Nasma Sherin V
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 my-8">
            <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
            <span style={{ color: '#C9A84C', fontSize: '8px' }}>✦</span>
            <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
          </motion.div>

          <motion.p variants={fadeUp} className="font-cormorant tracking-[0.28em] text-sm uppercase" style={{ color: 'rgba(201,168,76,0.58)' }}>
            09 · August · 2026
          </motion.p>

          <motion.p variants={fadeUp} className="arabic-text mt-6" style={{ fontSize: '1.05rem', color: 'rgba(201,168,76,0.42)' }}>
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </motion.p>

          <motion.p variants={fadeUp} className="font-inter mt-10 tracking-wide" style={{ fontSize: '0.7rem', color: 'rgba(250,247,240,0.18)' }}>
            Made with love · {new Date().getFullYear()}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
