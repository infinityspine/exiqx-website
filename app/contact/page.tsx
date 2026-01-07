'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import SectionDivider from '@/components/ui/SectionDivider'
import { Mail, Clock } from 'lucide-react'

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

export default function ContactPage() {
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

      <main className="min-h-screen bg-black text-white overflow-x-hidden">
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
              Contact
            </motion.h1>
            
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
                <p>
                  ExIQx Performance provides precision-engineered support for technical specifications, facility integrations, and custom performance solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <SectionDivider />

        {/* Get In Touch Section */}
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
                  <Mail className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                }}
              >
                Get In Touch
              </motion.h2>
            </div>

            <motion.div
              variants={fadeUp}
              style={{ transform: 'translateZ(0)' }}
              className="will-change-transform"
            >
              <motion.a
                href="mailto:support@exiqxperformance.com"
                className="group relative block bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden will-change-transform"
                style={{ padding: 'clamp(2rem, 4vw, 3rem)', transform: 'translateZ(0)' }}
                whileHover={shouldReduceMotion ? {} : {
                  y: -6,
                  scale: 1.03,
                  borderColor: 'rgba(239, 68, 68, 0.6)',
                  transition: { type: "spring", stiffness: 180, damping: 20 }
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent transition-all duration-500" />
                <div className="relative flex items-center justify-center gap-4">
                  <Mail className="w-6 h-6 text-red-500" />
                  <span className="text-xl sm:text-2xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                    support@exiqxperformance.com
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        <SectionDivider />

        {/* Response Time Section */}
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
                  <Clock className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                }}
              >
                Response Time
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
                <p>
                  Responses within 24–48 hours. Dedicated consultation available for bulk orders and facility partnerships.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  )
}
