'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import SectionDivider from '@/components/ui/SectionDivider'
import { Zap, Target, Award, TrendingUp } from 'lucide-react'

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
  const shouldReduceMotion = !!reducedMotion
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })



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

      <main className="min-h-screen bg-black text-white">
        {/* Hero Intro Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(6rem, 12vw, 10rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            transform: 'translateZ(0)'
          }}
        >
          <div className="relative overflow-hidden">
            {/* Animated gradient orbs with scroll parallax */}
            <AnimatedGradientOrb 
              className="top-0 right-1/4 w-96 h-96" 
              delay={0}
              shouldReduceMotion={!!shouldReduceMotion}
            />
            <AnimatedGradientOrb 
              className="bottom-0 left-1/4 w-80 h-80 bg-blue-500/10" 
              delay={2}
              shouldReduceMotion={!!shouldReduceMotion}
            />

            <div className="mx-auto max-w-4xl px-6">
              <motion.h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                  marginBottom: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                About
              </motion.h1>
            </div>
          </div>
        </motion.section>

        <SectionDivider />

        {/* Our Philosophy Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            transform: 'translateZ(0)'
          }}
        >
          <div className="relative overflow-hidden">
            {/* Animated gradient orb with scroll parallax */}
            <AnimatedGradientOrb 
              className="top-1/4 left-0 w-72 h-72" 
              delay={1}
              shouldReduceMotion={!!shouldReduceMotion}
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
                }}
              >
                Our Philosophy
              </motion.h2>
            </div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden will-change-transform"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                transform: 'translateZ(0)'
              }}
              whileHover={shouldReduceMotion ? {} : {
                y: -3,
                scale: 1.02,
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
            >
              <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  ExIQx Performance is a commercial-grade performance equipment company specializing in patent-protected biomechanical training systems for elite athletic performance and clinical rehabilitation.
                </p>
                <p>
                  We design professional training equipment anchored in mechanical truth—not trends or compromise. Every component respects the physics that govern human performance, engineered for D1 programs, PT clinics, and professional training facilities.
                </p>
              </div>
            </motion.div>
            </div>
          </div>
        </motion.section>

        <SectionDivider />

        {/* Our Approach Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            transform: 'translateZ(0)'
          }}
        >
          <div className="relative overflow-hidden">
            {/* Animated gradient orb with scroll parallax */}
            <AnimatedGradientOrb 
              className="top-0 right-1/3 w-80 h-80" 
              delay={0.5}
              shouldReduceMotion={!!shouldReduceMotion}
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
                }}
              >
                Our Approach
              </motion.h2>
            </div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden will-change-transform"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                transform: 'translateZ(0)'
              }}
              whileHover={shouldReduceMotion ? {} : {
                y: -3,
                scale: 1.02,
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
            >
              <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  Our commercial-grade equipment honors natural human mechanics, joint kinematics, and force vector accuracy through patent-protected closed-chain plantarflexion technology.
                </p>
                <p>
                  Built for D1 strength & conditioning programs, physical therapy clinics, professional teams, and elite performance centers who demand training tools that translate directly to athletic performance and clinical outcomes.
                </p>
              </div>
            </motion.div>
            </div>
          </div>
        </motion.section>

        <SectionDivider />

        {/* Our Standards Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            transform: 'translateZ(0)'
          }}
        >
          <div className="relative overflow-hidden">
            {/* Animated gradient orb with scroll parallax */}
            <AnimatedGradientOrb 
              className="bottom-0 left-1/4 w-96 h-96 bg-blue-500/10" 
              delay={1.5}
              shouldReduceMotion={!!shouldReduceMotion}
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
                }}
              >
                Our Standards
              </motion.h2>
            </div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden will-change-transform"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                transform: 'translateZ(0)'
              }}
              whileHover={shouldReduceMotion ? {} : {
                y: -3,
                scale: 1.02,
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
            >
              <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  Movement fidelity is non-negotiable. Every commercial-grade product is engineered with disciplined minimalism, mechanical precision, and patent-protected technology.
                </p>
                <p>
                  We eliminate noise. We refine motion. We deliver professional performance equipment that meets the demands of elite training environments.
                </p>
              </div>
            </motion.div>
            </div>
          </div>
        </motion.section>

        <SectionDivider />

        {/* Our Mission Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            transform: 'translateZ(0)'
          }}
        >
          <div className="relative overflow-hidden">
            {/* Animated gradient orb with scroll parallax */}
            <AnimatedGradientOrb 
              className="top-1/2 left-1/4 w-96 h-96" 
              delay={2}
              shouldReduceMotion={!!shouldReduceMotion}
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
                }}
              >
                Our Mission
              </motion.h2>
            </div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden will-change-transform"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                transform: 'translateZ(0)'
              }}
              whileHover={shouldReduceMotion ? {} : {
                y: -3,
                scale: 1.02,
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
            >
              <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  We serve D1 programs, PT clinics, professional teams, and elite performance centers who pursue biomechanical authenticity. ExIQx exists for the relentless pursuit of mechanical perfection in commercial-grade training equipment.
                </p>
                <p>
                  Advancing athletic performance and injury prevention through patent-protected technology and precision engineering.
                </p>
              </div>
            </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  )
}
