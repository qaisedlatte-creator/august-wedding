'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'
import IslamicPattern from './IslamicPattern'

function DiamondFrame() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="h-px w-20 md:w-32" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }} />
      <div className="w-10 h-10 rotate-45 flex items-center justify-center" style={{ border: '1px solid rgba(201,168,76,0.38)' }}>
        <div className="w-4 h-4 rotate-0" style={{ border: '1px solid rgba(201,168,76,0.28)' }} />
      </div>
      <div className="h-px w-20 md:w-32" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }} />
    </div>
  )
}

export default function Blessings() {
  return (
    <section
      id="blessings"
      className="relative py-28 md:py-44 overflow-hidden"
      style={{ backgroundColor: '#FFF5F0' }}
    >
      <IslamicPattern opacity={0.038} color="#C9A84C" id="blessings-pattern" />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 65%)',
      }} />
      {/* Subtle warm red edge tint */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 50%, rgba(139,26,26,0.035) 100%)',
      }} />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp} className="mb-10"><DiamondFrame /></motion.div>

          <motion.p variants={fadeUp} className="font-cormorant tracking-[0.3em] text-xs uppercase mb-8" style={{ color: 'rgba(74,10,10,0.5)' }}>
            A Quranic Blessing
          </motion.p>

          {/* Arabic verse */}
          <motion.p variants={fadeUp} className="arabic-text mb-6" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', color: '#C9A84C', lineHeight: 2.2 }}>
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
          </motion.p>

          {/* Divider */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 my-9">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.42))' }} />
            <span style={{ color: '#C9A84C', fontSize: '8px' }}>✦</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.42))' }} />
          </motion.div>

          {/* English translation */}
          <motion.blockquote variants={fadeUp} className="font-cormorant italic font-light leading-relaxed" style={{ fontSize: 'clamp(1.25rem, 3.2vw, 1.85rem)', color: '#4A0A0A', lineHeight: 1.82 }}>
            "And among His signs is that He created for you mates from among
            yourselves, that you may find tranquility in them."
          </motion.blockquote>

          <motion.p variants={fadeUp} className="font-playfair italic mt-6 tracking-wide" style={{ fontSize: '0.9rem', color: 'rgba(74,10,10,0.5)' }}>
            — Quran 30:21
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10"><DiamondFrame /></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
