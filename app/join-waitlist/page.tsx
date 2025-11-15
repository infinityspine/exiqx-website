'use client'

import { useState } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import { Mail, Zap, Clock, Check } from 'lucide-react'

// Animated gradient orb component
const AnimatedGradientOrb = ({ 
  className = '', 
  delay = 0,
  shouldReduceMotion = false,
}: { 
  className?: string
  delay?: number
  shouldReduceMotion?: boolean
}) => {
  if (shouldReduceMotion) {
    return <div className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl opacity-30`} style={{ transform: 'translateZ(0)' }} aria-hidden="true" />
  }
  
  return (
    <motion.div
      className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl will-change-[opacity]`}
      style={{ transform: 'translateZ(0)' }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3] 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay || 0
      }}
      aria-hidden="true"
    />
  )
}

export default function JoinWaitlistPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const reducedMotion = useReducedMotion()
  const shouldReduceMotion = !!reducedMotion
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'website' })
      })

      if (!response.ok) throw new Error('Failed to join waitlist')

      setSuccess(true)
      setEmail('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{ scaleX }}
        aria-hidden="true"
      >
        <div className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 blur-sm opacity-50" />
      </motion.div>

      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(12rem, 20vw, 16rem)',
            paddingBottom: 'clamp(6rem, 12vw, 10rem)',
            transform: 'translateZ(0)'
          }}
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-0 right-1/4 w-96 h-96" 
            delay={0}
            shouldReduceMotion={shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-0 left-1/4 w-80 h-80" 
            delay={2}
            shouldReduceMotion={shouldReduceMotion}
          />

          <div className="mx-auto max-w-6xl px-8 text-center">
            {success ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-32"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/20 border-2 border-red-500 mb-6">
                  <Check className="w-12 h-12 text-red-500" strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">YOU'RE ON THE LIST!</h2>
                <p className="text-gray-400 mt-2">We'll notify you when early access opens.</p>
              </motion.div>
            ) : (
              <>
                {/* Headline Block */}
                <div className="mb-20 space-y-3">
                  <motion.h1 
                    variants={fadeUp} 
                    className="text-5xl sm:text-6xl font-extrabold tracking-tight uppercase text-white mb-0 leading-tight"
                  >
                    Early Access
                  </motion.h1>
                  <motion.h1 
                    variants={fadeUp} 
                    className="text-5xl sm:text-6xl font-extrabold tracking-tight uppercase text-white leading-tight"
                  >
                    Waitlist
                  </motion.h1>
                </div>

                <motion.p
                  variants={fadeUp}
                  className="text-xl font-medium text-red-500 mt-8"
                >
                  Limited Production Release
                </motion.p>
                <div className="flex justify-center mt-6 mb-12">
                  <motion.p
                    variants={fadeUp}
                    className="text-lg text-gray-400 max-w-3xl leading-relaxed text-center"
                  >
                    Be among the first to experience elite biomechanical training equipment. 
                    Join the waitlist for exclusive early access to our rack-mounted footplate, 
                    GHD retrofit, and freestanding systems.
                  </motion.p>
                </div>

                {/* Benefits */}
                <motion.div
                  variants={staggerChildren}
                  className="grid sm:grid-cols-3 gap-12 mt-24 mb-16 max-w-3xl mx-auto"
                >
                  <motion.div
                    variants={fadeUp}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-4 p-5 rounded-2xl bg-red-500/20 border border-red-500/20">
                      <Zap className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Early Access</h3>
                    <p className="text-sm text-gray-400">First priority on limited production runs</p>
                  </motion.div>
                  <motion.div
                    variants={fadeUp}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-4 p-5 rounded-2xl bg-red-500/20 border border-red-500/20">
                      <Mail className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Exclusive Updates</h3>
                    <p className="text-sm text-gray-400">Get notified about new products and features</p>
                  </motion.div>
                  <motion.div
                    variants={fadeUp}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-4 p-5 rounded-2xl bg-red-500/20 border border-red-500/20">
                      <Clock className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">No Commitment</h3>
                    <p className="text-sm text-gray-400">Join free, opt out anytime</p>
                  </motion.div>
                </motion.div>

                {/* Waitlist Form */}
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 mt-32">
                  <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-lg">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading}
                      className="rounded-xl px-6 py-5 text-lg bg-white/10 border border-white/20 w-full text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="relative w-full rounded-xl px-6 py-5 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-red-500/30 hover:shadow-red-500/40"
                    >
                      {loading ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </form>
                  {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                </motion.div>
              </>
            )}
          </div>
        </motion.section>
      </main>
    </>
  )
}
