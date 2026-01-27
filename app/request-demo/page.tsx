'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import DemoRequestForm from '@/components/forms/DemoRequestForm'
import { Calendar, Users, Target } from 'lucide-react'

// Animated gradient orb component
const AnimatedGradientOrb = ({ 
  className = '', 
  delay = 0,
  shouldReduceMotion = false,
}: { 
  className?: string
  delay?: number
  shouldReduceMotion?: boolean
}) => {
  if (shouldReduceMotion) {
    return <div className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl opacity-30`} style={{ transform: 'translateZ(0)' }} aria-hidden="true" />
  }
  
  return (
    <motion.div
      className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl will-change-[opacity]`}
      style={{ transform: 'translateZ(0)' }}
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

export default function RequestDemoPage() {
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
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{ scaleX }}
        aria-hidden="true"
      >
        <div className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 blur-sm opacity-50" />
      </motion.div>

      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(8rem, 15vw, 12rem)',
            paddingBottom: 'clamp(4rem, 8vw, 6rem)',
            transform: 'translateZ(0)'
          }}
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-0 right-1/4 w-96 h-96" 
            delay={0}
            shouldReduceMotion={shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-0 left-1/4 w-80 h-80" 
            delay={2}
            shouldReduceMotion={shouldReduceMotion}
          />

          <div className="mx-auto max-w-4xl px-6">
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-[0.05em] text-white mb-6 text-center"
            >
              Request a Demo
            </motion.h1>
            <motion.div
              variants={fadeUp}
              className="flex justify-center mb-12"
            >
              <p className="text-xl sm:text-2xl text-white/80 text-center leading-relaxed max-w-2xl">
                Experience EXIQX<sup className="text-xs">™</sup> Performance equipment firsthand. Schedule a demonstration 
                to see how our elite biomechanical systems can transform your training facility.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              variants={staggerChildren}
              className="grid sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto"
            >
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 p-4 rounded-2xl bg-red-500/20 border border-red-500/20">
                  <Calendar className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Schedule Your Demo</h3>
                <p className="text-sm text-white/60">Choose a time that works for you</p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 p-4 rounded-2xl bg-red-500/20 border border-red-500/20">
                  <Users className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Guidance</h3>
                <p className="text-sm text-white/60">Our team will guide you through every feature</p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 p-4 rounded-2xl bg-red-500/20 border border-red-500/20">
                  <Target className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
                <p className="text-sm text-white/60">Tailored to your facility's needs</p>
              </motion.div>
            </motion.div>

            {/* Demo Request Form */}
            <DemoRequestForm />
          </div>
        </motion.section>
      </main>
    </>
  )
}

