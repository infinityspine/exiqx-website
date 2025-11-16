'use client'

import { useState } from 'react'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import { Check } from 'lucide-react'

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

export default function EarlyAccessPage() {
  const reducedMotion = useReducedMotion()
  const shouldReduceMotion = !!reducedMotion
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    facilityName: '',
    facilityType: '',
    additionalInfo: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request')
      }

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        facilityName: '',
        facilityType: '',
        additionalInfo: '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Elite scroll progress indicator with glow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{ scaleX }}
        aria-hidden="true"
      >
        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-sm opacity-50" />
      </motion.div>

      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(8rem, 12vw, 10rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            transform: 'translateZ(0)'
          }}
        >
          <div className="relative overflow-hidden">
            <AnimatedGradientOrb 
              className="top-0 right-1/4 w-96 h-96" 
              delay={0}
              shouldReduceMotion={!!shouldReduceMotion}
            />
            <AnimatedGradientOrb 
              className="bottom-0 left-1/4 w-80 h-80 bg-blue-500/10" 
              delay={2}
              shouldReduceMotion={!!shouldReduceMotion}
            />

            <div className="mx-auto max-w-4xl px-6">
              <motion.h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-[0.05em] text-white mb-8"
              >
                Early Access Program
              </motion.h1>
              
              <motion.p
                className="text-xl sm:text-2xl text-white/80 font-medium mb-4"
              >
                Limited production slots for D1 programs, PT clinics, professional teams, and elite performance centers.
              </motion.p>
              
              <motion.p
                className="text-lg text-white/70 font-light leading-relaxed"
              >
                Request priority access to our first production run of patent-protected commercial-grade equipment.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Form Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(3rem, 6vw, 5rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            transform: 'translateZ(0)'
          }}
        >
          <div className="relative overflow-hidden">
            <AnimatedGradientOrb 
              className="top-1/4 left-0 w-72 h-72" 
              delay={1}
              shouldReduceMotion={!!shouldReduceMotion}
            />
            <AnimatedGradientOrb 
              className="bottom-0 right-1/3 w-80 h-80 bg-blue-500/10" 
              delay={2.5}
              shouldReduceMotion={!!shouldReduceMotion}
            />

            <div className="mx-auto max-w-2xl px-6">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-red-500" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Request Received
                  </h2>
                  <p className="text-white/70">
                    Our team will contact you regarding limited production availability.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  variants={fadeUp}
                  className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden will-change-transform"
                  style={{ 
                    padding: 'clamp(2.5rem, 5vw, 4rem)',
                    transform: 'translateZ(0)'
                  }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Facility Name */}
                    <div>
                      <label htmlFor="facilityName" className="block text-sm font-medium text-white/80 mb-2">
                        Facility Name
                      </label>
                      <input
                        type="text"
                        id="facilityName"
                        name="facilityName"
                        value={formData.facilityName}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your facility or organization name"
                      />
                    </div>

                    {/* Facility Type */}
                    <div>
                      <label htmlFor="facilityType" className="block text-sm font-medium text-white/80 mb-2">
                        Facility Type
                      </label>
                      <select
                        id="facilityType"
                        name="facilityType"
                        value={formData.facilityType}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select facility type</option>
                        <option value="D1 Program">D1 Program</option>
                        <option value="PT Clinic">PT Clinic</option>
                        <option value="Professional Team">Professional Team</option>
                        <option value="High-Performance Center">High-Performance Center</option>
                        <option value="Private Facility">Private Facility</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-white/80 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                        placeholder="Tell us about your facility, training needs, or any specific requirements..."
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      className="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:from-red-500 hover:to-red-600 shadow-2xl shadow-red-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Submitting...' : 'Request Early Access'}
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>
      </main>
    </>
  )
}

