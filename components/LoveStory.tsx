'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'
import IslamicPattern from './IslamicPattern'

function VerticalOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <div className="flex justify-center">
      <div className={`flex flex-col items-center gap-2.5 ${flip ? 'flex-col-reverse' : ''}`}>
        <div
          className="w-px h-16"
          style={{
            background: flip
              ? 'linear-gradient(to top, transparent, rgba(201,168,76,0.5))'
              : 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.5))',
          }}
        />
        <div className="w-3 h-3 rotate-45" style={{ background: '#C9A84C', opacity: 0.55 }} />
        <div
          className="w-px h-10"
          style={{
            background: flip
              ? 'linear-gradient(to top, rgba(201,168,76,0.5), transparent)'
              : 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)',
          }}
        />
      </div>
    </div>
  )
}

export default function LoveStory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section
      ref={ref}
      id="love-story"
      className="relative py-28 md:py-44 overflow-hidden"
      style={{ backgroundColor: '#FFF5F0' }}
    >
      <IslamicPattern opacity={0.038} color="#C9A84C" id="lovestory-pattern" />

      {/* Warm cream glow with gold hint */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[700px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
      </motion.div>

      {/* Subtle warm red tint at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 50%, rgba(139,26,26,0.04) 100%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <VerticalOrnament />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-cormorant tracking-[0.3em] text-xs uppercase mb-8"
            style={{ color: 'rgba(74,10,10,0.5)' }}
          >
            Our Story
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="font-cormorant italic font-light leading-relaxed"
            style={{
              fontSize: 'clamp(1.35rem, 3.5vw, 2.1rem)',
              color: '#2D0505',
              lineHeight: 1.75,
            }}
          >
            "With the blessings of Allah and our beloved families, we joyfully
            invite you to join us as we begin a new chapter of life together."
          </motion.blockquote>

          <motion.div variants={fadeUp} className="mt-10 mb-6">
            <span
              className="font-vibes"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', color: '#C9A84C' }}
            >
              Unais &amp; Nasma
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-playfair italic text-sm tracking-wide"
            style={{ color: 'rgba(74,10,10,0.45)' }}
          >
            9 August 2026
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <VerticalOrnament flip />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
