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
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import GroundForceLink from '@/components/ui/GroundForceLink'

interface FootplateFeaturesProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const FootplateFeatures = memo(function FootplateFeatures({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: FootplateFeaturesProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.h2
            id="features-heading"
            variants={fadeUp}
            className="font-display text-4xl font-extrabold uppercase tracking-[0.05em] text-white lg:text-5xl"
            style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', transform: 'translateZ(0)' }}
          >
            Technical Specifications
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg text-white/70 leading-relaxed"
          >
            Patent-pending design engineered for elite performance
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          style={{ marginBottom: 'clamp(5rem, 10vw, 8rem)' }}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Feature Card 1 */}
          <motion.div
            variants={fadeUp}
            style={{ transform: 'translateZ(0)' }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -8, 
              scale: 1.03,
              transition: { type: "spring", stiffness: 160, damping: 20 }
            }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden will-change-transform"
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
            variants={fadeUp}
            style={{ transform: 'translateZ(0)' }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -8, 
              scale: 1.03,
              transition: { type: "spring", stiffness: 160, damping: 20 }
            }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden will-change-transform"
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
            variants={fadeUp}
            style={{ transform: 'translateZ(0)' }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -8, 
              scale: 1.03,
              transition: { type: "spring", stiffness: 160, damping: 20 }
            }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden will-change-transform"
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
        </motion.div>

        {/* Technical Specs Link (Optional) */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <GroundForceLink href="/specifications">
            View Full Specifications →
          </GroundForceLink>
        </motion.div>
      </div>
    </section>
  )
})

export default FootplateFeatures
