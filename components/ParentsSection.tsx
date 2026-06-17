'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp, slideLeft, slideRight } from '@/lib/animations'

function DiamondDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.4))' }} />
      <div className="w-2 h-2 rotate-45" style={{ background: '#B8902A', opacity: 0.5 }} />
      <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.4))' }} />
    </div>
  )
}

interface CardProps {
  role: string
  name: string
  relation: string
  parent1: string
  parent2: string
  slideVariant: typeof slideLeft
}

function ParentCard({ role, name, relation, parent1, parent2, slideVariant }: CardProps) {
  return (
    <motion.div
      variants={slideVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="invite-card p-7 md:p-9 text-center relative"
    >
      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t border-l" style={{ borderColor: 'rgba(184,144,42,0.35)' }} />
      <div className="absolute top-4 right-4 w-5 h-5 border-t border-r" style={{ borderColor: 'rgba(184,144,42,0.35)' }} />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l" style={{ borderColor: 'rgba(184,144,42,0.35)' }} />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r" style={{ borderColor: 'rgba(184,144,42,0.35)' }} />

      <p className="font-inter tracking-[0.32em] text-xs uppercase mb-4" style={{ color: 'rgba(184,144,42,0.75)', fontWeight: 300 }}>
        {role}
      </p>
      <h3 className="font-cormorant" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.65rem)', color: '#3D0A0A', fontWeight: 400 }}>
        {name}
      </h3>
      <DiamondDivider />
      <p className="font-playfair italic text-sm mb-3" style={{ color: 'rgba(74,10,10,0.5)' }}>
        {relation}
      </p>
      <p className="font-playfair" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#5C0E0E' }}>
        {parent1}
      </p>
      <p className="font-vibes text-2xl my-1" style={{ color: 'rgba(184,144,42,0.65)' }}>&amp;</p>
      <p className="font-playfair" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#5C0E0E' }}>
        {parent2}
      </p>
    </motion.div>
  )
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="text-center mb-10">
      <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.45))' }} />
        <div className="w-2 h-2 rotate-45" style={{ background: '#B8902A', opacity: 0.5 }} />
        <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.45))' }} />
      </motion.div>
      <motion.p variants={fadeUp} className="font-inter tracking-[0.32em] text-xs uppercase mb-3" style={{ color: 'rgba(184,144,42,0.7)', fontWeight: 300 }}>
        {label}
      </motion.p>
      <motion.h2 variants={fadeUp} className="font-cormorant" style={{ fontSize: 'clamp(1.9rem, 5.5vw, 3rem)', color: '#3D0A0A', fontWeight: 400 }}>
        {title}
      </motion.h2>
    </motion.div>
  )
}

export default function ParentsSection() {
  return (
    <section
      id="parents"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
        <SectionHeader label="With the Blessings of" title="Our Beloved Families" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ParentCard
            role="The Groom"
            name="Unais Ibrahim C.K"
            relation="Son of"
            parent1="Ibrahim Ali C.K"
            parent2="Saifunnisa"
            slideVariant={slideLeft}
          />
          <ParentCard
            role="The Bride"
            name="Nasma Sherin V"
            relation="Daughter of"
            parent1="Nishar Babu V"
            parent2="Sameera"
            slideVariant={slideRight}
          />
        </div>
      </div>
    </section>
  )
}
