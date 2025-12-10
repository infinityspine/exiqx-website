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

const FreestandingHeroPropsSchema = z.object({
  headline: z.string().default('TRAIN ANYWHERE'),
  subheadline: z.string().default('Commercial-grade posterior-chain loading without the rack. Ideal for PT clinics, performance centers, and facilities requiring portable precision training equipment.'),
  eyebrow: z.string().optional(),
  microTagline: z.string().optional(),
  primaryCTA: CTAButtonSchema.optional(),
  secondaryCTA: CTAButtonSchema.optional(),
  backgroundImage: z.string().default('/images/Freestanding v2.7.png'),
  showShimmer: z.boolean().default(false),
  className: z.string().optional(),
})

type FreestandingHeroProps = z.infer<typeof FreestandingHeroPropsSchema>

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

const FreestandingHero = memo<Partial<FreestandingHeroProps>>((props) => {
  const validatedProps = FreestandingHeroPropsSchema.parse(props)
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
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-center ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: ANIMATION_CONSTANTS.DURATION_SLOW }}
        style={{
          y: shouldReduceMotion ? 0 : backgroundY,
        }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src={backgroundImage}
          alt="Freestanding ExIQx footplate system for professional facilities"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
          quality={85}
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

      {/* Hero Content with Fade-out */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ANIMATION_CONSTANTS.DURATION_MEDIUM, delay: 0.3 }}
        style={{
          opacity: shouldReduceMotion ? 1 : contentOpacity,
          scale: shouldReduceMotion ? 1 : contentScale,
        }}
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
          className="text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold tracking-[0.05em] text-white uppercase leading-[1.05] mb-16 sm:mb-20 font-display"
        >
          {headline}
        </h1>

        {/* Subheadline */}
        <p
          className="text-[clamp(1.05rem,1.6vw,1.25rem)] font-medium text-white/85 max-w-2xl leading-[1.8] font-inter"
          style={{ marginBottom: 'clamp(3.5rem, 9vw, 5rem)' }}
        >
          {subheadline}
        </p>

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12 sm:mb-14">
            {/* Primary CTA */}
            {primaryCTA && (
              <motion.button
                onClick={() => handleLinkClick(primaryCTA.href)}
                initial={{ scale: 1 }}
                whileHover={shouldReduceMotion ? {} : {
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(220,38,38,0.55)'
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                transition={{ duration: ANIMATION_CONSTANTS.DURATION_FAST }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:from-red-500 hover:to-red-600 hover:scale-[1.02] shadow-2xl shadow-red-500/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black font-inter"
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
                whileHover={shouldReduceMotion ? {} : {
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.14)',
                  borderColor: 'rgba(255,255,255,0.9)'
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                transition={{ duration: ANIMATION_CONSTANTS.DURATION_FAST }}
                className="border border-white/20 bg-transparent text-white px-8 py-4 rounded-xl text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/10 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black font-inter"
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
            className="text-[10px] sm:text-xs tracking-[0.18em] text-white/50 uppercase font-inter"
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

FreestandingHero.displayName = 'FreestandingHero'

export default FreestandingHero
export type { FreestandingHeroProps }
