'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from './LoadingScreen'
import ScrollProgress from './ScrollProgress'
import Hero from './Hero'
import ParentsSection from './ParentsSection'
import WeddingDetails from './WeddingDetails'
import LoveStory from './LoveStory'
import EventInfo from './EventInfo'
import Location from './Location'
import Countdown from './Countdown'
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
      )}
    </>
  )
}
