'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { stagger, fadeUp, slideLeft, slideRight } from '@/lib/animations'
import IslamicPattern from './IslamicPattern'

function Corners() {
  return (
    <>
      <div className="absolute top-3.5 left-3.5 w-5 h-5 border-t border-l" style={{ borderColor: 'rgba(201,168,76,0.45)' }} />
      <div className="absolute top-3.5 right-3.5 w-5 h-5 border-t border-r" style={{ borderColor: 'rgba(201,168,76,0.45)' }} />
      <div className="absolute bottom-3.5 left-3.5 w-5 h-5 border-b border-l" style={{ borderColor: 'rgba(201,168,76,0.45)' }} />
      <div className="absolute bottom-3.5 right-3.5 w-5 h-5 border-b border-r" style={{ borderColor: 'rgba(201,168,76,0.45)' }} />
    </>
  )
}

function CardDivider() {
  return (
    <div className="flex items-center gap-3 my-5">
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.45))' }} />
      <span style={{ color: '#C9A84C', fontSize: '8px' }}>✦</span>
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.45))' }} />
    </div>
  )
}

interface ParentCardProps {
  role: string
  name: string
  relation: string
  parent1: string
  parent2: string
  slideVariant: typeof slideLeft
}

function Tilt3DParentCard({ role, name, relation, parent1, parent2, slideVariant }: ParentCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 260, damping: 28 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 260, damping: 28 })
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      variants={slideVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        className="relative"
      >
        {/* 3D depth shadow layer */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(45,5,5,0.15)',
            transform: 'translateZ(-8px) translateY(6px) translateX(4px)',
            border: '1px solid transparent',
          }}
        />

        {/* Spotlight on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle 200px at ${glowX} ${glowY}, rgba(201,168,76,0.09) 0%, transparent 70%)`,
            borderRadius: 'inherit',
          }}
        />

        <div
          className="relative p-8 md:p-10 text-center h-full"
          style={{
            background: 'rgba(255,244,232,0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(201,168,76,0.28)',
            boxShadow: '0 8px 48px rgba(45,5,5,0.07), 0 2px 16px rgba(45,5,5,0.04)',
            transformStyle: 'preserve-3d',
          }}
        >
          <Corners />

          <p className="font-cormorant tracking-[0.28em] text-xs uppercase mb-5" style={{ color: 'rgba(201,168,76,0.75)', transform: 'translateZ(12px)' }}>
            {role}
          </p>

          <h3 className="font-cormorant font-semibold leading-tight" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: '#2D0505', transform: 'translateZ(18px)' }}>
            {name}
          </h3>

          <div style={{ transform: 'translateZ(10px)' }}>
            <CardDivider />
          </div>

          <div style={{ transform: 'translateZ(8px)' }}>
            <p className="font-playfair italic text-sm mb-3" style={{ color: 'rgba(74,10,10,0.55)' }}>
              {relation}
            </p>
            <p className="font-cormorant" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#5C0E0E' }}>
              {parent1}
            </p>
            <p className="font-vibes text-2xl my-1" style={{ color: 'rgba(201,168,76,0.6)' }}>&amp;</p>
            <p className="font-cormorant" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#5C0E0E' }}>
              {parent2}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ParentsSection() {
  return (
    <section
      id="parents"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#FAF0E4' }}
    >
      <IslamicPattern opacity={0.042} color="#C9A84C" id="parents-pattern" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-16">
          <motion.p variants={fadeUp} className="arabic-text mb-3" style={{ fontSize: '1.2rem', color: '#C9A84C' }}>
            بِسْمِ اللَّهِ
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-cormorant font-light" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', color: '#2D0505' }}>
            Our Beloved Families
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }} />
            <span style={{ color: '#C9A84C', fontSize: '9px' }}>✦</span>
            <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }} />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14" style={{ perspective: '1200px' }}>
          <Tilt3DParentCard
            role="The Groom"
            name="Unais Ibrahim C.K"
            relation="Son of"
            parent1="Ibrahim Ali C.K"
            parent2="Saifunnisa"
            slideVariant={slideLeft}
          />
          <Tilt3DParentCard
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
