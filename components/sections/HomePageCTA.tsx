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

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import { useMagnetic } from '@/hooks/useMagnetic'

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
  const primaryMagneticRef = useMagnetic<HTMLAnchorElement>(shouldReduceMotion ? 0 : 0.1)
  const secondaryMagneticRef = useMagnetic<HTMLAnchorElement>(shouldReduceMotion ? 0 : 0.1)

  return (
    <section
      id="cta"
      className="relative bg-black pt-[clamp(4rem,8vw,6rem)]"
      aria-labelledby="cta-heading"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
        {/* Section Header */}
        <motion.div 
          className="mb-[clamp(2rem,5vw,4rem)] text-center flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.h2
            id="cta-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{ transform: 'translateZ(0)' }}
          >
            PRECISION-ENGINEERED FOR ELITE FACILITIES.
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-prose mx-auto text-center"
          >
            Commercial-grade plantarflexion training for professional programs, PT clinics, and performance centers.
          </motion.p>
        </motion.div>

        {/* Value Propositions */}
        <motion.div 
          className="mb-12 grid gap-6 sm:grid-cols-3"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Benefit 1 */}
          <motion.div
            variants={fadeUp}
            style={{ transform: 'translateZ(0)' }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden will-change-transform"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            <div className="relative mb-2 text-2xl font-bold text-accent transition-colors duration-300 group-hover:text-red-400">51%</div>
            <p className="relative text-sm text-white/70 leading-relaxed">
              Hamstring injury reduction
            </p>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            variants={fadeUp}
            style={{ transform: 'translateZ(0)' }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden will-change-transform"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            <div className="relative mb-2 text-2xl font-bold text-accent transition-colors duration-300 group-hover:text-red-400">Patent-Pending</div>
            <p className="relative text-sm text-white/70 leading-relaxed">
              Proprietary technology
            </p>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            variants={fadeUp}
            style={{ transform: 'translateZ(0)' }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden will-change-transform"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            <div className="relative mb-2 text-2xl font-bold text-accent transition-colors duration-300 group-hover:text-red-400">Lifetime</div>
            <p className="relative text-sm text-white/70 leading-relaxed">
              Component warranty
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          {/* Primary CTA with magnetic hover */}
          <motion.a
            ref={primaryMagneticRef}
            href="/request-demo"
            variants={fadeUp}
            whileHover={shouldReduceMotion ? {} : { 
              scale: 1.05, 
              y: -3,
              transition: { type: "spring", stiffness: 200, damping: 20 }
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-block rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:from-red-500 hover:to-red-600 hover:scale-[1.02] shadow-2xl shadow-red-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black will-change-transform"
            style={{ transform: 'translateZ(0)' }}
          >
            Pre-Order
          </motion.a>

          {/* Secondary CTA with magnetic hover */}
          <motion.a
            ref={secondaryMagneticRef}
            href="/early-access"
            variants={fadeUp}
            whileHover={shouldReduceMotion ? {} : { 
              scale: 1.05, 
              y: -3,
              transition: { type: "spring", stiffness: 200, damping: 20 }
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-block rounded-xl border border-white/20 bg-transparent px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black will-change-transform"
            style={{ transform: 'translateZ(0)' }}
          >
            View Specs
          </motion.a>
        </motion.div>

        {/* Trust Signals */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 leading-relaxed">
            PRE-ORDER NOW • LIMITED FIRST PRODUCTION RUN
          </p>
        </div>

      </div>
    </section>
  )
})

export default CTASection
