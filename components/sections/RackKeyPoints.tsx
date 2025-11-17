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
  ctaText: z.string().optional(),
  ctaHref: z.string().optional(),
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
  STAGGER: 0.12,
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
  const { sectionTitle, sectionSubtitle, keyPoints, ctaText, ctaHref, className = '' } = validatedProps
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

  // Item animation - more dramatic
  const itemVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
        ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
      },
    },
    hover: {
      y: shouldReduceMotion ? 0 : -12,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
        ease: ANIMATION_CONSTANTS.EASE_POWER,
      },
    },
  }

  // Enhanced card hover with glow
  const cardHoverVariants = {
    hover: {
      backgroundColor: shouldReduceMotion ? undefined : 'rgba(15, 15, 15, 1)',
      borderColor: shouldReduceMotion ? undefined : 'rgba(220, 38, 38, 0.4)',
      boxShadow: shouldReduceMotion ? undefined : '0 20px 60px rgba(220, 38, 38, 0.15), 0 0 40px rgba(220, 38, 38, 0.1)',
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
      },
    },
  }

  // Icon hover - more dramatic
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.15,
      rotate: shouldReduceMotion ? 0 : 8,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
        ease: ANIMATION_CONSTANTS.EASE_POWER,
      },
    },
  }

  // Icon glow effect
  const iconGlowVariants = {
    initial: { opacity: 0.3, scale: 1 },
    hover: {
      opacity: shouldReduceMotion ? 0.3 : 0.7,
      scale: shouldReduceMotion ? 1 : 1.2,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
      },
    },
  }

  return (
    <section
      className={`bg-[#0A0A0A] border-t border-red-500/20 relative ${className}`}
      style={{
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
      }}
      aria-labelledby={sectionTitle ? 'keypoints-title' : undefined}
    >
      {/* Ambient gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600/8 via-red-900/4 to-transparent blur-3xl"
        />
      </div>

      <div className="relative">
        {/* Section Header */}
        {(sectionTitle || sectionSubtitle) && (
          <div
            className="w-full flex flex-col items-center text-center"
            style={{
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
              paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
              paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: ANIMATION_CONSTANTS.DURATION_MEDIUM }}
              className="w-full flex flex-col items-center"
            >
              {sectionTitle && (
                <h2
                  id="keypoints-title"
                  className="text-white font-black font-montserrat uppercase tracking-tight"
                  style={{
                    fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.02em',
                    marginBottom: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  }}
                >
                  {sectionTitle}
                </h2>
              )}
              {sectionSubtitle && (
                <p
                  className="text-gray-400 max-w-3xl mx-auto font-inter"
                  style={{
                    fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                    lineHeight: '1.65',
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-stretch max-w-7xl mx-auto"
          style={{
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
            paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
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
                  className="bg-[#0F0F0F] border border-red-500/20 rounded-2xl transition-all duration-300 flex flex-col justify-between w-full relative overflow-hidden"
                  style={{
                    padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                    minHeight: 'clamp(320px, 35vh, 380px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="text-left flex-1 flex flex-col relative z-10">
                    {/* Icon Container - Enhanced */}
                    <div className="relative">
                      <motion.div
                        variants={iconVariants}
                        className="bg-gradient-to-br from-red-600/20 to-red-600/10 backdrop-blur-sm rounded-xl flex items-center justify-center relative"
                        style={{
                          width: 'clamp(3.5rem, 6vw, 4rem)',
                          height: 'clamp(3.5rem, 6vw, 4rem)',
                          marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                          boxShadow: '0 0 20px rgba(220, 38, 38, 0.2)',
                        }}
                        aria-hidden="true"
                      >
                        {/* Glow effect behind icon */}
                        <motion.div
                          variants={iconGlowVariants}
                          className="absolute inset-0 bg-red-600/40 rounded-xl blur-xl"
                        />
                        
                        <IconComponent
                          className="text-red-500 relative z-10"
                          style={{
                            width: 'clamp(1.75rem, 3vw, 2rem)',
                            height: 'clamp(1.75rem, 3vw, 2rem)',
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Headline - Enhanced */}
                    <h3
                      className="font-bold text-white font-montserrat uppercase"
                      style={{
                        fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                        lineHeight: '1.25',
                        letterSpacing: '-0.01em',
                        marginBottom: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                      }}
                    >
                      {point.headline}
                    </h3>

                    {/* Description - Enhanced */}
                    <p
                      className="text-gray-400 font-inter flex-1"
                      style={{
                        fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
                        lineHeight: '1.75',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {point.description}
                    </p>
                  </div>

                  {/* Decorative Line - Enhanced */}
                  {!shouldReduceMotion && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      className="bg-gradient-to-r from-red-600 via-red-600/60 to-transparent origin-left relative"
                      style={{
                        marginTop: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                        height: '2px',
                        boxShadow: '0 0 10px rgba(220,38,38,0.4)',
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Link - Elite styling */}
        {ctaText && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center"
            style={{
              marginTop: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            <motion.a
              href={ctaHref}
              whileHover={{
                scale: shouldReduceMotion ? 1 : 1.02,
                x: shouldReduceMotion ? 0 : 4,
              }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
              className="group inline-flex items-center gap-3 text-white font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
              }}
            >
              <span className="relative">
                {ctaText}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 to-red-600/40 transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
              </span>
              <motion.span
                animate={{
                  x: shouldReduceMotion ? 0 : [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-red-500"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
})

RackKeyPoints.displayName = 'RackKeyPoints'

export default RackKeyPoints
export type { RackKeyPointsProps }