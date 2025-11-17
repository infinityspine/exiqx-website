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
// DEFAULT CONTENT (UPDATED PHRASE)
// ============================================================================

const DEFAULT_CONTENT = {
  id: 'footplate',
  backgroundImage: '/hero-footplate.jpg',
  backgroundImageAlt: 'ExIQx Performance rack-mounted footplate in professional gym setting',
  headline: 'Patent-Protected Closed-Chain Forefoot Training.',

  // UPDATED LINE — ONLY CHANGE REQUESTED
  subheadline:
    'Engineered for elite performance. Clinically validated. Trusted by athletes who refuse compromise.',

  subheadlineAccent: undefined,
  tagline: 'Patent-Protected • Precision-Engineered • Built in Arizona',
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
    whileHover: shouldReduce
      ? {}
      : {
          scale: 1.05,
          boxShadow: '0 10px 30px rgba(220,38,38,0.55)'
        },
    whileTap: shouldReduce ? {} : { scale: 0.96 }
  },
  secondary: {
    whileHover: shouldReduce
      ? {}
      : {
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
        ${
          isPrimary
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
  ctaButtons = DEFAULT_CONTENT.ctaButtons
}: HeroSectionProps) {
  const shouldReduceMotion = !!useReducedMotion()
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
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
      {/* DESKTOP HERO */}
      <div className="hidden lg:block relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        {/* BACKGROUND ORB */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600/30 via-red-900/10 to-transparent blur-3xl"
          />
        </div>

        {/* FLOATING PARTICLES */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        )}

        {/* PRODUCT IMAGE */}
        <motion.div
          style={{ y: heroImageY }}
          className="pointer-events-none absolute right-[4%] top-1/2 -translate-y-1/2 z-20"
        >
          <div className="relative">
            <img
              src="/images/footplate-hero.png"
              alt={validatedData.backgroundImageAlt}
              className="relative w-[75vw] max-w-[1100px] h-auto"
              style={{
                filter:
                  'drop-shadow(0 40px 120px rgba(0,0,0,0.9)) drop-shadow(0 0 80px rgba(220,38,38,0.25))',
                transform: 'scale(1.55)'
              }}
            />
          </div>
        </motion.div>

        {/* HERO TEXT */}
        <motion.div
          style={{ y: heroContentY }}
          className="absolute left-[5%] top-1/2 -translate-y-[45%] z-30 max-w-[840px]"
          variants={staggerChildren}
        >
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3.5rem,7.5vw,7rem)] font-black tracking-[-0.02em] uppercase leading-[0.95] font-display mb-28"
          >
            {validatedData.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.1rem,1.8vw,1.4rem)] font-medium text-white/90 leading-[1.7] mb-20 max-w-[600px]"
          >
            {validatedData.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 mb-20">
            {validatedData.ctaButtons.map(button => (
              <CTAButton key={button.href} button={button} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-red-500/60 to-transparent" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">
              {validatedData.tagline}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* MOBILE HERO */}
      <div className="lg:hidden bg-[#0a0a0a] relative">
        <div className="relative w-full -mt-40 mb-0 flex items-start justify-center">
          <img
            src="/images/footplate-hero.png"
            alt={validatedData.backgroundImageAlt}
            className="w-[120%] max-w-[620px] h-auto object-contain relative z-10"
            style={{
              filter:
                'drop-shadow(0 40px 80px rgba(0,0,0,0.8)) drop-shadow(0 0 70px rgba(220,38,38,0.4))'
            }}
          />
        </div>

        <div className="relative px-6 pb-8 -mt-44">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-[clamp(1.65rem,5.5vw,2.2rem)] leading-[1.06] font-black text-white tracking-tight mb-4">
              {validatedData.headline}
            </h1>

            <p className="text-[clamp(0.92rem,2.9vw,1.02rem)] text-white/88 leading-[1.58] mb-9">
              {validatedData.subheadline}
            </p>

            <div className="flex flex-col gap-4 mb-12">
              {validatedData.ctaButtons.map(button => (
                <CTAButton key={button.href} button={button} shouldReduceMotion={shouldReduceMotion} />
              ))}
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
              <p className="text-[9px] tracking-[0.28em] text-white/50 uppercase leading-[1.6] font-medium">
                {validatedData.tagline}
              </p>
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
})

export default HeroSection