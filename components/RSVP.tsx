'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeUp, scaleIn } from '@/lib/animations'
import IslamicPattern from './IslamicPattern'
import { Heart, Send, Check, ChevronDown } from 'lucide-react'

interface FormState {
  name: string
  guests: string
  message: string
}

interface RSVPEntry extends FormState {
  timestamp: string
}

const CORNER_POSITIONS = [
  'top-3 left-3 border-t border-l',
  'top-3 right-3 border-t border-r',
  'bottom-3 left-3 border-b border-l',
  'bottom-3 right-3 border-b border-r',
] as const

export default function RSVP() {
  const [form, setForm] = useState<FormState>({ name: '', guests: '1', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const field = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(f => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors(er => ({ ...er, [key]: undefined }))
  }

  const validate = (): boolean => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    const entry: RSVPEntry = { ...form, timestamp: new Date().toISOString() }
    try {
      const prev: RSVPEntry[] = JSON.parse(localStorage.getItem('wedding_rsvp') || '[]')
      localStorage.setItem('wedding_rsvp', JSON.stringify([...prev, entry]))
    } catch {
      // localStorage unavailable — continue silently
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="rsvp"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: '#FFF5F0' }}
    >
      <IslamicPattern opacity={0.038} color="#C9A84C" id="rsvp-pattern" />

      {/* Warm edge tint */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 50%, rgba(139,26,26,0.035) 100%)',
      }} />

      <div className="relative z-10 max-w-xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center mb-12">
          <motion.div variants={fadeUp} className="flex justify-center mb-5">
            <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <Heart size={28} color="#C9A84C" fill="rgba(201,168,76,0.18)" />
            </motion.div>
          </motion.div>
          <motion.p variants={fadeUp} className="font-cormorant tracking-[0.3em] text-xs uppercase mb-3" style={{ color: 'rgba(74,10,10,0.55)' }}>
            Will You Join Us?
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-cormorant font-light" style={{ fontSize: 'clamp(2.4rem, 6.5vw, 4rem)', color: '#2D0505' }}>
            RSVP
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }} />
            <span style={{ color: '#C9A84C', fontSize: '8px' }}>✦</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }} />
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            /* ── Success State ── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative py-16 px-8 text-center"
              style={{
                background: 'rgba(255,248,245,0.82)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(201,168,76,0.28)',
                boxShadow: '0 12px 48px rgba(45,5,5,0.08)',
              }}
            >
              {CORNER_POSITIONS.map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-5 h-5`} style={{ borderColor: 'rgba(201,168,76,0.4)' }} />
              ))}

              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.25, duration: 0.55, type: 'spring', bounce: 0.45 }}
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-7"
                style={{ background: 'linear-gradient(135deg, #5C0E0E 0%, #8B1A1A 100%)', boxShadow: '0 8px 30px rgba(92,14,14,0.4)' }}
              >
                <Check size={28} color="#C9A84C" strokeWidth={2.5} />
              </motion.div>

              <h3 className="font-cormorant font-semibold mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#2D0505' }}>
                Jazakallahu Khairan
              </h3>
              <p className="font-playfair italic mb-3" style={{ fontSize: '1rem', color: '#5C0E0E' }}>
                Dear {form.name},
              </p>
              <p className="font-cormorant leading-relaxed" style={{ fontSize: '1.1rem', color: 'rgba(74,10,10,0.7)' }}>
                We are overjoyed that you'll be celebrating this blessed occasion with us. Your presence is our greatest gift.
              </p>
              <div className="mt-9 font-vibes" style={{ fontSize: '2.5rem', color: '#C9A84C' }}>
                Unais &amp; Nasma
              </div>
            </motion.div>
          ) : (
            /* ── Form ── */
            <motion.form
              key="form"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
              noValidate
              className="relative p-8 md:p-10"
              style={{
                background: 'rgba(255,248,245,0.78)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(201,168,76,0.24)',
                boxShadow: '0 12px 48px rgba(45,5,5,0.08)',
              }}
            >
              {CORNER_POSITIONS.map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-5 h-5`} style={{ borderColor: 'rgba(201,168,76,0.4)' }} />
              ))}

              <div className="space-y-7">
                {/* Name */}
                <div>
                  <label htmlFor="rsvp-name" className="block font-cormorant tracking-[0.22em] text-xs uppercase mb-2.5" style={{ color: 'rgba(74,10,10,0.65)' }}>
                    Your Name
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    value={form.name}
                    onChange={field('name')}
                    placeholder="Enter your full name"
                    className="wedding-input w-full px-4 py-3.5"
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-cormorant text-sm" style={{ color: '#C9A84C' }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="rsvp-guests" className="block font-cormorant tracking-[0.22em] text-xs uppercase mb-2.5" style={{ color: 'rgba(74,10,10,0.65)' }}>
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select
                      id="rsvp-guests"
                      value={form.guests}
                      onChange={field('guests')}
                      className="wedding-input w-full px-4 py-3.5 appearance-none cursor-pointer pr-10"
                      style={{ backgroundColor: 'transparent', color: '#1c1c1c' }}
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                        <option key={n} value={String(n)} style={{ backgroundColor: '#FFF5F0', color: '#1c1c1c' }}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={15} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" color="rgba(201,168,76,0.7)" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="rsvp-message" className="block font-cormorant tracking-[0.22em] text-xs uppercase mb-2.5" style={{ color: 'rgba(74,10,10,0.65)' }}>
                    Blessings &amp; Message{' '}
                    <span className="normal-case tracking-normal" style={{ color: 'rgba(74,10,10,0.38)' }}>(optional)</span>
                  </label>
                  <textarea
                    id="rsvp-message"
                    value={form.message}
                    onChange={field('message')}
                    placeholder="Share your warm wishes for the couple..."
                    rows={4}
                    className="wedding-input w-full px-4 py-3.5 resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 font-cormorant tracking-[0.22em] text-sm uppercase py-4 disabled:opacity-60"
                  style={{
                    background: 'linear-gradient(135deg, #5C0E0E 0%, #2D0505 100%)',
                    color: '#C9A84C',
                    border: '1px solid rgba(201,168,76,0.28)',
                  }}
                  whileHover={!loading ? { scale: 1.01, boxShadow: '0 10px 36px rgba(45,5,5,0.32)' } : {}}
                  whileTap={!loading ? { scale: 0.99 } : {}}
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 rounded-full border-2"
                      style={{ borderColor: 'rgba(201,168,76,0.38)', borderTopColor: '#C9A84C' }}
                    />
                  ) : (
                    <><Send size={15} />Confirm Attendance</>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
