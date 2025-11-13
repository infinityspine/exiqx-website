/**
 * CTASection Component
 * 
 * Purpose: Final conversion-focused call-to-action section
 * to drive waitlist signups or product inquiries.
 * 
 * Features:
 * - Prominent CTA buttons
 * - Accessible semantic structure
 * - ExIQx dark design system with red accent
 * - Production-ready placeholder layout
 * 
 * TODO: Add actual form integration and conversion tracking
 */

'use client'

import { memo, useState } from 'react'
import { motion, useReducedMotion, useTransform } from 'framer-motion'

interface HomePageCTAProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const CTASection = memo(function CTASection({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: HomePageCTAProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [secondaryMousePosition, setSecondaryMousePosition] = useState({ x: 0, y: 0 })

  // Parallax for benefit cards
  const benefit1Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.8, 1], [40, -20])
    : undefined
  const benefit2Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.8, 1], [50, -25])
    : undefined
  const benefit3Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.8, 1], [60, -30])
    : undefined

  return (
    <section
      id="cta"
      className="relative min-h-screen bg-black px-6 py-20 lg:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2
            id="cta-heading"
            className="font-display text-4xl font-extrabold uppercase tracking-[0.05em] text-white lg:text-6xl"
          >
            Elevate Your Training
          </h2>
          <p className="mt-6 text-xl text-white/80 lg:text-2xl leading-relaxed">
            Join the waitlist for exclusive early access to the{' '}
            <span className="font-semibold text-accent">
              Rack-Mounted Footplate
            </span>
          </p>
        </div>

        {/* Value Propositions */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {/* Benefit 1 */}
          <motion.div
            style={{ y: benefit1Y, transformStyle: "preserve-3d" }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              rotateX: 3,
              rotateY: 3,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            <div className="mb-2 text-2xl font-bold text-accent transition-colors duration-300 group-hover:text-red-400">50%</div>
            <p className="text-sm text-white/70 leading-relaxed">
              Reduction in hamstring injuries
            </p>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group rounded-lg border border-zinc-800/60 bg-zinc-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
          >
            <div className="mb-2 text-2xl font-bold text-accent transition-colors duration-300 group-hover:text-red-400">Patent-Pending</div>
            <p className="text-sm text-white/70 leading-relaxed">
              Proprietary design technology
            </p>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group rounded-lg border border-zinc-800/60 bg-zinc-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
          >
            <div className="mb-2 text-2xl font-bold text-accent transition-colors duration-300 group-hover:text-red-400">Lifetime</div>
            <p className="text-sm text-white/70 leading-relaxed">
              Warranty on all components
            </p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA */}
          <motion.a
            href="#waitlist"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-block rounded-xl bg-accent px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_10px_30px_rgba(220,38,38,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Join Waitlist
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-block rounded-xl border border-zinc-800/60 bg-zinc-950/40 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/90 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Request Demo
          </motion.a>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 leading-relaxed">
            Engineered in Arizona • Made in the USA
          </p>
          <p className="text-xs text-white/40 leading-relaxed">
            Limited initial production run
          </p>
        </div>

        {/* Optional: Email Capture Form Placeholder */}
        <div className="mt-16">
          <form className="mx-auto max-w-md" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-zinc-800/60 bg-zinc-950/40 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-all duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black hover:border-red-900/50"
                aria-label="Email address"
              />
              <motion.button
                type="submit"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_10px_30px_rgba(220,38,38,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Notify Me
              </motion.button>
            </div>
            <p className="mt-2 text-xs text-white/40 leading-relaxed">
              Be the first to know when we launch
            </p>
          </form>
        </div>
      </div>
    </section>
  )
})

export default CTASection
