'use client'

import { memo, useEffect, useRef } from 'react'
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
// DEFAULT CONTENT - ELITE COPY
// ============================================================================

const DEFAULT_CONTENT = {
  id: 'footplate',
  backgroundImage: '/hero-footplate.jpg',
  backgroundImageAlt: 'ExIQx Performance rack-mounted footplate in professional gym setting',
  headline: 'GROUND-FORCE TRANSMISSION',
  subheadline: 'Ground force transmits through the ball of the foot.\nTrain the interface.',
  subheadlineAccent: undefined,
  tagline: 'Patent-Pending • Precision-Engineered • Made in Arizona',
  ctaButtons: [
    {
      label: 'Pre-Order',
      href: '/request-demo',
      variant: 'primary' as const,
      ariaLabel: 'Pre-order the ExIQx footplate'
    },
    {
      label: 'Learn More',
      href: '/early-access',
      variant: 'secondary' as const,
      ariaLabel: 'Learn more about ExIQx equipment'
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
        rounded-xl px-8 py-3.5 sm:py-4 text-[11px] font-semibold uppercase tracking-[0.2em] 
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
// MAIN HERO COMPONENT - ELITE VERSION (PERFORMANCE OPTIMIZED)
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
  const desktopVideoRef = useRef<HTMLVideoElement>(null)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)

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

  const renderSubheadlineLines = (text: string) => {
    const lines = text.split('\n')
    return lines.map((line, index) => {
      const isLast = index === lines.length - 1
      return (
        <span
          key={`${index}-${line}`}
          className={isLast ? 'block text-white/85' : 'block'}
        >
          {line}
        </span>
      )
    })
  }

  useEffect(() => {
    if (!shouldReduceMotion) return
    ;[desktopVideoRef.current, mobileVideoRef.current].forEach((videoEl) => {
      if (!videoEl) return
      videoEl.pause()
      try {
        videoEl.currentTime = 0
      } catch {
        // no-op (some browsers may restrict currentTime changes before metadata is loaded)
      }
    })
  }, [shouldReduceMotion])

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
      {/* DESKTOP - ELITE */}
      <div className="hidden lg:block relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        {/* OPTIMIZED GRADIENT ORB - Simpler animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.25, 0.35, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-red-600/40 via-red-900/15 to-transparent blur-3xl"
            style={{ willChange: 'opacity' }}
          />
        </div>

        {/* REDUCED PARTICLES - Only 8 for performance */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  willChange: 'transform, opacity'
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}

        {/* PRODUCT VIDEO (ALPHA WEBM) - GPU ACCELERATED */}
        <motion.div
          style={{ 
            y: heroImageY,
            willChange: 'transform',
          }}
          className="pointer-events-none absolute right-[-11%] top-1/2 -translate-y-1/2 z-20 will-change-transform"
        >
          <div className="relative">
            {/* SIMPLIFIED SPOTLIGHT - Less intensive */}
            {!shouldReduceMotion && (
              <motion.div
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-radial from-red-500/40 via-red-600/10 to-transparent blur-3xl"
                style={{
                  width: '120%',
                  height: '120%',
                  left: '-10%',
                  top: '-10%',
                  willChange: 'opacity'
                }}
              />
            )}
            
            <video
              ref={desktopVideoRef}
              className="relative w-[80vw] max-w-[1200px] h-auto bg-transparent"
              style={{
                filter:
                  'drop-shadow(0 50px 140px rgba(0,0,0,0.95)) drop-shadow(0 0 90px rgba(220,38,38,0.3))',
                transform: 'translateZ(0)',
              }}
              src="/videos/exiqx-ground-force-transmission-hero-alpha.webm"
              autoPlay={!shouldReduceMotion}
              loop={!shouldReduceMotion}
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              aria-label="ExIQx rack-mounted product hero animation with transparent background"
              onCanPlay={() => {
                if (!shouldReduceMotion) return
                const v = desktopVideoRef.current
                if (!v) return
                v.pause()
                try {
                  v.currentTime = 0
                } catch {
                  // no-op
                }
              }}
            />
          </div>
        </motion.div>

        {/* LEFT-SIDE VIGNETTE FOR TEXT READABILITY (does not cover the right-side video) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 z-25 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

        {/* MASSIVE HERO TEXT - GPU ACCELERATED */}
        <motion.div
          style={{ 
            y: heroContentY,
            willChange: 'transform',
          }}
          className="absolute left-[6%] top-1/2 -translate-y-[45%] z-30 max-w-[950px] will-change-transform"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {/* GIANT HEADLINE */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(5.15rem,10.8vw,10.6rem)] font-black tracking-[0.02em] uppercase leading-[0.92] font-display pt-16 pb-8 mb-12"
            style={{
              textShadow: '0 6px 40px rgba(0,0,0,0.9), 0 0 80px rgba(220,38,38,0.35)',
              transform: 'translateZ(0)'
            }}
          >
            {validatedData.headline}
          </motion.h1>

          {/* ENHANCED SUBHEADLINE */}
          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.51rem,2.65vw,2.11rem)] font-medium text-white/95 leading-[1.75] mb-10 max-w-[650px]"
            style={{ transform: 'translateZ(0)' }}
          >
            {renderSubheadlineLines(validatedData.subheadline)}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 mb-22"
          >
            {validatedData.ctaButtons.map((button) => (
              <CTAButton
                key={button.href}
                button={button}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </motion.div>

          {/* TAGLINE */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            <div 
              className="w-16 h-[1.5px] bg-gradient-to-r from-red-500/80 to-transparent"
              style={{
                boxShadow: '0 0 12px rgba(220,38,38,0.4)'
              }}
            />
            <p className="text-[11.5px] uppercase tracking-[0.32em] text-white/60 font-medium">
              {validatedData.tagline}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* MOBILE - ELITE (OPTIMIZED) */}
      <div className="lg:hidden relative bg-[#0a0a0a] overflow-x-hidden pt-[clamp(3rem,10vw,4.25rem)] pb-[clamp(1.5rem,5vw,2rem)]">
        {/* Simplified Background Effects */}
        {!shouldReduceMotion && (
          <>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  opacity: [0.4, 0.5, 0.4],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-red-600/50 via-red-900/20 to-transparent blur-3xl"
                style={{ willChange: 'opacity' }}
              />
            </div>
            {/* Reduced particles for mobile - only 5 */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    willChange: 'transform, opacity'
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* Product Video (Alpha WebM) - Background Layer (behind text) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex items-start justify-center pt-[clamp(2.75rem,10vw,4.25rem)]">
          <div className="relative w-full max-w-[820px] h-[42vh] max-h-[320px]">
            {!shouldReduceMotion && (
              <motion.div
                animate={{
                  opacity: [0.45, 0.6, 0.45],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-radial from-red-500/40 via-red-600/15 to-transparent blur-3xl"
                style={{ willChange: 'opacity' }}
              />
            )}

            <video
              ref={mobileVideoRef}
              className="absolute right-[-12%] top-1/2 -translate-y-1/2 w-[122%] max-w-[760px] h-full object-contain bg-transparent opacity-35 sm:opacity-50 md:opacity-70"
              style={{
                filter:
                  'drop-shadow(0 40px 80px rgba(0,0,0,0.8)) drop-shadow(0 0 70px rgba(220,38,38,0.4))',
                transform: 'translateZ(0)',
              }}
              src="/videos/exiqx-ground-force-transmission-hero-alpha.webm"
              autoPlay={!shouldReduceMotion}
              loop={!shouldReduceMotion}
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              aria-label="ExIQx product hero animation with transparent background"
              onCanPlay={() => {
                if (!shouldReduceMotion) return
                const v = mobileVideoRef.current
                if (!v) return
                v.pause()
                try {
                  v.currentTime = 0
                } catch {
                  // no-op
                }
              }}
            />
          </div>
        </div>

        {/* Mobile/Tablet left-side vignette for readability (keeps right side clear for alpha video) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[62%] sm:w-[58%] z-[1] bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

        {/* Spacer to prevent text overlapping the absolutely-positioned hero video */}
        <div
          aria-hidden="true"
          className="relative z-[2] h-[42vh] max-h-[320px] min-h-[240px] sm:min-h-[260px]"
        />

        {/* Text Content */}
        <div className="relative z-10 px-4 sm:px-6 mt-[clamp(1.25rem,5vw,2rem)] pt-[clamp(1rem,4vw,1.4rem)] pb-[clamp(1.25rem,4.5vw,1.75rem)]">
          <div className="max-w-xl mx-auto text-center">
            
            {/* Headline */}
            <h1 
              className="text-[clamp(2.35rem,8.3vw,3.5rem)] leading-[1.02] font-black text-white uppercase tracking-[0.02em] pt-[clamp(1.9rem,6vw,2.45rem)] pb-[clamp(0.75rem,3vw,1.1rem)] mb-[clamp(2.25rem,7vw,3rem)] break-words mx-auto"
              style={{
                textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 0 80px rgba(220,38,38,0.4)',
                textAlign: 'center',
                maxWidth: '100%',
              }}
            >
              {validatedData.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-[clamp(1.27rem,4.2vw,1.49rem)] text-white/95 leading-[1.75] max-w-[650px] mx-auto mb-[clamp(2.2rem,6.5vw,2.5rem)]">
              {renderSubheadlineLines(validatedData.subheadline)}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-2.5 mb-[clamp(1rem,3.5vw,1.25rem)]">
              {validatedData.ctaButtons.map((button) => (
                <CTAButton
                  key={button.href}
                  button={button}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>

            {/* Tagline */}
            <div className="flex items-center justify-center gap-3">
              <div 
                className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/70 to-transparent"
                style={{
                  boxShadow: '0 0 10px rgba(220,38,38,0.35)'
                }}
              />
              <p className="text-[9px] tracking-[0.28em] text-white/55 uppercase leading-[1.6] font-medium">
                {validatedData.tagline}
              </p>
              <div 
                className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/70 to-transparent"
                style={{
                  boxShadow: '0 0 10px rgba(220,38,38,0.35)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
})

export default HeroSection