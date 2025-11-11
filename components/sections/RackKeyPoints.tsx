'use client'

import React, { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { z } from 'zod'
import { Ruler, Zap, Award, Shield } from 'lucide-react'

// ============================================================================
// Schema Validation
// ============================================================================

const KeyPointSchema = z.object({
  icon: z.enum(['ruler', 'zap', 'award', 'shield']).default('shield'),
  headline: z.string(),
  description: z.string(),
})

const RackKeyPointsPropsSchema = z.object({
  sectionTitle: z.string().optional(),
  sectionSubtitle: z.string().optional(),
  keyPoints: z.array(KeyPointSchema).default([
    {
      icon: 'shield' as const,
      headline: 'Elite Performance',
      description: 'Engineered for peak athletic achievement',
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
  DURATION_MEDIUM: 0.6,
  DURATION_FAST: 0.3,
  STAGGER: 0.1,
} as const

// ============================================================================
// Icon Map
// ============================================================================

const iconMap = {
  ruler: Ruler,
  zap: Zap,
  award: Award,
  shield: Shield,
}

// ============================================================================
// Component
// ============================================================================

const RackKeyPoints = memo<Partial<RackKeyPointsProps>>((props) => {
  const validatedProps = RackKeyPointsPropsSchema.parse(props)
  const { sectionTitle, sectionSubtitle, keyPoints, className = '' } = validatedProps
  const shouldReduceMotion = useReducedMotion()

  // Container animation
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

  // Item animation
  const itemVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
      },
    },
    hover: {
      y: shouldReduceMotion ? 0 : -8,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
      },
    },
  }

  // Card background hover
  const cardHoverVariants = {
    hover: {
      backgroundColor: shouldReduceMotion ? undefined : 'rgba(17, 17, 17, 1)',
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
      },
    },
  }

  // Icon hover animation
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.1,
      rotate: shouldReduceMotion ? 0 : 5,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
      },
    },
  }

  return (
    <section
      className={`bg-[#0A0A0A] border-t border-red-600/20 ${className}`}
      aria-labelledby={sectionTitle ? 'keypoints-title' : undefined}
    >
        {/* Section Header */}
        {(sectionTitle || sectionSubtitle) && (
          <div className="w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: ANIMATION_CONSTANTS.DURATION_MEDIUM }}
              className="w-full flex flex-col items-center"
            >
              {sectionTitle && (
                <h2
                  id="keypoints-title"
                  className="text-white font-bold text-4xl sm:text-5xl mb-4 font-montserrat uppercase tracking-tight"
                >
                  {sectionTitle}
                </h2>
              )}
              {sectionSubtitle && (
                <p className="text-lg text-gray-400 max-w-2xl text-center mx-auto font-inter">
                  {sectionSubtitle}
                </p>
              )}
            </motion.div>
          </div>
        )}

        {/* Key Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[160rem] mx-auto items-stretch"
        >
          {keyPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon]

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                className="group flex"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="bg-[#111111] border border-red-600/20 rounded-lg px-8 py-8 sm:px-10 sm:py-8 lg:px-12 lg:py-10 transition-colors duration-300 hover:border-red-600/40 flex flex-col justify-between w-full h-full min-h-[28rem] overflow-hidden"
                >
                  <div className="text-left">
                    {/* Icon Container */}
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 mb-6 bg-red-600/10 rounded-lg flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-6 h-6 text-red-600" />
                    </motion.div>

                    {/* Headline */}
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">
                      {point.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed font-inter break-words">
                      {point.description}
                    </p>
                  </div>

                  {/* Decorative Line */}
                  {!shouldReduceMotion && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      className="mt-6 h-[2px] bg-gradient-to-r from-red-600 to-transparent origin-left"
                    />
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
    </section>
  )
})

RackKeyPoints.displayName = 'RackKeyPoints'

export default RackKeyPoints
export type { RackKeyPointsProps }