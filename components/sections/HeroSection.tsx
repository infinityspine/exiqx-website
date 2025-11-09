'use client'

import { memo, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
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
// CONSTANTS
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
  const shouldReduceMotion = useReducedMotion() || false
  const containerRef = useRef<HTMLElement>(null)

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return

    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseXPos = (e.clientX - centerX) / (rect.width / 2)
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2)

    mouseX.set(mouseXPos)
    mouseY.set(mouseYPos)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

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
    <section
      ref={containerRef}
      id={validatedData.id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-screen items-center justify-center overflow-hidden px-6"
      aria-label="Hero section"
      style={{ perspective: '1000px' }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        {...variants.backgroundImage}
        style={{
          y: shouldReduceMotion ? 0 : backgroundY,
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
        }}
        className="pointer-events-none absolute inset-0 will-change-transform"
      >
        <Image
          src={validatedData.backgroundImage}
          alt={validatedData.backgroundImageAlt}
          fill
          priority={priority}
          quality={90}
          sizes="100vw"
          className="object-cover object-center scale-110"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black/95"
        aria-hidden="true"
      />

      {/* Content with Fade-out */}
      <motion.div
        style={{
          opacity: shouldReduceMotion ? 1 : contentOpacity,
          scale: shouldReduceMotion ? 1 : contentScale,
        }}
        className="relative z-10 flex max-w-5xl flex-col items-center text-center px-4"
      >
        <motion.h1
          {...variants.headline}
          className="text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold tracking-[0.05em] uppercase leading-[1.05] font-display mb-16 sm:mb-20"
        >
          {validatedData.headline}
        </motion.h1>

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

        <motion.p
          {...variants.tagline}
          className="text-[10px] uppercase tracking-[0.25em] text-white/60"
        >
          {validatedData.tagline}
        </motion.p>
      </motion.div>
    </section>
  )
})

export default HeroSection