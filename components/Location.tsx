'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '@/lib/animations'
import { MapPin, ExternalLink, Navigation2 } from 'lucide-react'

const MAPS_URL = 'https://share.google/H1FapEGfpm4LwrETW'

export default function Location() {
  return (
    <section id="location" className="relative py-10 md:py-16 overflow-hidden" style={{ backgroundColor: '#FAF0E4' }}>
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>

          <motion.div variants={scaleIn} className="invite-card overflow-hidden">
            {/* Map image header */}
            <div className="relative h-44 md:h-56" style={{ background: '#3D0A0A' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=70"
                alt="Wedding venue"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(61,10,10,0.5) 0%, rgba(61,10,10,0.8) 100%)' }}/>

              {/* Pulsing pin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {[80, 55, 34].map((s, i) => (
                  <motion.div key={i} className="absolute rounded-full border" style={{ width: s, height: s, borderColor: 'rgba(184,144,42,0.3)' }}
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}/>
                ))}
                <motion.div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #B8902A, #D4AF37)', boxShadow: '0 4px 20px rgba(184,144,42,0.5)' }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <MapPin size={20} color="#FAF0E4" fill="rgba(250,240,228,0.15)"/>
                </motion.div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 text-center relative">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, rgba(184,144,42,0.45))' }}/>
                <div className="w-2 h-2 rotate-45" style={{ background: '#B8902A', opacity: 0.5 }}/>
                <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, rgba(184,144,42,0.45))' }}/>
              </div>

              <motion.div variants={fadeUp} className="flex justify-center mb-4">
                <Navigation2 size={16} color="#B8902A" opacity={0.7}/>
              </motion.div>

              <motion.p variants={fadeUp} className="font-inter tracking-[0.32em] text-xs uppercase mb-3" style={{ color: 'rgba(61,10,10,0.5)', fontWeight: 300 }}>
                Find Us Here
              </motion.p>

              <motion.h3 variants={fadeUp} className="font-cormorant mb-2" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)', color: '#3D0A0A', fontWeight: 400 }}>
                Wedding Venue
              </motion.h3>

              <motion.p variants={fadeUp} className="font-playfair italic mb-7" style={{ fontSize: '0.88rem', color: 'rgba(61,10,10,0.5)' }}>
                Sunday, 9 August 2026 · Kerala, India
              </motion.p>

              <motion.a
                variants={fadeUp}
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-inter tracking-[0.22em] text-xs uppercase px-8 py-3.5 transition-all"
                style={{
                  background: 'linear-gradient(135deg, #8B1A1A, #5C0E0E)',
                  color: '#F5E8CC',
                  borderRadius: '2px',
                  fontWeight: 300,
                  letterSpacing: '0.22em',
                  boxShadow: '0 4px 20px rgba(139,26,26,0.22)',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 8px 28px rgba(139,26,26,0.32)' }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin size={13}/>
                Open in Google Maps
                <ExternalLink size={11}/>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
