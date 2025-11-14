'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Ruler, Zap, Award, Shield } from 'lucide-react'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import { springMedium } from '@/lib/motion'

// ============================================================================
// Types & Data
// ============================================================================

interface Feature {
  title: string
  body: string
  icon: 'ruler' | 'zap' | 'award' | 'shield'
}

interface EngineeredForExcellenceSectionProps {
  sectionTitle?: string
  sectionSubtitle?: string
  features: Feature[]
}

const iconMap = {
  ruler: Ruler,
  zap: Zap,
  award: Award,
  shield: Shield,
}

// ============================================================================
// Animation Variants
// ============================================================================

// ============================================================================
// Component
// ============================================================================

export function EngineeredForExcellenceSection({
  sectionTitle = 'Engineered for Excellence',
  sectionSubtitle = 'Four pillars of biomechanical superiority',
  features,
}: EngineeredForExcellenceSectionProps) {
  const shouldReduceMotion = !!useReducedMotion()

  return (
    <motion.section
      className="relative w-full bg-gradient-to-b from-black/80 via-black to-black/95 py-24 md:py-32 shadow-[0_25px_50px_rgba(0,0,0,0.65)] will-change-transform"
      style={{ transform: 'translateZ(0)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerChildren}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          className="w-full flex flex-col items-center text-center mb-12 md:mb-16"
          variants={staggerChildren}
        >
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50 mb-4"
            variants={fadeUp}
          >
            {sectionTitle}
          </motion.p>
          <motion.h2
            className="text-white font-extrabold text-4xl md:text-5xl uppercase tracking-tight font-montserrat"
            variants={fadeUp}
          >
            {sectionSubtitle}
          </motion.h2>
        </motion.div>

        {/* Feature cards */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 items-stretch"
          variants={staggerChildren}
        >
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon]

            return (
              <motion.article
                key={feature.title}
                className="group flex h-full flex-col justify-between rounded-2xl border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-sm px-6 py-8 text-left transition-all duration-300 cursor-default will-change-transform hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10"
                variants={fadeUp}
                style={{ transform: 'translateZ(0)' }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        scale: 1.02,
                        transition: springMedium,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.98,
                        transition: { duration: 0.15 },
                      }
                }
              >
                <div>
                  {/* Icon */}
                  <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-900/20 border border-red-900/40 backdrop-blur-sm">
                    <IconComponent className="h-7 w-7 text-red-500" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-extrabold leading-snug text-white tracking-tight uppercase font-montserrat">
                    {feature.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-inter">
                    {feature.body}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default EngineeredForExcellenceSection
