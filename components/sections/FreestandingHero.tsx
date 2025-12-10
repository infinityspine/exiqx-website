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
      className={`relative flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between min-h-[calc(100vh-80px)] px-6 lg:px-8 overflow-visible bg-black max-w-none pt-24 sm:pt-32 lg:pt-36 ${className}`}
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
        className="z-10 max-w-xl lg:max-w-[950px] lg:flex-shrink-0 text-left pl-6 lg:pl-[4%]"
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
          className="text-white text-[clamp(2.4rem,5vw,4.8rem)] lg:text-[clamp(4rem,8.5vw,8rem)] font-black tracking-[-0.025em] uppercase leading-[0.92] font-display mb-6 lg:mb-32"
          style={{
            textShadow: '0 6px 40px rgba(0,0,0,0.9), 0 0 80px rgba(220,38,38,0.35)',
            transform: 'translateZ(0)'
          }}
        >
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="text-gray-300 text-base sm:text-lg lg:text-[clamp(1.2rem,2.1vw,1.65rem)] font-medium text-white/92 leading-relaxed lg:leading-[1.65] mb-8 lg:mb-22 max-w-[650px]">
          {subheadline}
        </p>

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex gap-4 mt-6">
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
            className="text-sm text-gray-400 mt-12 sm:mt-16 lg:mt-24"
          >
            {microTagline}
          </motion.p>
        )}
      </motion.div>

      {/* Product Image */}
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: ANIMATION_CONSTANTS.DURATION_SLOW }}
        style={{
          y: shouldReduceMotion ? 0 : backgroundY,
        }}
        className="z-0 w-full lg:w-[55%] lg:flex-shrink-0 will-change-transform overflow-visible lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
      >
        <div className="flex justify-center items-center w-full h-full max-w-none overflow-visible">
          <Image
            src={backgroundImage}
            alt="Freestanding ExIQx footplate system for professional facilities"
            width={4928}
            height={3696}
            className="w-full h-auto object-contain pointer-events-none"
            style={{
              width: '140%',
              maxWidth: 'none',
              height: 'auto',
              maxHeight: 'none',
              transform: 'translateZ(0)',
              filter: 'drop-shadow(0 50px 140px rgba(0,0,0,0.95)) drop-shadow(0 0 90px rgba(220,38,38,0.3))'
            }}
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

FreestandingHero.displayName = 'FreestandingHero'

export default FreestandingHero
export type { FreestandingHeroProps }
