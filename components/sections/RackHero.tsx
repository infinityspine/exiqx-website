'use client'

import React, { memo, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { z } from 'zod'
import { ChevronRight } from 'lucide-react'

// ============================================================================
// Schema Validation
// ============================================================================

const RackHeroPropsSchema = z.object({
  headline: z.string().default('RACK-MOUNTED FOOTPLATES'),
  subheadline: z.string().default('Biomechanical precision engineered for peak athletic performance'),
  tagline: z.string().default('REDEFINING POSTERIOR CHAIN TRAINING'),
  primaryCTA: z.object({
    text: z.string().default('Explore Features'),
    href: z.string().default('#key-points'),
  }).default({}),
  secondaryCTA: z.object({
    text: z.string().default('View Specifications'),
    href: z.string().default('#specs'),
  }).default({}),
  backgroundImage: z.string().default('/images/rack-hero-bg.jpg'),
  showShimmer: z.boolean().default(true),
  className: z.string().optional(),
})

type RackHeroProps = z.infer<typeof RackHeroPropsSchema>

// ============================================================================
// Animation Constants
// ============================================================================

const ANIMATION_CONSTANTS = {
  // Easing curves - athletic precision
  EASE_ATHLETIC: [0.43, 0.13, 0.23, 0.96],
  EASE_POWER: [0.77, 0, 0.175, 1],
  
  // Durations
  DURATION_FAST: 0.3,
  DURATION_MEDIUM: 0.6,
  DURATION_SLOW: 1.2,
  
  // Delays
  STAGGER_CHILDREN: 0.1,
  
  // Motion ranges
  PARALLAX_RANGE: [-50, 50],
  BREATHING_SCALE: [1, 1.02, 1],
} as const

// ============================================================================
// Component
// ============================================================================

const RackHero = memo<Partial<RackHeroProps>>((props) => {
  const validatedProps = RackHeroPropsSchema.parse(props)
  const {
    headline,
    subheadline,
    tagline,
    primaryCTA,
    secondaryCTA,
    backgroundImage,
    showShimmer,
    className = '',
  } = validatedProps

  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : ANIMATION_CONSTANTS.PARALLAX_RANGE
  )

  // Smooth scroll to section
  const handleScrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
        staggerChildren: ANIMATION_CONSTANTS.STAGGER_CHILDREN,
        ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
        ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
      },
    },
  }

  const buttonHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: shouldReduceMotion ? 1 : 1.02,
      y: shouldReduceMotion ? 0 : -2,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_FAST,
        ease: ANIMATION_CONSTANTS.EASE_POWER,
      },
    },
    tap: { scale: 0.98 },
  }

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] ${className}`}
      aria-label="Rack-mounted footplates hero section"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradient Overlay - Engineered precision */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
          
          {/* Optional Shimmer Effect - Subtle industrial gleam */}
          {showShimmer && !shouldReduceMotion && (
            <motion.div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'linear',
              }}
            />
          )}
        </div>

        {/* Breathing Scale Effect on Background */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 bg-[#0A0A0A]/10"
            animate={{
              scale: ANIMATION_CONSTANTS.BREATHING_SCALE,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline - Engineering precision */}
        <motion.div variants={itemVariants} className="mb-6">
          <span
            className="inline-block text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/60 font-inter"
            role="doc-subtitle"
          >
            {tagline}
          </span>
        </motion.div>

        {/* Headline - Bold statement */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white font-montserrat"
        >
          {headline.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {word === 'FOOTPLATES' ? (
                <span className="text-red-600 block mt-2">{word}</span>
              ) : (
                <>{word} </>
              )}
            </React.Fragment>
          ))}
        </motion.h1>

        {/* Subheadline - Precision description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-inter leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons - Action hierarchy */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <motion.button
            onClick={() => handleScrollToSection(primaryCTA.href)}
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="group relative px-8 py-4 bg-red-600 text-white font-semibold rounded-sm overflow-hidden transition-colors duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] font-inter"
            aria-label={primaryCTA.text}
          >
            <span className="relative z-10 flex items-center">
              {primaryCTA.text}
              <ChevronRight
                className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
            {/* Hover glow effect */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-20"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            onClick={() => handleScrollToSection(secondaryCTA.href)}
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A0A0A] font-inter"
            aria-label={secondaryCTA.text}
          >
            {secondaryCTA.text}
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
            }}
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChevronRight className="h-8 w-8 text-red-600 rotate-90" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Vignette Effect - Depth and focus */}
      <div
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.4) 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  )
})

RackHero.displayName = 'RackHero'

export default RackHero
export type { RackHeroProps }