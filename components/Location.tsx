'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '@/lib/animations'
import IslamicPattern from './IslamicPattern'
import { MapPin, ExternalLink, Navigation2 } from 'lucide-react'

const MAPS_URL = 'https://share.google/H1FapEGfpm4LwrETW'

const CORNER_POSITIONS = [
  'top-3 left-3 border-t border-l',
  'top-3 right-3 border-t border-r',
  'bottom-3 left-3 border-b border-l',
  'bottom-3 right-3 border-b border-r',
] as const

export default function Location() {
  return (
    <section
      id="location"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#FAF0E4' }}
    >
      <IslamicPattern opacity={0.038} color="#C9A84C" id="location-pattern" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-12">
          <motion.p variants={fadeUp} className="font-cormorant tracking-[0.3em] text-xs uppercase mb-4" style={{ color: 'rgba(74,10,10,0.55)' }}>
            Find Us Here
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-cormorant font-light" style={{ fontSize: 'clamp(2.3rem, 6.5vw, 4rem)', color: '#2D0505' }}>
            Venue &amp; Location
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }} />
            <span style={{ color: '#C9A84C', fontSize: '8px' }}>✦</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }} />
          </motion.div>
        </motion.div>

        {/* Location Card */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="overflow-hidden"
          style={{
            border: '1px solid rgba(201,168,76,0.22)',
            boxShadow: '0 16px 60px rgba(45,5,5,0.1)',
          }}
        >
          {/* Venue image section with overlay */}
          <div
            className="relative h-56 md:h-72 flex flex-col items-center justify-center overflow-hidden"
            style={{ background: '#2D0505' }}
          >
            {/* Venue / wedding hall stock image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=75"
              alt="Wedding venue"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
              loading="lazy"
            />

            {/* Dark crimson gradient overlay */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, rgba(92,14,14,0.72) 0%, rgba(45,5,5,0.85) 100%)',
            }} />

            <IslamicPattern opacity={0.06} color="#C9A84C" id="location-card-pattern" />

            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)',
            }} />

            {/* Pulsing rings */}
            {[160, 110, 68, 34].map((size, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border"
                style={{ width: size, height: size, borderColor: `rgba(201,168,76,${0.06 + i * 0.07})` }}
                animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.75, 0.35] }}
                transition={{ duration: 2.8, delay: i * 0.45, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}

            {/* 3D animated map pin */}
            <motion.div
              className="relative z-10 flex flex-col items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ perspective: '400px' }}
            >
              <motion.div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
                  boxShadow: '0 6px 28px rgba(201,168,76,0.65), 0 2px 8px rgba(0,0,0,0.3)',
                }}
                animate={{ rotateY: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <MapPin size={24} color="#2D0505" fill="rgba(45,5,5,0.18)" />
              </motion.div>
              <div className="w-0.5 h-10 mt-0.5" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.65), transparent)' }} />
              <motion.div
                className="w-3 h-1.5 rounded-full mt-0.5"
                style={{ background: 'rgba(201,168,76,0.25)' }}
                animate={{ scaleX: [1, 0.7, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            <p className="absolute bottom-4 font-cormorant tracking-[0.22em] text-xs uppercase" style={{ color: 'rgba(201,168,76,0.45)' }}>
              Kerala, India
            </p>
          </div>

          {/* Info block */}
          <div className="relative p-8 md:p-12 text-center" style={{ background: 'rgba(255,248,245,0.95)' }}>
            {CORNER_POSITIONS.map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-5 h-5`} style={{ borderColor: 'rgba(201,168,76,0.35)' }} />
            ))}

            <div className="flex justify-center mb-5">
              <Navigation2 size={18} color="#C9A84C" />
            </div>

            <h3 className="font-cormorant font-semibold mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#2D0505' }}>
              Wedding Venue
            </h3>

            <p className="font-playfair italic text-sm mb-8" style={{ color: 'rgba(74,10,10,0.55)' }}>
              Sunday, 9 August 2026 · 11:00 AM – 2:30 PM
            </p>

            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-cormorant tracking-[0.22em] text-sm uppercase px-10 py-4 transition-all"
              style={{
                background: 'linear-gradient(135deg, #5C0E0E 0%, #2D0505 100%)',
                color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.28)',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 10px 36px rgba(45,5,5,0.38)',
                borderColor: 'rgba(201,168,76,0.55)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin size={15} />
              Open in Google Maps
              <ExternalLink size={12} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
