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
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative' }}
        >
          {/* Fixed botanical illustration — persists behind every section */}
          <div
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              zIndex: -1,
              backgroundImage: "url('/wedding-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
            }}
          />
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
      )}
    </>
  )
}
