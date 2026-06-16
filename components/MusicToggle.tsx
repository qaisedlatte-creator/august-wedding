'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Volume2 } from 'lucide-react'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Audio file not present — silently ignore
      })
    }
    setPlaying(!playing)
  }

  return (
    <>
      {/*
        Primary source: drop your own MP3 at public/music/nasheed.mp3
        Fallback: free public-domain nasheed "Tala al-Badru Alayna" via Archive.org
      */}
      <audio ref={audioRef} loop preload="none">
        <source src="/music/nasheed.mp3" type="audio/mpeg" />
        <source
          src="https://archive.org/download/TalaAlBadruAlaynaIllu/Tala%20Al%20Badru%20Alayna%20Illu.mp3"
          type="audio/mpeg"
        />
        <source
          src="https://archive.org/download/MuhammedMukhtar/01TalaAlBadrAlaynaIllu.mp3"
          type="audio/mpeg"
        />
      </audio>

      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={toggle}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)',
              boxShadow: '0 4px 24px rgba(201, 168, 76, 0.45)',
            }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
            aria-label={playing ? 'Pause music' : 'Play background music'}
          >
            <AnimatePresence mode="wait">
              {playing ? (
                <motion.div
                  key="playing"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
                  >
                    <Volume2 size={18} color="#0F1F16" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="paused"
                  initial={{ opacity: 0, rotate: 10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Music size={18} color="#0F1F16" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
