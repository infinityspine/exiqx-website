'use client'

import { motion, useReducedMotion } from 'framer-motion'
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

// Animated gradient orb component
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
      className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl`}
      animate={{ 
        scale: [1, 1.2, 1], 
        opacity: [0.3, 0.5, 0.3] 
      }}
      transition={{ 
        duration: 8, 
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

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section - NO WRAPPER, preserve existing animations */}
      <HeroSection />

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* FootplateFeatures Section with animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative"
      >
        {/* Animated gradient orbs */}
        <AnimatedGradientOrb 
          className="top-0 right-1/4 w-96 h-96" 
          delay={0}
          shouldReduceMotion={shouldReduceMotion}
        />
        <AnimatedGradientOrb 
          className="bottom-0 left-1/4 w-80 h-80 bg-blue-500/10" 
          delay={2}
          shouldReduceMotion={shouldReduceMotion}
        />
        <FootplateFeatures />
      </motion.section>

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* UseCases Section with animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative"
      >
        {/* Animated gradient orbs */}
        <AnimatedGradientOrb 
          className="top-1/4 left-0 w-72 h-72" 
          delay={1}
          shouldReduceMotion={shouldReduceMotion}
        />
        <AnimatedGradientOrb 
          className="bottom-1/4 right-0 w-96 h-96 bg-blue-500/10" 
          delay={3}
          shouldReduceMotion={shouldReduceMotion}
        />
        <UseCases />
      </motion.section>

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* Testimonials Section with animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative"
      >
        {/* Animated gradient orbs */}
        <AnimatedGradientOrb 
          className="top-0 left-1/3 w-80 h-80" 
          delay={0.5}
          shouldReduceMotion={shouldReduceMotion}
        />
        <AnimatedGradientOrb 
          className="bottom-0 right-1/3 w-88 h-88 bg-blue-500/10" 
          delay={2.5}
          shouldReduceMotion={shouldReduceMotion}
        />
        <Testimonials />
      </motion.section>

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* HomePageCTA Section with animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative"
      >
        {/* Animated gradient orbs */}
        <AnimatedGradientOrb 
          className="top-1/2 left-1/4 w-96 h-96" 
          delay={1.5}
          shouldReduceMotion={shouldReduceMotion}
        />
        <AnimatedGradientOrb 
          className="top-0 right-1/2 w-72 h-72 bg-blue-500/10" 
          delay={3.5}
          shouldReduceMotion={shouldReduceMotion}
        />
        <HomePageCTA />
      </motion.section>
    </main>
  )
}
