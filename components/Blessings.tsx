'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

export default function Blessings() {
  return (
    <section id="blessings" className="relative py-10 md:py-16 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
        <motion.div
          className="invite-card p-8 md:p-12 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.45))' }}/>
            <div className="w-2 h-2 rotate-45" style={{ background: '#B8902A', opacity: 0.5 }}/>
            <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.45))' }}/>
          </motion.div>

          <motion.p variants={fadeUp} className="font-inter tracking-[0.32em] text-xs uppercase mb-7" style={{ color: 'rgba(61,10,10,0.5)', fontWeight: 300 }}>
            A Quranic Blessing
          </motion.p>

          <motion.p variants={fadeUp} className="arabic-text mb-6" style={{ fontSize: 'clamp(1rem, 2.8vw, 1.45rem)', color: '#8B1A1A', lineHeight: 2.2, opacity: 0.85 }}>
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 my-6">
            <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.45))' }}/>
            <div className="w-2 h-2 rotate-45" style={{ background: '#B8902A', opacity: 0.45 }}/>
            <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.45))' }}/>
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            className="font-playfair italic leading-relaxed"
            style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.25rem)', color: '#3D0A0A', lineHeight: 1.85 }}
          >
            "And among His signs is that He created for you mates from among
            yourselves, that you may find tranquility in them."
          </motion.blockquote>

          <motion.p variants={fadeUp} className="font-playfair italic mt-4" style={{ fontSize: '0.85rem', color: 'rgba(61,10,10,0.42)' }}>
            — Quran 30:21
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
