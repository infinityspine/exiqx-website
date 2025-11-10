'use client'

import React, { memo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { z } from 'zod'
import { ChevronRight } from 'lucide-react'

// ============================================================================
// Schema Validation
// ============================================================================

const CTASectionPropsSchema = z.object({
  headline: z.string().default('Ready to Transform Your Training?'),
  description: z.string().optional(),
  ctaText: z.string().default('Join Waitlist'),
  ctaHref: z.string().default('/#waitlist'),
  secondaryCtaText: z.string().optional(),
  secondaryCtaHref: z.string().optional(),
  showGradient: z.boolean().default(true),
  className: z.string().optional(),
})

type CTASectionProps = z.infer<typeof CTASectionPropsSchema>

// ============================================================================
// Animation Constants
// ============================================================================

const ANIMATION_CONSTANTS = {
  EASE_ATHLETIC: [0.43, 0.13, 0.23, 0.96],
  EASE_POWER: [0.77, 0, 0.175, 1],
  DURATION_FAST: 0.3,
  DURATION_MEDIUM: 0.6,
} as const

// ============================================================================
// Component
// ============================================================================

const CTASection = memo<Partial<CTASectionProps>>((props) => {
  const validatedProps = CTASectionPropsSchema.parse(props)
  const {
    headline,
    description,
    ctaText,
    ctaHref,
    secondaryCtaText,
    secondaryCtaHref,
    showGradient,
    className = '',
  } = validatedProps
  
  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()

  const handleLinkClick = useCallback(
    (href: string) => {
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
    },
    [router]
  )

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
      className={`py-24 lg:py-32 text-center ${
        showGradient
          ? 'bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-red-950/20'
          : 'bg-[#0A0A0A]'
      } border-t border-red-600/20 ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
            ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
          }}
        >
          {/* Headline */}
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-montserrat"
          >
            {headline}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-inter">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <motion.button
              onClick={() => handleLinkClick(ctaHref)}
              variants={buttonHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="group relative px-10 py-4 bg-red-600 text-white font-semibold rounded-xl overflow-hidden transition-colors duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] font-inter uppercase tracking-[0.2em] text-[11px]"
              aria-label={ctaText}
            >
              <span className="relative z-10 flex items-center">
                {ctaText}
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

            {/* Secondary CTA (Optional) */}
            {secondaryCtaText && secondaryCtaHref && (
              <motion.button
                onClick={() => handleLinkClick(secondaryCtaHref)}
                variants={buttonHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A0A0A] font-inter uppercase tracking-[0.2em] text-[11px]"
                aria-label={secondaryCtaText}
              >
                {secondaryCtaText}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

CTASection.displayName = 'CTASection'

export default CTASection
export type { CTASectionProps }