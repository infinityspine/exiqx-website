'use client'

import { useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import FootplateFeatures from '@/components/sections/FootplateFeatures'
import UseCases from '@/components/sections/UseCases'
import Testimonials from '@/components/sections/Testimonials'
import HomePageCTA from '@/components/sections/HomePageCTA'

// Animation variants for smooth section reveals with Apple-style easing
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

// Premium separator component
const PremiumSeparator = () => (
  <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent blur-sm" />
  </div>
)

// Optimized gradient orb component - simplified for performance
const AnimatedGradientOrb = ({ 
  className = '', 
  delay = 0,
  shouldReduceMotion = false
}: { 
  className?: string
  delay?: number
  shouldReduceMotion?: boolean
}) => {
  if (shouldReduceMotion) {
    return <div className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl`} aria-hidden="true" />
  }
  
  return (
    <motion.div
      className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl will-change-opacity`}
      style={{ transform: 'translateZ(0)' }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3] 
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      aria-hidden="true"
    />
  )
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Optimized parallax transforms - reduced to essential only
  const featuresY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.1, 0.3], [30, -30])
  const useCasesY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.3, 0.5], [30, -30])
  const testimonialsY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.5, 0.7], [30, -30])
  const ctaY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.7, 0.9], [30, -30])

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
        {/* Hero Section - NO WRAPPER, preserve existing animations */}
        <HeroSection />

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* FootplateFeatures Section with optimized parallax */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative will-change-transform"
        style={{ 
          y: featuresY,
          transform: 'translateZ(0)'
        }}
      >
        {/* Single optimized gradient orb */}
        <AnimatedGradientOrb 
          className="top-0 right-1/4 w-96 h-96" 
          delay={0}
          shouldReduceMotion={!!shouldReduceMotion}
        />
        <FootplateFeatures 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={!!shouldReduceMotion}
        />
      </motion.section>

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* UseCases Section with optimized parallax */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative will-change-transform"
        style={{ 
          y: useCasesY,
          transform: 'translateZ(0)'
        }}
      >
        {/* Single optimized gradient orb */}
        <AnimatedGradientOrb 
          className="top-1/4 left-0 w-72 h-72" 
          delay={1}
          shouldReduceMotion={!!shouldReduceMotion}
        />
        <UseCases 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={!!shouldReduceMotion}
        />
      </motion.section>

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* Testimonials Section with optimized parallax */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative will-change-transform"
        style={{ 
          y: testimonialsY,
          transform: 'translateZ(0)'
        }}
      >
        {/* Single optimized gradient orb */}
        <AnimatedGradientOrb 
          className="top-0 left-1/3 w-80 h-80" 
          delay={0.5}
          shouldReduceMotion={!!shouldReduceMotion}
        />
        <Testimonials 
          shouldReduceMotion={!!shouldReduceMotion}
        />
      </motion.section>

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* HomePageCTA Section with optimized parallax */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative will-change-transform"
        style={{ 
          y: ctaY,
          transform: 'translateZ(0)'
        }}
      >
        {/* Single optimized gradient orb */}
        <AnimatedGradientOrb 
          className="top-1/2 left-1/4 w-96 h-96" 
          delay={1.5}
          shouldReduceMotion={!!shouldReduceMotion}
        />
        <HomePageCTA 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={!!shouldReduceMotion}
        />
      </motion.section>
      </main>
    </>
  )
}
