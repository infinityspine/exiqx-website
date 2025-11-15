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

const FreestandingKeyPointsPropsSchema = z.object({
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

type FreestandingKeyPointsProps = z.infer<typeof FreestandingKeyPointsPropsSchema>

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

const FreestandingKeyPoints = memo<Partial<FreestandingKeyPointsProps>>((props) => {
  const validatedProps = FreestandingKeyPointsPropsSchema.parse(props)
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
      className={`bg-[#0A0A0A] border-t border-red-500/20 ${className}`}
      style={{
        paddingTop: 'clamp(3rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
      }}
      aria-labelledby={sectionTitle ? 'keypoints-title' : undefined}
    >
        {/* Section Header */}
        {(sectionTitle || sectionSubtitle) && (
          <div
            className="w-full flex flex-col items-center text-center"
            style={{
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
              paddingLeft: 'clamp(1rem, 3vw, 2rem)',
              paddingRight: 'clamp(1rem, 3vw, 2rem)',
            }}
          >
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
                  className="text-white font-bold font-montserrat uppercase tracking-tight"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  }}
                >
                  {sectionTitle}
                </h2>
              )}
              {sectionSubtitle && (
                <p
                  className="text-gray-400 max-w-2xl mx-auto font-inter"
                  style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.6',
                  }}
                >
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full items-stretch"
          style={{
            gap: 'clamp(1.25rem, 2.5vw, 2rem)',
            paddingLeft: 'clamp(1rem, 3vw, 2rem)',
            paddingRight: 'clamp(1rem, 3vw, 2rem)',
          }}
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
                  className="bg-[#111111] border border-red-500/20 rounded-lg transition-colors duration-300 hover:border-red-500/30 flex flex-col justify-between w-full"
                  style={{
                    padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                    minHeight: 'clamp(300px, 32vh, 360px)',
                  }}
                >
                  <div className="text-left flex-1 flex flex-col">
                    {/* Icon Container */}
                    <motion.div
                      variants={iconVariants}
                      className="bg-red-600/10 rounded-lg flex items-center justify-center"
                      style={{
                        width: 'clamp(3rem, 5vw, 3.5rem)',
                        height: 'clamp(3rem, 5vw, 3.5rem)',
                        marginBottom: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                      }}
                      aria-hidden="true"
                    >
                      <IconComponent
                        className="text-red-600"
                        style={{
                          width: 'clamp(1.5rem, 2.5vw, 1.75rem)',
                          height: 'clamp(1.5rem, 2.5vw, 1.75rem)',
                        }}
                      />
                    </motion.div>

                    {/* Headline */}
                    <h3
                      className="font-bold text-white font-montserrat"
                      style={{
                        fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                        lineHeight: '1.3',
                        letterSpacing: '-0.01em',
                        marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                      }}
                    >
                      {point.headline}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-gray-400 font-inter flex-1"
                      style={{
                        fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
                        lineHeight: '1.7',
                        letterSpacing: '0.01em',
                      }}
                    >
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
                      className="bg-gradient-to-r from-red-600 to-transparent origin-left"
                      style={{
                        marginTop: 'clamp(1.5rem, 3vw, 2rem)',
                        height: '2px',
                      }}
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

FreestandingKeyPoints.displayName = 'FreestandingKeyPoints'

export default FreestandingKeyPoints
export type { FreestandingKeyPointsProps }