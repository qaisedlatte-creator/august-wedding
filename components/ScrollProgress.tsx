'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 28 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] origin-left"
      style={{
        scaleX,
        height: '2px',
        background: 'linear-gradient(90deg, #5C0E0E 0%, #C9A84C 40%, #F0D060 60%, #C9A84C 100%)',
      }}
    />
  )
}
