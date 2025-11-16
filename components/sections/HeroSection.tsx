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
// DEFAULT CONTENT
// ============================================================================

const DEFAULT_CONTENT = {
  id: 'footplate',
  backgroundImage: '/hero-footplate.jpg',
  backgroundImageAlt: 'ExIQx Performance rack-mounted footplate in professional gym setting',
  headline: 'Patent-Protected Closed-Chain Forefoot Training.',
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

// ============================================================================
// BUTTON ANIMATIONS
// ============================================================================

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
// CTA BUTTON COMPONENT
// ============================================================================

const CTAButton = memo(function CTAButton({ 
  button, 
  shouldReduceMotion 
}: { 
  button: z.infer<typeof CTAButtonSchema>
  shouldReduceMotion: boolean 
}) {
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
          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-2xl shadow-red-500/30'
          : 'border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40'
        }
      `}
    >
      {button.label}
    </motion.a>
  )
})

// ============================================================================
// MAIN HERO COMPONENT
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
}: HeroSectionProps) {
  
  const shouldReduceMotion = !!useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

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

  return (
    <motion.section
      ref={containerRef}
      id={validatedData.id}
      className="relative"
      aria-label="Hero section"
      initial="hidden"
      animate="visible"
      variants={heroFade}
    >
      {/* Desktop: Single Screen Layout - DON'T TOUCH */}
      <div className="hidden lg:block relative h-screen overflow-hidden">
        {/* Black Background */}
        <div className="absolute inset-0 bg-black" />

        {/* Product Image Right */}
        <motion.div
          style={{ y: heroImageY }}
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-[55%] flex items-center justify-end"
        >
          <div className="relative w-full h-[92vh] pr-[25%]">
            <img
              src="/images/footplate-hero.png"
              alt={validatedData.backgroundImageAlt}
              className="w-full h-full object-contain object-right"
              style={{
                filter: 'drop-shadow(0 30px 90px rgba(0,0,0,0.7)) drop-shadow(0 0 50px rgba(220,38,38,0.15))',
                transform: 'scale(2.2)'
              }}
            />
          </div>
        </motion.div>

        {/* Hero Text Left */}
        <motion.div
          style={{ y: heroContentY }}
          className="absolute left-0 top-1/2 -translate-y-[40%] z-10 max-w-[560px] flex flex-col items-start text-left pl-[6%]"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold tracking-[0.05em] uppercase leading-[1.05] font-display mb-20"
          >
            {validatedData.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.05rem,1.6vw,1.25rem)] font-medium text-white/85 leading-[1.8] mb-16"
          >
            {validatedData.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-5 mb-14"
          >
            {validatedData.ctaButtons.map((button) => (
              <CTAButton
                key={button.href}
                button={button}
                shouldReduceMotion={shouldReduceMotion}
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
      </div>

      {/* Mobile: ELITE - IMAGE MOVED UP 25% */}
      <div className="lg:hidden">
        {/* Hero Section - Full Viewport */}
        <div className="relative h-screen bg-black overflow-hidden">
          
          {/* MASSIVE Product Image - MOVED UP 25% */}
          <div className="absolute left-0 right-0 top-[-12vh] bottom-0 flex items-start justify-center">
            <img
              src="/images/footplate-hero.png"
              alt={validatedData.backgroundImageAlt}
              className="w-[150%] max-w-[880px] h-auto object-contain"
              style={{
                filter: 'drop-shadow(0 40px 90px rgba(0,0,0,0.7)) drop-shadow(0 0 80px rgba(220,38,38,0.35))'
              }}
            />
          </div>

          {/* Headline - Higher Position */}
          <div className="absolute bottom-[15vh] left-0 right-0 z-10 px-5 pb-6 pt-32 bg-gradient-to-t from-black via-black to-transparent">
            <h1 className="text-[1.85rem] leading-[1.1] font-extrabold text-white tracking-tight text-center">
              {validatedData.headline}
            </h1>
          </div>
        </div>

        {/* Content Section - Scroll to Reveal */}
        <div className="relative bg-black py-14 px-6">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-[1.05rem] text-white/80 leading-[1.55] mb-10">
              {validatedData.subheadline}
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {validatedData.ctaButtons.map((button) => (
                <CTAButton
                  key={button.href}
                  button={button}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>

            <p className="text-[9px] tracking-[0.2em] text-white/50 uppercase leading-[1.6]">
              {validatedData.tagline}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
})

export default HeroSection