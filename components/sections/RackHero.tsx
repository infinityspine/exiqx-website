'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { z } from 'zod'

// ============================================================================
// Schema Validation
// ============================================================================

const CTAButtonSchema = z.object({
  text: z.string(),
  href: z.string(),
})

const RackHeroPropsSchema = z.object({
  headline: z.string().default('RACK-MOUNTED FOOTPLATE'),
  subheadline: z.string().default('Engineered for elite posterior-chain loading through the plantar surface.'),
  eyebrow: z.string().optional(), // Small text above headline
  microTagline: z.string().optional(), // Small text below CTAs
  primaryCTA: CTAButtonSchema.optional(),
  secondaryCTA: CTAButtonSchema.optional(),
  backgroundImage: z.string().default('/rack-mounted-hero.jpg'),
  showShimmer: z.boolean().default(false),
  className: z.string().optional(),
})

type RackHeroProps = z.infer<typeof RackHeroPropsSchema>

// ============================================================================
// Animation Constants
// ============================================================================

const ANIMATION_CONSTANTS = {
  EASE_ATHLETIC: [0.43, 0.13, 0.23, 0.96] as const,
  EASE_POWER: [0.77, 0, 0.175, 1] as const,
  DURATION_SLOW: 1.2,
  DURATION_MEDIUM: 0.8,
  DURATION_FAST: 0.4,
} as const

// ============================================================================
// Component
// ============================================================================

const RackHero = memo<Partial<RackHeroProps>>((props) => {
  const validatedProps = RackHeroPropsSchema.parse(props)
  const {
    headline,
    subheadline,
    eyebrow,
    microTagline,
    primaryCTA,
    secondaryCTA,
    backgroundImage,
    showShimmer,
    className = '',
  } = validatedProps

  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (href.includes('#')) {
      const [path, hash] = href.split('#')
      if (path === '/' && window.location.pathname === '/') {
        const element = document.querySelector(`#${hash}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        router.push(href)
      }
    } else {
      router.push(href)
    }
  }

  return (
    <section
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-center ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: ANIMATION_CONSTANTS.DURATION_SLOW }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/95" />
        
        {/* Optional Shimmer Effect */}
        {showShimmer && !shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ['-200%', '200%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
              ease: 'easeInOut',
            }}
          />
        )}
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ANIMATION_CONSTANTS.DURATION_MEDIUM, delay: 0.3 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12"
      >
        {/* Optional Eyebrow */}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xs tracking-[0.2em] text-white/50 uppercase mb-6 font-inter"
          >
            {eyebrow}
          </motion.p>
        )}

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-5xl sm:text-7xl font-extrabold tracking-[0.05em] text-white leading-tight mb-12 sm:mb-14 font-montserrat"
        >
          {headline}
        </h1>

        {/* Subheadline */}
        <p 
          className="text-sm sm:text-base text-white/70 max-w-2xl leading-[1.8] font-inter" 
          style={{ marginBottom: 'clamp(3rem, 8vw, 4.5rem)' }}
        >
          {subheadline}
        </p>

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-14">
            {/* Primary CTA */}
            {primaryCTA && (
              <motion.button
                onClick={() => handleLinkClick(primaryCTA.href)}
                initial={{ scale: 1 }}
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: ANIMATION_CONSTANTS.DURATION_FAST }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black font-inter"
                aria-label={primaryCTA.text}
              >
                {primaryCTA.text}
              </motion.button>
            )}

            {/* Secondary CTA */}
            {secondaryCTA && (
              <motion.button
                onClick={() => handleLinkClick(secondaryCTA.href)}
                initial={{ scale: 1 }}
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: ANIMATION_CONSTANTS.DURATION_FAST }}
                className="border border-red-500 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 px-8 py-3 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black font-inter"
                aria-label={secondaryCTA.text}
              >
                {secondaryCTA.text}
              </motion.button>
            )}
          </div>
        )}

        {/* Optional Micro-Tagline */}
        {microTagline && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-[10px] sm:text-xs tracking-[0.18em] text-white/45 uppercase font-inter"
          >
            {microTagline}
          </motion.p>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/30 p-1"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="h-2 w-1 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
})

RackHero.displayName = 'RackHero'

export default RackHero
export type { RackHeroProps }