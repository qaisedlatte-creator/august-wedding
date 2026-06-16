'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Heart } from 'lucide-react'

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const buttons = [
    { href: '#rsvp', icon: Heart, label: 'RSVP', fill: true },
    { href: '#location', icon: MapPin, label: 'VENUE', fill: false },
  ]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
        >
          {buttons.map(({ href, icon: Icon, label, fill }) => (
            <div key={href} className="relative group flex items-center justify-end">
              <span
                className="absolute right-14 font-cormorant tracking-[0.2em] text-xs uppercase px-3 py-1.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                style={{
                  background: '#2D0505',
                  color: '#C9A84C',
                  border: '1px solid rgba(201,168,76,0.25)',
                }}
              >
                {label}
              </span>
              <motion.a
                href={href}
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #5C0E0E, #2D0505)',
                  border: '1px solid rgba(201, 168, 76, 0.35)',
                  boxShadow: '0 4px 20px rgba(45,5,5,0.5)',
                }}
                whileHover={{ scale: 1.14 }}
                whileTap={{ scale: 0.93 }}
                aria-label={label}
              >
                <Icon size={16} color="#C9A84C" fill={fill ? 'rgba(201,168,76,0.25)' : 'none'} />
              </motion.a>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
