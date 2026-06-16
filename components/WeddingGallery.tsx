'use client'

import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'
import IslamicPattern from './IslamicPattern'

const IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80',
    alt: 'Beautiful mosque architecture at golden hour',
    label: 'Sacred Space',
    tall: false,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1583394388681-5d8d4a5e3e1a?auto=format&fit=crop&w=600&q=80',
    alt: 'Intricate bridal mehndi henna art on hands',
    label: 'Henna Blessing',
    tall: true,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80',
    alt: 'White roses bridal bouquet',
    label: 'Pure Love',
    tall: false,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1565793688891-c1d73d0ff7c3?auto=format&fit=crop&w=600&q=80',
    alt: 'Islamic geometric tile art and patterns',
    label: 'Sacred Geometry',
    tall: false,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
    alt: 'Elegant wedding candles and floral decor',
    label: 'Eternal Flame',
    tall: true,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1537530874679-35c73a1a73cd?auto=format&fit=crop&w=600&q=80',
    alt: 'Lush floral wedding decoration arrangement',
    label: 'In Full Bloom',
    tall: false,
  },
]

export default function WeddingGallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#FFF5F0' }}
    >
      <IslamicPattern opacity={0.03} color="#5C0E0E" id="gallery-pattern" />

      {/* Soft top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14 md:mb-18"
        >
          <motion.p
            variants={fadeUp}
            className="font-cormorant tracking-[0.32em] text-xs uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            A Day to Remember
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-cormorant font-light"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#2D0505', lineHeight: 1 }}
          >
            Through Our Eyes
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mt-5"
          >
            <div
              className="h-px w-20"
              style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }}
            />
            <span style={{ color: '#C9A84C', fontSize: '9px' }}>✦</span>
            <div
              className="h-px w-20"
              style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }}
            />
          </motion.div>
        </motion.div>

        {/* Masonry-style image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 1.1,
                delay: (i % 3) * 0.13,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden group cursor-pointer"
              style={{ aspectRatio: img.tall ? '3/4' : '4/5' }}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
              />

              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(45,5,5,0.78) 0%, rgba(45,5,5,0.08) 50%, transparent 100%)',
                }}
              />

              {/* Hover shimmer */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 50%, rgba(201,168,76,0.04) 100%)',
                }}
              />

              {/* Image label */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4"
                initial={{ y: 6, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.13 + 0.55 }}
              >
                <div
                  className="flex items-center gap-2 mb-1"
                  style={{ opacity: 0.55 }}
                >
                  <div
                    className="h-px flex-1"
                    style={{ background: 'linear-gradient(to right, rgba(201,168,76,0.6), transparent)' }}
                  />
                </div>
                <p
                  className="font-cormorant tracking-[0.22em] uppercase"
                  style={{ fontSize: '0.7rem', color: '#D4AF37' }}
                >
                  {img.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mt-14"
        >
          <div
            className="h-px w-24"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }}
          />
          <svg viewBox="0 0 40 40" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="20,4 22.5,13.5 31.5,8.5 26.5,17.5 36,20 26.5,22.5 31.5,31.5 22.5,26.5 20,36 17.5,26.5 8.5,31.5 13.5,22.5 4,20 13.5,17.5 8.5,8.5 17.5,13.5"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.7"
              opacity="0.5"
            />
          </svg>
          <div
            className="h-px w-24"
            style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
