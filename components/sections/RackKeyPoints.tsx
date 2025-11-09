'use client'

import React, { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { z } from 'zod'
import { Ruler, Shield, Zap, Award } from 'lucide-react'

// ============================================================================
// Schema Validation
// ============================================================================

const KeyPointSchema = z.object({
  icon: z.enum(['ruler', 'shield', 'zap', 'award']),
  headline: z.string(),
  description: z.string(),
})

const RackKeyPointsPropsSchema = z.object({
  sectionTitle: z.string().default('ENGINEERED FOR EXCELLENCE'),
  sectionSubtitle: z.string().default('Four pillars of biomechanical superiority'),
  keyPoints: z.array(KeyPointSchema).default([
    {
      icon: 'ruler',
      headline: 'Precision Engineering',
      description: 'CNC-machined 6061-T6 aluminum with tolerances within 0.001" for consistent biomechanical alignment.',
    },
    {
      icon: 'shield',
      headline: 'Built to Last',
      description: 'Type II anodized finish and commercial-grade construction. Rated for 500+ lbs and lifetime durability.',
    },
    {
      icon: 'zap',
      headline: 'Universal Compatibility',
      description: 'Fits all major rack brands. Quick-mount system installs in 5 minutes without permanent modifications.',
    },
    {
      icon: 'award',
      headline: 'Performance Tested',
      description: 'Validated by elite athletes and biomechanics labs. Optimized for glute-ham raises and posterior chain work.',
    },
  ]),
  className: z.string().optional(),
})

type RackKeyPointsProps = z.infer<typeof RackKeyPointsPropsSchema>

// ============================================================================
// Animation Constants
// ============================================================================

const ANIMATION_CONSTANTS = {
  EASE_ATHLETIC: [0.43, 0.13, 0.23, 0.96],
  EASE_POWER: [0.77, 0, 0.175, 1],
  DURATION_FAST: 0.3,
  DURATION_MEDIUM: 0.6,
  STAGGER: 0.15,
} as const

// ============================================================================
// Icon Mapping
// ============================================================================

const ICON_MAP = {
  ruler: Ruler,
  shield: Shield,
  zap: Zap,
  award: Award,
} as const

// ============================================================================
// Component
// ============================================================================

const RackKeyPoints = memo<Partial<RackKeyPointsProps>>((props) => {
  const validatedProps = RackKeyPointsPropsSchema.parse(props)
  const { sectionTitle, sectionSubtitle, keyPoints, className = '' } = validatedProps
  const shouldReduceMotion = useReducedMotion()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATION_CONSTANTS.STAGGER,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
        ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
      },
    },
  }

  const cardHoverVariants = {
    initial: {
      y: 0,
      boxShadow: '0 0 0 0 rgba(220, 38, 38, 0)',
    },
    hover: {
      y: shouldReduceMotion ? 0 : -8,
      boxShadow: '0 20px 40px -10px rgba(220, 38, 38, 0.3)',
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
        ease: ANIMATION_CONSTANTS.EASE_POWER,
      },
    },
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.1,
      rotate: shouldReduceMotion ? 0 : 5,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
        ease: ANIMATION_CONSTANTS.EASE_POWER,
      },
    },
  }

  return (
    <section
      className={`py-24 lg:py-32 bg-[#0A0A0A] ${className}`}
      aria-labelledby="key-points-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
            ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
          }}
        >
          <h2
            id="key-points-title"
            className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-red-600 mb-4 font-inter"
          >
            {sectionTitle}
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-montserrat">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Key Points Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {keyPoints.map((point, index) => {
            const IconComponent = ICON_MAP[point.icon]
            
            return (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="h-full bg-[#111111] border border-red-600/20 rounded-lg p-6 lg:p-8 transition-colors duration-300 hover:border-red-600/40"
                >
                  {/* Icon Container */}
                  <motion.div
                    variants={iconVariants}
                    className="w-12 h-12 mb-6 bg-red-600/10 rounded-lg flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <IconComponent className="h-6 w-6 text-red-600" strokeWidth={1.5} />
                  </motion.div>

                  {/* Headline */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 font-montserrat">
                    {point.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-inter">
                    {point.description}
                  </p>

                  {/* Hover Accent Line */}
                  {!shouldReduceMotion && (
                    <motion.div
                      className="h-1 bg-red-600 mt-6 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{
                        duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
                        delay: index * ANIMATION_CONSTANTS.STAGGER + 0.5,
                        ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
                      }}
                    />
                  )}
                </motion.div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Bottom Accent - Subtle depth indicator */}
        <motion.div
          className="mt-16 lg:mt-20 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
            delay: 0.8,
            ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
})

RackKeyPoints.displayName = 'RackKeyPoints'

export default RackKeyPoints
export type { RackKeyPointsProps }