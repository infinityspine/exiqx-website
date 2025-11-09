'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { z } from 'zod'

// ============================================================================
// SCHEMAS & TYPES
// ============================================================================

const CTAButtonSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z.enum(['primary', 'secondary']),
  ariaLabel: z.string().optional()
})

const HeroSectionSchema = z.object({
  id: z.string().regex(/^[a-z-]+$/),
  backgroundImage: z.string().min(1),
  backgroundImageAlt: z.string().min(1),
  headline: z.string().min(1),
  subheadline: z.string().min(1),
  subheadlineAccent: z.string().optional(),
  tagline: z.string().min(1),
  ctaButtons: z.array(CTAButtonSchema).min(1).max(3)
})

interface HeroSectionProps {
  id?: string
  backgroundImage?: string
  backgroundImageAlt?: string
  headline?: string
  subheadline?: string
  subheadlineAccent?: string
  tagline?: string
  ctaButtons?: z.infer<typeof CTAButtonSchema>[]
  priority?: boolean
}

// ============================================================================
// CONSTANTS - Zero Duplication
// ============================================================================

const DEFAULT_CONTENT = {
  id: 'footplate',
  backgroundImage: '/hero-footplate.jpg',
  backgroundImageAlt: 'ExIQx Performance rack-mounted footplate in professional gym setting',
  headline: 'Rack-Mounted Footplate.',
  subheadline: 'Posterior chain training.',
  subheadlineAccent: 'Redefined.',
  tagline: 'Patent-Pending Design • Engineered in Arizona',
  ctaButtons: [
    {
      label: 'Explore Specs',
      href: '#specs',
      variant: 'primary' as const,
      ariaLabel: 'Explore product specifications'
    },
    {
      label: 'Join Waitlist',
      href: '#waitlist',
      variant: 'secondary' as const,
      ariaLabel: 'Join the product waitlist'
    }
  ]
}

// Animation constants - defined once
const EASE_CUSTOM = [0.16, 1, 0.3, 1] as const
const DURATION_BASE = 1
const DURATION_LONG = 1.2

// Animation variants for reduced motion support
const createAnimationVariants = (shouldReduce: boolean) => ({
  backgroundImage: {
    initial: shouldReduce ? {} : { opacity: 0, scale: 1.02 },
    animate: shouldReduce ? {} : { opacity: 1, scale: 1 },
    transition: shouldReduce ? { duration: 0 } : { duration: DURATION_LONG, ease: EASE_CUSTOM }
  },
  headline: {
    initial: shouldReduce ? {} : { opacity: 0, y: 40 },
    animate: shouldReduce ? {} : { opacity: 1, y: 0 },
    transition: shouldReduce ? { duration: 0 } : { duration: DURATION_BASE, ease: EASE_CUSTOM }
  },
  subheadline: {
    initial: shouldReduce ? {} : { opacity: 0, y: 20 },
    animate: shouldReduce ? {} : { opacity: 1, y: 0 },
    transition: shouldReduce ? { duration: 0 } : { duration: DURATION_BASE, delay: 0.18, ease: EASE_CUSTOM }
  },
  cta: {
    initial: shouldReduce ? {} : { opacity: 0, y: 24 },
    animate: shouldReduce ? {} : { opacity: 1, y: 0 },
    transition: shouldReduce ? { duration: 0 } : { duration: DURATION_BASE, delay: 0.3, ease: EASE_CUSTOM }
  },
  tagline: {
    initial: shouldReduce ? {} : { opacity: 0 },
    animate: shouldReduce ? {} : { opacity: 1 },
    transition: shouldReduce ? { duration: 0 } : { duration: DURATION_LONG, delay: 0.55 }
  }
})

