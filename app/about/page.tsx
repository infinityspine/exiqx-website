'use client'

import { motion, useScroll, useSpring, useReducedMotion, useTransform } from 'framer-motion'
import { Zap, Target, Award, TrendingUp } from 'lucide-react'

// Animation variants for smooth section reveals - optimized
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

// Premium separator component
const PremiumSeparator = () => (
  <div className="relative h-px max-w-7xl mx-auto" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }} aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent blur-sm" />
  </div>
)

// Animated gradient orb component - optimized for performance
const AnimatedGradientOrb = ({ 
  className = '', 
  delay = 0,
  shouldReduceMotion = false,
  style
}: { 
  className?: string
  delay?: number
  shouldReduceMotion?: boolean
  style?: any
}) => {
  if (shouldReduceMotion) {
    return <div className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl opacity-30`} style={{ ...style, transform: 'translateZ(0)' }} aria-hidden="true" />
  }
  
  return (
    <motion.div
      className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl will-change-[opacity]`}
      style={{ ...style, transform: 'translateZ(0)' }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3] 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay || 0
      }}
      aria-hidden="true"
    />
  )
}

export default function AboutPage() {
  const reducedMotion = useReducedMotion()
  const shouldReduceMotion = reducedMotion ?? false
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Parallax transforms for content containers
  const heroY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 0.15], [0, -50])
  const section1Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.1, 0.3], [50, -30])
  const section2Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.25, 0.45], [50, -30])
  const section3Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.4, 0.6], [50, -30])
  const section4Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.55, 0.75], [50, -30])

  // Heading blur-to-sharp reveals
  const heroHeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 0.1], [8, 0])
  const section1HeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.1, 0.2], [8, 0])
  const section2HeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.25, 0.35], [8, 0])
  const section3HeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.4, 0.5], [8, 0])
  const section4HeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.55, 0.65], [8, 0])

  // Scroll-responsive gradient orb transforms
  const orb1Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, -150])
  const orb2Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, 100])
  const orb3Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, -120])
  const orb4Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, 80])
  const orb5Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, -100])
  const orb6Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, 90])

  return (
    <>
      {/* Elite scroll progress indicator with glow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{ scaleX }}
        aria-hidden="true"
      >
        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-sm opacity-50" />
      </motion.div>

      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Intro Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative"
          style={{
            paddingTop: 'clamp(6rem, 12vw, 10rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)'
          }}
        >
          {/* Animated gradient orbs with scroll parallax */}
          <AnimatedGradientOrb 
            className="top-0 right-1/4 w-96 h-96" 
            delay={0}
            shouldReduceMotion={!!shouldReduceMotion}
            style={{ y: orb1Y }}
          />
          <AnimatedGradientOrb 
            className="bottom-0 left-1/4 w-80 h-80 bg-blue-500/10" 
            delay={2}
            shouldReduceMotion={!!shouldReduceMotion}
            style={{ y: orb2Y }}
          />

          <div className="mx-auto max-w-4xl px-6">
            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-[0.05em] text-white"
              style={{ 
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                filter: heroHeadingBlur ? `blur(${heroHeadingBlur}px)` : undefined
              }}
            >
              About
            </motion.h1>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Our Philosophy Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)'
          }}
        >
          {/* Animated gradient orb with scroll parallax */}
          <AnimatedGradientOrb 
            className="top-1/4 left-0 w-72 h-72" 
            delay={1}
            shouldReduceMotion={!!shouldReduceMotion}
            style={{ y: orb3Y }}
          />

          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.3 } }}
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -8, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                  filter: section1HeadingBlur ? `blur(${section1HeadingBlur}px)` : undefined
                }}
              >
                Our Philosophy
              </motion.h2>
            </div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                y: section1Y
              }}
              whileHover={shouldReduceMotion ? {} : {
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  ExIQx Performance exists at the convergence of biomechanics, precision engineering, and authentic ground-force movement science.
                </p>
                <p>
                  We design training systems anchored in mechanical truth—not trends or compromise. Every component respects the physics that govern human performance.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Our Approach Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)'
          }}
        >
          {/* Animated gradient orb with scroll parallax */}
          <AnimatedGradientOrb 
            className="top-0 right-1/3 w-80 h-80" 
            delay={0.5}
            shouldReduceMotion={!!shouldReduceMotion}
            style={{ y: orb4Y }}
          />

          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.3 } }}
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -8, 0],
                  rotate: [0, -3, 3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <Target className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                  filter: section2HeadingBlur ? `blur(${section2HeadingBlur}px)` : undefined
                }}
              >
                Our Approach
              </motion.h2>
            </div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                y: section2Y
              }}
              whileHover={shouldReduceMotion ? {} : {
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  Our equipment honors natural human mechanics, joint kinematics, and force vector accuracy.
                </p>
                <p>
                  Built for athletes and professionals who demand training tools that translate directly to performance.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Our Standards Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)'
          }}
        >
          {/* Animated gradient orb with scroll parallax */}
          <AnimatedGradientOrb 
            className="bottom-0 left-1/4 w-96 h-96 bg-blue-500/10" 
            delay={1.5}
            shouldReduceMotion={!!shouldReduceMotion}
            style={{ y: orb5Y }}
          />

          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.3 } }}
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                  filter: section3HeadingBlur ? `blur(${section3HeadingBlur}px)` : undefined
                }}
              >
                Our Standards
              </motion.h2>
            </div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                y: section3Y
              }}
              whileHover={shouldReduceMotion ? {} : {
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  Movement fidelity is non-negotiable. Every product is engineered with disciplined minimalism and mechanical precision.
                </p>
                <p>
                  We eliminate noise. We refine motion.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Our Mission Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="relative"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)'
          }}
        >
          {/* Animated gradient orb with scroll parallax */}
          <AnimatedGradientOrb 
            className="top-1/2 left-1/4 w-96 h-96" 
            delay={2}
            shouldReduceMotion={!!shouldReduceMotion}
            style={{ y: orb6Y }}
          />

          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.3 } }}
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -8, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                  filter: section4HeadingBlur ? `blur(${section4HeadingBlur}px)` : undefined
                }}
              >
                Our Mission
              </motion.h2>
            </div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                y: section4Y
              }}
              whileHover={shouldReduceMotion ? {} : {
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  We serve those who pursue biomechanical authenticity. ExIQx exists for the relentless pursuit of mechanical perfection.
                </p>
                <p>
                  Built for those who refuse to settle.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  )
}
