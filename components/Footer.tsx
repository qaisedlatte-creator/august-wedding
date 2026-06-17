'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#FAF0E4' }}
    >
      {/* Soft parchment shadow at top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.3), transparent)' }}/>

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}>

          {/* Diamond ornament */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.4))' }}/>
            <div className="w-2.5 h-2.5 rotate-45" style={{ background: '#B8902A', opacity: 0.5 }}/>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.4))' }}/>
          </motion.div>

          <motion.p variants={fadeUp} className="font-inter tracking-[0.3em] text-xs uppercase mb-4" style={{ color: 'rgba(61,10,10,0.45)', fontWeight: 300 }}>
            With Love
          </motion.p>

          <motion.p variants={fadeUp} className="font-cormorant" style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)', color: '#3D0A0A', fontWeight: 400 }}>
            Unais Ibrahim C.K
          </motion.p>

          <motion.div variants={fadeUp} className="my-3">
            <span className="font-vibes" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3rem)', color: '#B8902A' }}>&amp;</span>
          </motion.div>

          <motion.p variants={fadeUp} className="font-cormorant" style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)', color: '#3D0A0A', fontWeight: 400 }}>
            Nasma Sherin V
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 my-8">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.4))' }}/>
            <div className="w-2 h-2 rotate-45" style={{ background: '#B8902A', opacity: 0.45 }}/>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.4))' }}/>
          </motion.div>

          <motion.p variants={fadeUp} className="font-inter tracking-[0.28em] text-sm uppercase" style={{ color: 'rgba(61,10,10,0.45)', fontWeight: 300, fontSize: '0.7rem' }}>
            09 · August · 2026
          </motion.p>

          <motion.p variants={fadeUp} className="arabic-text mt-6" style={{ fontSize: '0.98rem', color: 'rgba(139,26,26,0.4)' }}>
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </motion.p>

          <motion.p variants={fadeUp} className="font-inter mt-10 tracking-wide" style={{ fontSize: '0.62rem', color: 'rgba(61,10,10,0.22)', fontWeight: 300 }}>
            Made with love · {new Date().getFullYear()}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
