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
  subheadline:
    'Commercial-grade biomechanical equipment trusted by D1 programs, PT clinics, and professional athletes.',
  tagline: 'Patent-Pending Technology • Commercial-Grade Construction • Engineered in Arizona',
  ctaButtons: [
    {
      label: 'Request Demo',
      href: '/request-demo',
      variant: 'primary' as const
    },
    {
      label: 'Request Early Access',
      href: '/early-access',
      variant: 'secondary' as const
    }
  ]
}

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

const CTAButton = memo(function CTAButton({
  button,
  shouldReduceMotion
}: {
  button: z.infer<typeof CTAButtonSchema>
  shouldReduceMotion: boolean
}) {
  const animations = {
    primary: {
      whileHover: shouldReduceMotion ? {} : {
        scale: 1.05,
        boxShadow: '0 10px 30px rgba(220,38,38,0.55)'
      },
      whileTap: shouldReduceMotion ? {} : { scale: 0.96 }
    },
    secondary: {
      whileHover: shouldReduceMotion ? {} : {
        scale: 1.05,
        backgroundColor: 'rgba(255,255,255,0.14)',
        borderColor: 'rgba(255,255,255,0.9)'
      },
      whileTap: shouldReduceMotion ? {} : { scale: 0.96 }
    }
  }

  const isPrimary = button.variant === 'primary'

  return (
    <motion.a
      href={button.href}
      aria-label={button.ariaLabel || button.label}
      {...animations[button.variant]}
      className={`
        rounded-xl px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] 
        transition-all duration-300
        ${isPrimary
          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-red-500/30'
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
    tagline,
    ctaButtons
  })

  return (
    <motion.section
      ref={containerRef}
      id={validatedData.id}
      className="relative"
      initial="hidden"
      animate="visible"
      variants={heroFade}
    >

      {/* =============================== */}
      {/* DESKTOP – UNCHANGED */}
      {/* =============================== */}
      <div className="hidden lg:block relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        <motion.div
          style={{ y: heroImageY }}
          className="absolute right-0 top-0 bottom-0 w-[55%] flex items-center justify-end pointer-events-none"
        >
          <div className="relative w-full h-[92vh] pr-[25%]">
            <img
              src="/images/footplate-hero.png"
              alt={validatedData.backgroundImageAlt}
              className="w-full h-full object-contain object-right"
              style={{
                filter:
                  'drop-shadow(0 30px 90px rgba(0,0,0,0.7)) drop-shadow(0 0 50px rgba(220,38,38,0.15))',
                transform: 'scale(2.2)'
              }}
            />
          </div>
        </motion.div>

        <motion.div
          style={{ y: heroContentY }}
          className="absolute left-0 top-1/2 -translate-y-[40%] z-10 max-w-[560px] pl-[6%] flex flex-col"
          variants={staggerChildren}
        >
          <motion.h1 variants={fadeUp} className="text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold leading-[1.05] uppercase mb-20 text-white">
            {validatedData.headline}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[clamp(1.05rem,1.6vw,1.25rem)] text-white/85 mb-16">
            {validatedData.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-5 mb-14">
            {validatedData.ctaButtons.map(button => (
              <CTAButton key={button.href} button={button} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-[10px] tracking-[0.25em] text-white/60 uppercase">
            {validatedData.tagline}
          </motion.p>
        </motion.div>
      </div>

      {/* =============================== */}
      {/* MOBILE — OPTION A (APPLE STYLE) */}
      {/* =============================== */}
      <div className="lg:hidden relative h-[100vh] bg-black overflow-hidden">

        {/* Big centered hero image */}
        <motion.img
          style={{ y: heroImageY }}
          src="/images/footplate-hero.png"
          alt={validatedData.backgroundImageAlt}
          className="absolute inset-0 w-[165%] h-auto top-[6%] left-1/2 -translate-x-1/2 object-contain pointer-events-none"
          style={{
            filter:
              'drop-shadow(0 35px 90px rgba(0,0,0,0.8)) drop-shadow(0 0 70px rgba(220,38,38,0.25))'
          }}
        />

        {/* Gradient behind text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/60 to-black/90" />

        {/* CENTERED TEXT OVER IMAGE */}
        <motion.div
          style={{ y: heroContentY }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
          variants={staggerChildren}
        >
          <motion.h1
            variants={fadeUp}
            className="text-[1.85rem] leading-[1.15] font-extrabold text-white drop-shadow-xl"
          >
            {validatedData.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[0.95rem] text-white/85 leading-[1.55] max-w-xs mt-4 drop-shadow-md"
          >
            {validatedData.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 w-full max-w-xs mt-6"
          >
            {validatedData.ctaButtons.map(button => (
              <CTAButton key={button.href} button={button} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-[8px] tracking-[0.22em] text-white/50 uppercase mt-6"
          >
            {validatedData.tagline}
          </motion.p>
        </motion.div>
      </div>

    </motion.section>
  )
})

export default HeroSection