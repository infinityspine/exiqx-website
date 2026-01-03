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
// DEFAULT CONTENT - ELITE COPY
// ============================================================================

const DEFAULT_CONTENT = {
  id: 'footplate',
  backgroundImage: '/hero-footplate.jpg',
  backgroundImageAlt: 'ExIQx Performance rack-mounted footplate in professional gym setting',
  headline: 'Patent-Pending Plantarflexion Training Equipment.',
  subheadline: 'Precision-engineered for professional facilities. Authentic ground-force mechanics without spinal loading.',
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

        {/* PRODUCT IMAGE - GPU ACCELERATED */}
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
            
            {shouldReduceMotion ? (
              <img
                src="/images/footplate-hero.png"
                alt={validatedData.backgroundImageAlt}
                className="relative w-[80vw] max-w-[1200px] h-auto"
                style={{
                  filter:
                    'drop-shadow(0 50px 140px rgba(0,0,0,0.95)) drop-shadow(0 0 90px rgba(220,38,38,0.3))',
                  transform: 'translateZ(0)',
                }}
              />
            ) : (
              <video
                className="relative w-[80vw] max-w-[1200px] h-auto"
                style={{
                  filter:
                    'drop-shadow(0 50px 140px rgba(0,0,0,0.95)) drop-shadow(0 0 90px rgba(220,38,38,0.3))',
                  transform: 'translateZ(0)',
                }}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/images/footplate-hero.png"
              >
                <source src="/videos/rack-footplate-hero.webm" type="video/webm" />
                <source src="/videos/rack-footplate-hero.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </motion.div>

        {/* MASSIVE HERO TEXT - GPU ACCELERATED */}
        <motion.div
          style={{ 
            y: heroContentY,
            willChange: 'transform',
          }}
          className="absolute left-[4%] top-1/2 -translate-y-[45%] z-30 max-w-[950px] will-change-transform"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {/* GIANT HEADLINE */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(4rem,8.5vw,8rem)] font-black tracking-[-0.025em] uppercase leading-[0.92] font-display mb-32"
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
            className="text-[clamp(1.2rem,2.1vw,1.65rem)] font-medium text-white/92 leading-[1.65] mb-22 max-w-[650px]"
            style={{ transform: 'translateZ(0)' }}
          >
            {validatedData.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-5 mb-22"
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
      <div className="lg:hidden bg-[#0a0a0a] overflow-x-hidden pt-[clamp(3.5rem,12vw,5.5rem)] pb-[clamp(2rem,6vw,3rem)]">
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

        {/* Product Image - Optimized */}
        <div className="relative w-full mt-[clamp(0.25rem,2vw,1rem)] mb-[clamp(0.75rem,3vw,1.5rem)] flex items-center justify-center h-[clamp(220px,34vh,300px)]">
          {!shouldReduceMotion && (
            <motion.div
              animate={{
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-radial from-red-500/40 via-red-600/15 to-transparent blur-3xl pointer-events-none"
              style={{ willChange: 'opacity' }}
            />
          )}
          
          {shouldReduceMotion ? (
            <img
              src="/images/footplate-hero.png"
              alt={validatedData.backgroundImageAlt}
              className="w-[112%] max-w-[620px] h-full object-contain relative z-10"
              style={{
                filter:
                  'drop-shadow(0 40px 80px rgba(0,0,0,0.8)) drop-shadow(0 0 70px rgba(220,38,38,0.4))',
                transform: 'translateZ(0)',
              }}
            />
          ) : (
            <video
              className="w-[112%] max-w-[620px] h-full object-contain relative z-10"
              style={{
                filter:
                  'drop-shadow(0 40px 80px rgba(0,0,0,0.8)) drop-shadow(0 0 70px rgba(220,38,38,0.4))',
                transform: 'translateZ(0)',
              }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/footplate-hero.png"
            >
              <source src="/videos/rack-footplate-hero.webm" type="video/webm" />
              <source src="/videos/rack-footplate-hero.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        {/* Text Content */}
        <div className="relative px-8 pt-[clamp(1.1rem,4.5vw,1.8rem)] pb-[clamp(2rem,6vw,3rem)] -mt-[clamp(2rem,7vw,3.5rem)] overflow-hidden">
          <div className="max-w-xl mx-auto text-center">
            
            {/* Headline */}
            <h1 
              className="text-[clamp(1.65rem,5.5vw,2.2rem)] leading-[1.06] font-black text-white tracking-tight mb-[clamp(0.9rem,3.5vw,1.35rem)] break-words mx-auto"
              style={{
                textShadow: '0 4px 40px rgba(0,0,0,0.9), 0 0 80px rgba(220,38,38,0.4)',
                transform: 'translateZ(0)',
                textAlign: 'center',
                maxWidth: '100%',
              }}
            >
              <span>PATENT-PENDING</span>
              <br />
              <span
                style={{
                  hyphens: 'none',
                  WebkitHyphens: 'none',
                  MozHyphens: 'none',
                  msHyphens: 'none',
                  wordBreak: 'normal',
                  overflowWrap: 'normal',
                  whiteSpace: 'nowrap',
                }}
              >
                PLANTARFLEXION
              </span>
              <br />
              <span>TRAINING EQUIPMENT.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[clamp(0.92rem,2.9vw,1.02rem)] text-white/88 leading-[1.58] mb-[clamp(1.05rem,4.8vw,1.7rem)]">
              {validatedData.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-[clamp(0.7rem,3vw,0.95rem)] mb-[clamp(1.5rem,5.5vw,2rem)]">
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