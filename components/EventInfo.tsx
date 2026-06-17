'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '@/lib/animations'

function MosqueIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <path d="M28 8 C18 8 12 16 12 24 L12 44 L44 44 L44 24 C44 16 38 8 28 8Z" stroke="#B8902A" strokeWidth="1.2" fill="none" opacity="0.7"/>
      <path d="M6 44 C6 38 10 34 16 34 L16 44" stroke="#B8902A" strokeWidth="1" fill="none" opacity="0.55"/>
      <path d="M50 44 C50 38 46 34 40 34 L40 44" stroke="#B8902A" strokeWidth="1" fill="none" opacity="0.55"/>
      <rect x="2" y="22" width="5" height="22" rx="0.5" stroke="#B8902A" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M2 22 C2 18 4.5 16 4.5 16 C4.5 16 7 18 7 22" stroke="#B8902A" strokeWidth="1" fill="none" opacity="0.5"/>
      <rect x="49" y="22" width="5" height="22" rx="0.5" stroke="#B8902A" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M49 22 C49 18 51.5 16 51.5 16 C51.5 16 54 18 54 22" stroke="#B8902A" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M22 44 L22 34 C22 30.7 24.7 28 28 28 C31.3 28 34 30.7 34 34 L34 44" stroke="#B8902A" strokeWidth="1.1" fill="none" opacity="0.65"/>
      <circle cx="28" cy="18" r="3.5" stroke="#B8902A" strokeWidth="1" fill="none" opacity="0.55"/>
      <line x1="0" y1="44" x2="56" y2="44" stroke="#B8902A" strokeWidth="0.8" opacity="0.35"/>
    </svg>
  )
}

export default function EventInfo() {
  return (
    <section id="event" className="relative py-10 md:py-16 overflow-hidden" style={{ backgroundColor: '#FAF0E4' }}>
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <motion.div variants={scaleIn} className="invite-card p-8 md:p-12 text-center relative">
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t border-l" style={{ borderColor: 'rgba(184,144,42,0.35)' }}/>
            <div className="absolute top-4 right-4 w-5 h-5 border-t border-r" style={{ borderColor: 'rgba(184,144,42,0.35)' }}/>
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l" style={{ borderColor: 'rgba(184,144,42,0.35)' }}/>
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r" style={{ borderColor: 'rgba(184,144,42,0.35)' }}/>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.45))' }}/>
              <div className="w-2 h-2 rotate-45" style={{ background: '#B8902A', opacity: 0.5 }}/>
              <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.45))' }}/>
            </motion.div>

            <motion.p variants={fadeUp} className="font-inter tracking-[0.32em] text-xs uppercase mb-5" style={{ color: 'rgba(61,10,10,0.5)', fontWeight: 300 }}>
              Wedding Ceremony
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <MosqueIcon />
            </motion.div>

            <motion.h3 variants={fadeUp} className="font-cormorant mb-8" style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', color: '#3D0A0A', fontWeight: 400 }}>
              Wedding &amp; Walima Reception
            </motion.h3>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="text-center">
                <p className="font-inter tracking-[0.22em] text-xs uppercase mb-3" style={{ color: 'rgba(184,144,42,0.65)', fontWeight: 300 }}>Date</p>
                <p className="font-playfair italic" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: '#3D0A0A' }}>Sunday</p>
                <p className="font-playfair italic" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: '#8B1A1A' }}>9 August</p>
                <p className="font-playfair" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: '#3D0A0A' }}>2026</p>
              </div>
              <div className="text-center">
                <p className="font-inter tracking-[0.22em] text-xs uppercase mb-3" style={{ color: 'rgba(184,144,42,0.65)', fontWeight: 300 }}>Time</p>
                <p className="font-playfair italic" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: '#8B1A1A' }}>11:00 AM</p>
                <p className="font-playfair italic my-1" style={{ fontSize: '0.85rem', color: 'rgba(61,10,10,0.38)' }}>to</p>
                <p className="font-playfair italic" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: '#8B1A1A' }}>2:30 PM</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
