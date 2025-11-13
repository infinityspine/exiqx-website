/**
 * FootplateFeatures Component
 * 
 * Purpose: Showcase technical specifications and key features
 * of the rack-mounted footplate product.
 * 
 * Features:
 * - Responsive grid layout for features
 * - Accessible semantic HTML
 * - ExIQx dark design system
 * - Production-ready placeholder structure
 * 
 * TODO: Add actual feature cards with icons and detailed specs
 */

'use client'

import { memo } from 'react'
import { motion, useReducedMotion, useTransform } from 'framer-motion'

interface FootplateFeaturesProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
  textBlur?: any
}

const FootplateFeatures = memo(function FootplateFeatures({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion,
  textBlur
}: FootplateFeaturesProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  // Individual card parallax transforms
  const card1Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.2, 0.4], [80, -20])
    : undefined
  const card2Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.2, 0.4], [100, -30])
    : undefined
  const card3Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.2, 0.4], [120, -40])
    : undefined

  return (
    <section
      id="features"
      className="relative min-h-screen bg-[#050505] px-6 py-20 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          style={textBlur ? { filter: `blur(${textBlur}px)` } : undefined}
        >
          <h2
            id="features-heading"
            className="font-display text-4xl font-extrabold uppercase tracking-[0.05em] text-white lg:text-5xl"
          >
            Technical Specifications
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Patent-pending design engineered for elite performance
          </p>
        </motion.div>

        {/* Feature Grid Placeholder */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <motion.div
            style={{ y: card1Y, transformStyle: "preserve-3d" }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              rotateX: 5,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            <motion.div 
              className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-900/20 border border-red-900/40 backdrop-blur-sm"
              animate={shouldReduceMotion ? {} : { 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="h-7 w-7 rounded bg-red-500" aria-hidden="true" />
              <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" aria-hidden="true" />
            </motion.div>
            <h3 className="relative mb-2 font-display text-xl font-bold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-red-400">
              Authentic Ground-Force Mechanics
            </h3>
            <p className="relative text-white/60 leading-relaxed">
              Routes force through the plantar surface—mirroring the closed-chain vector of sprinting and jumping
            </p>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            style={{ y: card2Y, transformStyle: "preserve-3d" }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              rotateX: 5,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            <motion.div 
              className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-900/20 border border-red-900/40 backdrop-blur-sm"
              animate={shouldReduceMotion ? {} : { 
                y: [0, -10, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className="h-7 w-7 rounded bg-red-500" aria-hidden="true" />
              <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" aria-hidden="true" />
            </motion.div>
            <h3 className="relative mb-2 font-display text-xl font-bold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-red-400">
              Precision-Engineered
            </h3>
            <p className="relative text-white/60 leading-relaxed">
              Hybrid aluminum and steel construction. CNC-machined to aerospace tolerances. Made in the USA.
            </p>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            style={{ y: card3Y, transformStyle: "preserve-3d" }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              rotateX: -5,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            <motion.div 
              className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-900/20 border border-red-900/40 backdrop-blur-sm"
              animate={shouldReduceMotion ? {} : { 
                y: [0, -10, 0],
                rotate: [0, 3, -3, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="h-7 w-7 rounded bg-red-500" aria-hidden="true" />
              <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" aria-hidden="true" />
            </motion.div>
            <h3 className="relative mb-2 font-display text-xl font-bold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-red-400">
              Adjustable 10° to 70°
            </h3>
            <p className="relative text-white/60 leading-relaxed">
              User-tuned plantarflexion angles for every athlete, training objective, and rehabilitation phase
            </p>
          </motion.div>
        </div>

        {/* Technical Specs Link (Optional) */}
        <div className="mt-16 text-center">
          <motion.a
            href="/specifications"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View Full Specifications →
          </motion.a>
        </div>
      </div>
    </section>
  )
})

export default FootplateFeatures
