'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Show button quickly — visible from the loading screen
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  // Autoplay on first user gesture anywhere on the page (browsers require a gesture)
  const startOnGesture = useCallback(() => {
    const audio = audioRef.current
    if (!audio || playing) return
    audio.play().then(() => {
      setPlaying(true)
      // Remove listeners once started
      document.removeEventListener('click', startOnGesture)
      document.removeEventListener('touchstart', startOnGesture)
    }).catch(() => {})
  }, [playing])

  useEffect(() => {
    document.addEventListener('click', startOnGesture, { once: true })
    document.addEventListener('touchstart', startOnGesture, { once: true })
    return () => {
      document.removeEventListener('click', startOnGesture)
      document.removeEventListener('touchstart', startOnGesture)
    }
  }, [startOnGesture])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/barakallah.m4a" type="audio/mp4" />
      </audio>

      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            onClick={toggle}
            aria-label={playing ? 'Pause music' : 'Play Barakallah'}
            style={{
              position: 'fixed',
              bottom: '1.5rem',
              right: '1.5rem',
              zIndex: 210,           // above LoadingScreen z-[200]
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.45)',
              background: 'linear-gradient(145deg, rgba(45,5,5,0.82) 0%, rgba(92,14,14,0.78) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(45,5,5,0.35), 0 0 0 1px rgba(201,168,76,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <AnimatePresence mode="wait">
              {playing ? (
                <motion.div
                  key="playing"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}
                >
                  {[0, 1, 2].map((bar) => (
                    <motion.span
                      key={bar}
                      style={{
                        display: 'block',
                        width: 3,
                        borderRadius: 2,
                        background: 'linear-gradient(to top, rgba(201,168,76,0.6), #D4AF37)',
                      }}
                      animate={{ height: ['6px', '14px', '6px'] }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: bar * 0.15,
                      }}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="paused"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 2.5L13 8L4 13.5V2.5Z"
                      fill="url(#gold-play)"
                      stroke="rgba(201,168,76,0.5)"
                      strokeWidth="0.5"
                    />
                    <defs>
                      <linearGradient id="gold-play" x1="4" y1="2.5" x2="13" y2="13.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F0D060" />
                        <stop offset="100%" stopColor="#C9A84C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
