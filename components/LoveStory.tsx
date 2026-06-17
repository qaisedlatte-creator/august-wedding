'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

export default function LoveStory() {
  return (
    <section id="love-story" className="relative py-10 md:py-16 overflow-hidden" style={{ backgroundColor: '#FAF0E4' }}>
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
        <motion.div
          className="invite-card p-8 md:p-12 text-center relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Big quotation mark */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.45))' }}/>
            <div className="w-2 h-2 rotate-45" style={{ background: '#B8902A', opacity: 0.5 }}/>
            <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.45))' }}/>
          </motion.div>

          <motion.p variants={fadeUp} className="font-inter tracking-[0.32em] text-xs uppercase mb-6" style={{ color: 'rgba(61,10,10,0.5)', fontWeight: 300 }}>
            A Note For You
          </motion.p>

          {/* Large decorative quote mark */}
          <motion.div variants={fadeUp} className="text-left mb-2" style={{ fontSize: '4rem', color: 'rgba(139,26,26,0.12)', lineHeight: 1, fontFamily: 'Georgia, serif' }}>
            &ldquo;
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            className="font-playfair italic leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.3rem)', color: '#3D0A0A' }}
          >
            With the blessings of Allah and our beloved families, we joyfully
            invite you to join us as we begin a new chapter of life together.
          </motion.blockquote>

          <motion.div variants={fadeUp} className="mt-8">
            <span className="font-vibes" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3rem)', color: '#B8902A' }}>
              Unais &amp; Nasma
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="font-playfair italic mt-2" style={{ fontSize: '0.85rem', color: 'rgba(61,10,10,0.4)' }}>
            9 August 2026
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
