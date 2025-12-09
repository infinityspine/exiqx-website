'use client'

import React, { memo, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { z } from 'zod'

// ============================================================================
// Schema Validation
// ============================================================================

const CTAButtonSchema = z.object({
  text: z.string(),
  href: z.string(),
})

const GHDHeroPropsSchema = z.object({
  headline: z.string().default('RETROFIT YOUR GHD'),
  subheadline: z.string().default('Transform your glute-ham developer into a precision posterior-chain loading station.'),
  eyebrow: z.string().optional(),
  microTagline: z.string().optional(),
  primaryCTA: CTAButtonSchema.optional(),
  secondaryCTA: CTAButtonSchema.optional(),
  backgroundImage: z.string().default('/images/ghd-hero-v3-6.png'),
  showShimmer: z.boolean().default(false),
  className: z.string().optional(),
})

type GHDHeroProps = z.infer<typeof GHDHeroPropsSchema>

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

const GHDHero = memo<Partial<GHDHeroProps>>((props) => {
  const validatedProps = GHDHeroPropsSchema.parse(props)
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
  const containerRef = useRef<HTMLElement>(null)

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

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
      ref={containerRef}
      className={`relative flex flex-col-reverse lg:flex-row items-center justify-between h-[calc(100vh-80px)] px-8 lg:px-8 overflow-hidden bg-black max-w-none ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-transparent z-0" />

      {/* Optional Shimmer Effect */}
      {showShimmer && !shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent z-0"
          animate={{ x: ['-200%', '200%'] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Text Block */}
      <motion.div
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: ANIMATION_CONSTANTS.DURATION_MEDIUM, delay: 0.3 }}
        style={{
          opacity: shouldReduceMotion ? 1 : contentOpacity,
        }}
        className="z-10 max-w-xl text-left pt-24 sm:pt-32"
      >
        {/* Optional Eyebrow */}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm tracking-widest uppercase text-gray-400 mb-4"
          >
            – {eyebrow}
          </motion.p>
        )}

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-white text-5xl font-black leading-tight mb-6"
        >
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-gray-300 mb-8">
          {subheadline}
        </p>

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex gap-4">
            {/* Primary CTA */}
            {primaryCTA && (
              <motion.a
                href={primaryCTA.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(primaryCTA.href)
                }}
                initial={{ scale: 1 }}
                whileHover={shouldReduceMotion ? {} : {
                  scale: 1.05,
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                transition={{ duration: ANIMATION_CONSTANTS.DURATION_FAST }}
                className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black"
                aria-label={primaryCTA.text}
              >
                {primaryCTA.text}
              </motion.a>
            )}

            {/* Secondary CTA */}
            {secondaryCTA && (
              <motion.a
                href={secondaryCTA.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(secondaryCTA.href)
                }}
                initial={{ scale: 1 }}
                whileHover={shouldReduceMotion ? {} : {
                  scale: 1.05,
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                transition={{ duration: ANIMATION_CONSTANTS.DURATION_FAST }}
                className="border border-white px-6 py-3 rounded-full text-sm font-semibold text-white hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label={secondaryCTA.text}
              >
                {secondaryCTA.text}
              </motion.a>
            )}
          </div>
        )}

        {/* Optional Micro-Tagline */}
        {microTagline && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm text-gray-400 mt-8"
          >
            {microTagline}
          </motion.p>
        )}
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: ANIMATION_CONSTANTS.DURATION_SLOW }}
        style={{
          y: shouldReduceMotion ? 0 : backgroundY,
        }}
        className="z-0 w-full lg:flex-1 will-change-transform"
      >
        <div className="flex justify-center items-center lg:flex-1 w-full max-w-none pt-32 sm:pt-36 lg:pt-40">
          <Image
            src={backgroundImage}
            alt="GHD Retrofit Hero"
            width={2800}
            height={2100}
            className="w-full h-auto object-contain pointer-events-none"
            priority
            quality={85}
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ opacity: contentOpacity }}
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

GHDHero.displayName = 'GHDHero'

export default GHDHero
export type { GHDHeroProps }