// Button hover/tap animations (respecting reduced motion)
const createButtonAnimations = (shouldReduce: boolean) => ({
  primary: {
    whileHover: shouldReduce ? {} : {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(220,38,38,0.55)'
    },
    whileTap: shouldReduce ? {} : { scale: 0.96 }
  },
  secondary: {
    whileHover: shouldReduce ? {} : {
      scale: 1.05,
      backgroundColor: 'rgba(255,255,255,0.14)',
      borderColor: 'rgba(255,255,255,0.9)'
    },
    whileTap: shouldReduce ? {} : { scale: 0.96 }
  }
})

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

interface CTAButtonProps {
  button: z.infer<typeof CTAButtonSchema>
  shouldReduceMotion: boolean
}

const CTAButton = memo(function CTAButton({ button, shouldReduceMotion }: CTAButtonProps) {
  const animations = createButtonAnimations(shouldReduceMotion)
  const isPrimary = button.variant === 'primary'
  
  return (
    <motion.a
      href={button.href}
      aria-label={button.ariaLabel || button.label}
      {...animations[button.variant]}
      className={`
        rounded-xl px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] 
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black
        ${isPrimary 
          ? 'bg-accent text-white focus-visible:ring-accent' 
          : 'border border-white/25 bg-white/10 text-white backdrop-blur-md focus-visible:ring-white'
        }
      `}
    >
      {button.label}
    </motion.a>
  )
})

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const HeroSection = memo(function HeroSection({
  id = DEFAULT_CONTENT.id,
  backgroundImage = DEFAULT_CONTENT.backgroundImage,
  backgroundImageAlt = DEFAULT_CONTENT.backgroundImageAlt,
  headline = DEFAULT_CONTENT.headline,
  subheadline = DEFAULT_CONTENT.subheadline,
  subheadlineAccent = DEFAULT_CONTENT.subheadlineAccent,
  tagline = DEFAULT_CONTENT.tagline,
  ctaButtons = DEFAULT_CONTENT.ctaButtons,
  priority = true
}: HeroSectionProps) {
  // Detect reduced motion preference
  const shouldReduceMotion = useReducedMotion() || false

  // Validate props at runtime
  const validatedData = HeroSectionSchema.parse({
    id,
    backgroundImage,
    backgroundImageAlt,
    headline,
    subheadline,
    subheadlineAccent,
    tagline,
    ctaButtons
  })

  // Get animation variants based on motion preference
  const variants = createAnimationVariants(shouldReduceMotion)

  return (
    <section
      id={validatedData.id}
      className="relative flex h-screen items-center justify-center overflow-hidden px-6"
      aria-label="Hero section"
    >
      {/* Optimized Background Image with Next.js Image */}
      <motion.div
        {...variants.backgroundImage}
        className="pointer-events-none absolute inset-0"
      >
        <Image
          src={validatedData.backgroundImage}
          alt={validatedData.backgroundImageAlt}
          fill
          priority={priority}
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradient Overlay for Contrast */}
      <div 
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black/95"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center px-4">
        {/* Headline */}
        <motion.h1
          {...variants.headline}
          className="text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold tracking-[0.05em] uppercase leading-[1.05] font-display mb-16 sm:mb-18"
        >
          {validatedData.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...variants.subheadline}
          className="text-[clamp(1.05rem,1.6vw,1.25rem)] font-medium text-white/85 leading-[1.8] max-w-2xl"
          style={{ marginBottom: 'clamp(3.5rem, 9vw, 5rem)' }}
        >
          {validatedData.subheadline}{' '}
          {validatedData.subheadlineAccent && (
            <span className="text-accent font-semibold">
              {validatedData.subheadlineAccent}
            </span>
          )}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...variants.cta}
          className="flex flex-wrap items-center justify-center gap-5 mb-12 sm:mb-14"
          role="group"
          aria-label="Call to action buttons"
        >
          {validatedData.ctaButtons.map((button) => (
            <CTAButton
              key={button.href}
              button={button}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...variants.tagline}
          className="text-[10px] uppercase tracking-[0.25em] text-white/60"
        >
          {validatedData.tagline}
        </motion.p}
      </div>
    </section>
  )
})

export default HeroSection