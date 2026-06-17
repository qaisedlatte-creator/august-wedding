'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from './LoadingScreen'
import ScrollProgress from './ScrollProgress'
import Hero from './Hero'
import ParentsSection from './ParentsSection'
import WeddingDetails from './WeddingDetails'
import Countdown from './Countdown'
import LoveStory from './LoveStory'
import EventInfo from './EventInfo'
import Location from './Location'
import Blessings from './Blessings'
import Footer from './Footer'
import MusicToggle from './MusicToggle'
import FloatingButtons from './FloatingButtons'

export default function ClientWrapper() {
  const [isLoaded, setIsLoaded] = useState(false)
  const onComplete = useCallback(() => setIsLoaded(true), [])

  return (
    <>
      <LoadingScreen onComplete={onComplete} />

      {isLoaded && (
        <>
          {/*
           * Fixed botanical background — must be a SIBLING of the content motion.div,
           * NOT a child. CSS spec: position:fixed inside any ancestor with filter/opacity/
           * transform creates a new containing block (no longer viewport-relative).
           * Framer Motion's blur animation sets filter:blur(Xpx) which triggers this bug,
           * causing the image to stretch across the full document height on mobile.
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
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </motion.div>

          {/* Content layer */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrollProgress />
            <main>
              <Hero />
              <ParentsSection />
              <WeddingDetails />
              <Countdown />
              <LoveStory />
              <EventInfo />
              <Location />
              <Blessings />
              <Footer />
            </main>
            <MusicToggle />
            <FloatingButtons />
          </motion.div>
        </>
      )}
    </>
  )
}
