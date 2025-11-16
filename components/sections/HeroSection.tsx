'use client'

import { memo, useRef } from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import { z } from 'zod'
import { heroFade, fadeUp, staggerChildren } from '@/lib/motionPresets'
import { useParallax } from '@/hooks/useParallax'

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
// CONSTANTS
// ============================================================================

const DEFAULT_CONTENT = {
  id: 'footplate',
  backgroundImage: '/hero-footplate.jpg',
  backgroundImageAlt: 'ExIQx Performance rack-mounted footplate in professional gym setting',
  headline: 'Patent-Protected Plantarflexion Training.',
  subheadline: 'Commercial-grade biomechanical equipment trusted by D1 programs, PT clinics, and professional athletes.',
  subheadlineAccent: undefined,
  tagline: 'Patent-Pending Technology • Commercial-Grade Construction • Engineered in Arizona',
  ctaButtons: [
    {
      label: 'Request Demo',
      href: '/request-demo',
      variant: 'primary' as const,
      ariaLabel: 'Request a professional demonstration'
    },
    {
      label: 'Request Early Access',
      href: '/early-access',
      variant: 'secondary' as const,
      ariaLabel: 'Request early access to limited production'
    }
  ]
}

const EASE_CUSTOM = [0.16, 1, 0.3, 1] as const
const DURATION_BASE = 1
const DURATION_LONG = 1.2

// ============================================================================
// ANIMATION FUNCTIONS
// ============================================================================

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
        rounded-xl px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] 
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black
        ${isPrimary 
          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 hover:scale-[1.02] shadow-2xl shadow-red-500/30 focus-visible:ring-accent' 
          : 'border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40 focus-visible:ring-white'
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
  const shouldReduceMotion = !!useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Tesla-style parallax with depth
  const heroImageY = shouldReduceMotion ? undefined : useParallax(scrollYProgress, 60)
  const heroContentY = shouldReduceMotion ? undefined : useParallax(scrollYProgress, 30)

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

  const variants = createAnimationVariants(shouldReduceMotion)

  return (
    <motion.section
      ref={containerRef}
      id={validatedData.id}
      className="relative flex h-screen items-center justify-center overflow-hidden px-6"
      aria-label="Hero section"
      initial="hidden"
      animate="visible"
      variants={heroFade}
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" aria-hidden="true" />

      {/* Product Image with Parallax - MASSIVE */}
      <motion.div
        style={{
          y: heroImageY,
          transform: 'translateZ(0)'
        }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center will-change-transform"
      >
        <div className="relative w-[90%] h-[90vh]">
          <img
            src="/images/footplate-hero.png"
            alt="ExIQx Performance rack-mounted footplate with patent-protected plantarflexion mechanism"
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 25px 80px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 60px rgba(220, 38, 38, 0.2))',
              transform: 'scale(2.5)',
            }}
          />
        </div>
      </motion.div>

      {/* Content with Parallax */}
      <motion.div
        style={{
          y: heroContentY,
          transform: 'translateZ(0)'
        }}
        className="relative z-10 flex max-w-5xl flex-col items-center md:items-start text-center md:text-left px-4 md:pl-12 will-change-transform"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold tracking-[0.05em] uppercase leading-[1.05] font-display mb-16 sm:mb-20"
        >
          {validatedData.headline}
        </motion.h1>

        <motion.p
          variants={fadeUp}
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

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center md:justify-start gap-5 mb-12 sm:mb-14"
          role="group"
          aria-label="Call to action buttons"
        >
          {validatedData.ctaButtons.map((button) => (
            <CTAButton
              key={button.href}
              button={button}
              shouldReduceMotion={!!shouldReduceMotion}
            />
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-[10px] uppercase tracking-[0.25em] text-white/60"
        >
          {validatedData.tagline}
        </motion.p>
      </motion.div>
    </motion.section>
  )
})

export default HeroSection