'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Phase = 'sealed' | 'opening' | 'done'
interface Props { onComplete: () => void }

function WaxSeal() {
  return (
    <div
      style={{
        width: 'clamp(72px, 18vw, 92px)',
        height: 'clamp(72px, 18vw, 92px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 38% 32%, #7A1515, #2D0505)',
        border: '1.5px solid rgba(201,168,76,0.45)',
        boxShadow:
          '0 4px 18px rgba(45,5,5,0.45), 0 1px 6px rgba(45,5,5,0.3), inset 0 2px 6px rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
      }}
    >
      {/* Outer gold ring */}
      <div style={{
        position: 'absolute',
        inset: 4,
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.25)',
      }} />
      {/* Monogram */}
      <span
        style={{
          fontFamily: 'var(--font-great-vibes)',
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          color: 'rgba(201,168,76,0.88)',
          lineHeight: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        U &amp; N
      </span>
    </div>
  )
}

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<Phase>('sealed')

  const handleOpen = () => {
    if (phase !== 'sealed') return
    setPhase('opening')
    setTimeout(() => {
      setPhase('done')
      setTimeout(onComplete, 650)
    }, 900)
  }

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center px-6"
          style={{ backgroundColor: '#FAFAFA' }}
        >
          {/* ── Envelope ── */}
          <motion.div
            initial={{ y: 36, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            onClick={handleOpen}
            className="cursor-pointer relative select-none"
            style={{ perspective: '1200px', perspectiveOrigin: '50% 0%' }}
          >
            {/* Envelope body */}
            <div
              className="relative overflow-visible"
              style={{
                width: 'clamp(280px, 85vw, 400px)',
                aspectRatio: '3 / 2',
                background: '#F5EDE6',
                boxShadow:
                  '0 2px 8px rgba(45,5,5,0.07), 0 8px 24px rgba(45,5,5,0.09), 0 20px 55px rgba(45,5,5,0.11), 0 40px 70px rgba(45,5,5,0.07)',
              }}
            >
              {/* ── Envelope back: fold triangles + botanicals ── */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 380 253"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left flap */}
                <path d="M0,0 L0,253 L190,126.5 Z" fill="#EFE3D8" stroke="rgba(150,115,90,0.28)" strokeWidth="0.5"/>
                {/* Right flap */}
                <path d="M380,0 L380,253 L190,126.5 Z" fill="#F0E4D9" stroke="rgba(150,115,90,0.28)" strokeWidth="0.5"/>
                {/* Bottom flap */}
                <path d="M0,253 L380,253 L190,126.5 Z" fill="#EDE0D5" stroke="rgba(150,115,90,0.28)" strokeWidth="0.5"/>
                {/* Fold seam lines */}
                <line x1="0"   y1="0"   x2="190" y2="126.5" stroke="rgba(140,105,82,0.28)" strokeWidth="0.5"/>
                <line x1="380" y1="0"   x2="190" y2="126.5" stroke="rgba(140,105,82,0.28)" strokeWidth="0.5"/>
                <line x1="0"   y1="253" x2="190" y2="126.5" stroke="rgba(140,105,82,0.28)" strokeWidth="0.5"/>
                <line x1="380" y1="253" x2="190" y2="126.5" stroke="rgba(140,105,82,0.28)" strokeWidth="0.5"/>
                {/* Botanical left */}
                <path d="M52,222 C63,193 70,158 73,124 C76,94 78,70 80,50" fill="none" stroke="rgba(110,72,54,0.13)" strokeWidth="1.3"/>
                <path d="M64,196 C54,186 52,172 58,166" fill="none" stroke="rgba(110,72,54,0.11)" strokeWidth="0.9"/>
                <path d="M64,196 C74,186 76,172 70,166" fill="none" stroke="rgba(110,72,54,0.11)" strokeWidth="0.9"/>
                <path d="M70,163 C60,153 58,139 64,133" fill="none" stroke="rgba(110,72,54,0.1)"  strokeWidth="0.9"/>
                <path d="M70,163 C80,153 82,139 76,133" fill="none" stroke="rgba(110,72,54,0.1)"  strokeWidth="0.9"/>
                <path d="M75,128 C65,119 63,106 69,100" fill="none" stroke="rgba(110,72,54,0.09)" strokeWidth="0.9"/>
                <path d="M75,128 C85,119 87,106 81,100" fill="none" stroke="rgba(110,72,54,0.09)" strokeWidth="0.9"/>
                {/* Botanical right (mirror) */}
                <path d="M328,222 C317,193 310,158 307,124 C304,94 302,70 300,50" fill="none" stroke="rgba(110,72,54,0.13)" strokeWidth="1.3"/>
                <path d="M316,196 C326,186 328,172 322,166" fill="none" stroke="rgba(110,72,54,0.11)" strokeWidth="0.9"/>
                <path d="M316,196 C306,186 304,172 310,166" fill="none" stroke="rgba(110,72,54,0.11)" strokeWidth="0.9"/>
                <path d="M310,163 C320,153 322,139 316,133" fill="none" stroke="rgba(110,72,54,0.1)"  strokeWidth="0.9"/>
                <path d="M310,163 C300,153 298,139 304,133" fill="none" stroke="rgba(110,72,54,0.1)"  strokeWidth="0.9"/>
                <path d="M305,128 C315,119 317,106 311,100" fill="none" stroke="rgba(110,72,54,0.09)" strokeWidth="0.9"/>
                <path d="M305,128 C295,119 293,106 299,100" fill="none" stroke="rgba(110,72,54,0.09)" strokeWidth="0.9"/>
                {/* Very thin gold line around inner area */}
                <rect x="12" y="10" width="356" height="233" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="0.7"/>
              </svg>

              {/* ── Wax seal sits on top of flap (bridges flap + body like a real wax seal) ── */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 30 }}
              >
                <WaxSeal />
              </div>

              {/* ── Crimson top flap (z: 20, opens on click) ── */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '100%',
                  transformOrigin: 'top center',
                  transformStyle: 'preserve-3d',
                  zIndex: 20,
                }}
                animate={{ rotateX: phase === 'sealed' ? 0 : -168 }}
                transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Flap body - triangle pointing down */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
                    background: 'linear-gradient(160deg, #6B1111 0%, #4A0A0A 100%)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                />
                {/* Flap decorative gold lines */}
                <svg
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
                    backfaceVisibility: 'hidden',
                  }}
                  viewBox="0 0 380 253"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Thin edge lines on flap */}
                  <line x1="4" y1="2" x2="190" y2="122" stroke="rgba(201,168,76,0.18)" strokeWidth="0.6"/>
                  <line x1="376" y1="2" x2="190" y2="122" stroke="rgba(201,168,76,0.18)" strokeWidth="0.6"/>
                  {/* Small diamond ornament center of flap */}
                  <path d="M190,45 L198,55 L190,65 L182,55 Z" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8"/>
                  <circle cx="190" cy="55" r="2" fill="rgba(201,168,76,0.22)"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* ── "Please Open" CTA ── */}
          <AnimatePresence>
            {phase === 'sealed' && (
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                onClick={handleOpen}
                className="mt-10 flex flex-col items-center gap-3 cursor-pointer"
                style={{ background: 'none', border: 'none', padding: 0 }}
                aria-label="Open invitation"
              >
                {/* Animated chevron */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M1 1L10 10L19 1" stroke="rgba(45,5,5,0.28)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </motion.div>
                <p
                  className="font-inter tracking-[0.42em] uppercase"
                  style={{ fontSize: 'clamp(0.6rem, 2vw, 0.72rem)', color: 'rgba(45,5,5,0.45)' }}
                >
                  Please Open
                </p>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
