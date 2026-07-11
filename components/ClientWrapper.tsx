'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from './LoadingScreen'
import Hero from './Hero'
import ParentsSection from './ParentsSection'
import WeddingDetails from './WeddingDetails'
import Countdown from './Countdown'
import LoveStory from './LoveStory'
import Location from './Location'
import Blessings from './Blessings'
import Footer from './Footer'
import MusicToggle from './MusicToggle'
import FloatingButtons from './FloatingButtons'
import PetalOverlay from './PetalOverlay'

export default function ClientWrapper() {
  const [isLoaded, setIsLoaded] = useState(false)
  const onComplete = useCallback(() => setIsLoaded(true), [])

  // Scroll-driven background blur — only active after the invitation is opened
  useEffect(() => {
    if (!isLoaded) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const vh = window.innerHeight
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / vh, 1)
        document.documentElement.style.setProperty('--scroll-blur', `${(progress * 8).toFixed(1)}px`)
        document.documentElement.style.setProperty('--scroll-dim', `${(1 - progress * 0.25).toFixed(3)}`)
        // Petals fade out over the first half of the hero scroll
        document.documentElement.style.setProperty('--petals-opacity', `${Math.max(0, 1 - progress * 2).toFixed(3)}`)
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isLoaded])

  return (
    <>
      <LoadingScreen onComplete={onComplete} />

      {/* Music toggle lives outside the isLoaded gate so it's visible from the cover screen onward */}
      <MusicToggle />

      {isLoaded && (
        <>
          {/*
           * Fixed botanical background — must be a SIBLING of the content motion.div,
           * NOT a child. CSS spec: position:fixed inside any ancestor with filter/opacity/
           * transform creates a new containing block (no longer viewport-relative).
           */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wedding-bg.png"
              alt=""
              aria-hidden="true"
              className="wedding-bg-img"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 12%',
              }}
            />
          </motion.div>

          {/* Rose petals — fixed sibling so filter:blur on content div doesn't break them */}
          <PetalOverlay />

          {/* Content layer */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <main>
              <Hero />
              <ParentsSection />
              <WeddingDetails />
              <Countdown />
              <LoveStory />
<Location />
              <Blessings />
              <Footer />
            </main>
            <FloatingButtons />
          </motion.div>
        </>
      )}
    </>
  )
}
