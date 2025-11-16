'use client'

import { memo, useRef } from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import { z } from 'zod'
import { heroFade, fadeUp, staggerChildren } from '@/lib/motionPresets'
import { useParallax } from '@/hooks/useParallax'

// =======================================
// SCHEMAS
// =======================================

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

// =======================================
// DEFAULT CONTENT
// =======================================

const DEFAULT_CONTENT = {
  id: 'footplate',
  backgroundImage: '/hero-footplate.jpg',
  backgroundImageAlt: 'ExIQx Performance rack-mounted footplate in professional gym setting',
  headline: 'Patent-Protected Closed-Chain Forefoot Training.',
  subheadline:
    'Commercial-grade biomechanical equipment trusted by D1 programs, PT clinics, and professional athletes.',
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

// =======================================
// BUTTON ANIMATIONS
// =======================================

const createButtonAnimations = (shouldReduce: boolean) => ({
  primary: {
    whileHover: shouldReduce ? {} : { scale: 1.05, boxShadow: '0 10px 30px rgba(220,38,38,0.55)' },
    whileTap: shouldReduce ? {} : { scale: 0.96 }
  },
  secondary: {
    whileHover: shouldReduce
      ? {}
      : { scale: 1.05, backgroundColor: 'rgba(255,255,255,0.14)', borderColor: 'rgba(255,255,255,0.9)' },
    whileTap: shouldReduce ? {} : { scale: 0.96 }
  }
})

const CTAButton = memo(function CTAButton({ button, shouldReduceMotion }: any) {
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

// =======================================
// MAIN HERO COMPONENT
// =======================================

const HeroSection = memo(function HeroSection(props: HeroSectionProps) {
  const {
    id = DEFAULT_CONTENT.id,
    backgroundImage = DEFAULT_CONTENT.backgroundImage,
    backgroundImageAlt = DEFAULT_CONTENT.backgroundImageAlt,
    headline = DEFAULT_CONTENT.headline,
    subheadline = DEFAULT_CONTENT.subheadline,
    subheadlineAccent = DEFAULT_CONTENT.subheadlineAccent,
    tagline = DEFAULT_CONTENT.tagline,
    ctaButtons = DEFAULT_CONTENT.ctaButtons
  } = props

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
      aria-label="Hero section"
      className="relative"
      initial="hidden"
      animate="visible"
      variants={heroFade}
    >
      {/* =========================== */}
      {/* DESKTOP (unchanged) */}
      {/* =========================== */}
      <div className="hidden lg:block relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        {/* Desktop Product Image */}
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
                filter:
                  'drop-shadow(0 30px 90px rgba(0,0,0,0.7)) drop-shadow(0 0 50px rgba(220,38,38,0.15))',
                transform: 'scale(2.1)'
              }}
            />
          </div>
        </motion.div>

        {/* Desktop Text */}
        <motion.div
          style={{ y: heroContentY }}
          className="absolute left-0 top-1/2 -translate-y-[38%] z-10 max-w-[560px] flex flex-col items-start text-left pl-[6%]"
          variants={staggerChildren}
        >
          <motion.h1 variants={fadeUp} className="text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold uppercase leading-[1.05] font-display mb-16">
            {validatedData.headline}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[clamp(1.05rem,1.6vw,1.25rem)] text-white/85 leading-[1.8] mb-12">
            {validatedData.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 mb-14">
            {validatedData.ctaButtons.map(button => (
              <CTAButton key={button.href} button={button} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </motion.div>

          <motion.p className="text-[10px] uppercase tracking-[0.25em] text-white/60">{validatedData.tagline}</motion.p>
        </motion.div>
      </div>

      {/* =========================== */}
      {/* MOBILE — tighten spacing */}
      {/* =========================== */}
      <div className="lg:hidden w-full bg-black">

        {/* HERO IMAGE — reduced vertical padding */}
        <div className="w-full pt-6 pb-2 flex justify-center">
          <img
            src="/images/footplate-hero.png"
            alt={validatedData.backgroundImageAlt}
            className="w-[92%] h-auto object-contain"
            style={{
              transform: 'scale(1.25)',
              filter:
                'drop-shadow(0 35px 90px rgba(0,0,0,0.7)) drop-shadow(0 0 60px rgba(220,38,38,0.25))'
            }}
          />
        </div>

        {/* TEXT + CTA */}
        <div className="px-6 pb-16 flex flex-col items-center text-center max-w-lg mx-auto">

          <h1 className="text-[1.85rem] leading-[1.12] font-extrabold text-white tracking-tight mb-4">
            {validatedData.headline}
          </h1>

          <p className="text-[0.98rem] leading-[1.55] text-white/80 max-w-[95%] mb-8">
            {validatedData.subheadline}
          </p>

          <div className="flex flex-col w-full gap-4 mb-8">
            {validatedData.ctaButtons.map(button => (
              <CTAButton key={button.href} button={button} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </div>

          <p className="text-[8px] tracking-[0.20em] text-white/45 uppercase leading-[1.5]">
            {validatedData.tagline}
          </p>

        </div>
      </div>
    </motion.section>
  )
})

export default HeroSection