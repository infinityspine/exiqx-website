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

// Animated gradient orb component with scroll-driven parallax
const AnimatedGradientOrb = ({ 
  className = '', 
  delay = 0,
  shouldReduceMotion = false,
  scrollYProgress,
  scrollRange = [0, 1]
}: { 
  className?: string
  delay?: number
  shouldReduceMotion?: boolean
  scrollYProgress?: any
  scrollRange?: [number, number]
}) => {
  const orbY = scrollYProgress && !shouldReduceMotion 
    ? useTransform(scrollYProgress, scrollRange, [0, -200])
    : undefined
  const orbScale = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, scrollRange, [1, 1.5])
    : undefined

  if (shouldReduceMotion) {
    return <div className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl`} aria-hidden="true" />
  }
  
  return (
    <motion.div
      className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl`}
      style={{ 
        y: orbY,
        scale: orbScale
      }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3] 
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
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Parallax transforms for FootplateFeatures section
  const featuresY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.1, 0.3], [50, -50])
  const featuresOpacity = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.1, 0.25], [0.5, 1])
  const featuresScale = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1])
  const featuresTextBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.1, 0.2], [10, 0])

  // Parallax transforms for UseCases section
  const useCasesY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.3, 0.5], [50, -50])
  const useCasesOpacity = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.3, 0.45], [0.5, 1])
  const useCasesScale = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.3, 0.5], [0.95, 1])

  // Parallax transforms for Testimonials section
  const testimonialsY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.5, 0.7], [50, -50])
  const testimonialsOpacity = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.5, 0.65], [0.5, 1])
  const testimonialsScale = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.5, 0.7], [0.95, 1])

  // Parallax transforms for CTA section
  const ctaY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.7, 0.9], [50, -50])
  const ctaOpacity = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.7, 0.85], [0.5, 1])
  const ctaScale = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.7, 0.9], [0.95, 1])

  // Progressive blur background
  const bgBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 0.5], [0, 20])

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

      {/* FootplateFeatures Section with parallax animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative"
        style={{ 
          y: featuresY,
          opacity: featuresOpacity,
          scale: featuresScale
        }}
      >
        {/* Progressive blur background */}
        {bgBlur && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none"
            style={{ filter: `blur(${bgBlur}px)` }}
            aria-hidden="true"
          />
        )}
        {/* Animated gradient orbs with scroll parallax */}
        <AnimatedGradientOrb 
          className="top-0 right-1/4 w-96 h-96" 
          delay={0}
          shouldReduceMotion={shouldReduceMotion}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.1, 0.3]}
        />
        <AnimatedGradientOrb 
          className="bottom-0 left-1/4 w-80 h-80 bg-blue-500/10" 
          delay={2}
          shouldReduceMotion={shouldReduceMotion}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.1, 0.3]}
        />
        <FootplateFeatures 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={shouldReduceMotion}
          textBlur={featuresTextBlur}
        />
      </motion.section>

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* UseCases Section with parallax animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative"
        style={{ 
          y: useCasesY,
          opacity: useCasesOpacity,
          scale: useCasesScale
        }}
      >
        {/* Animated gradient orbs with scroll parallax */}
        <AnimatedGradientOrb 
          className="top-1/4 left-0 w-72 h-72" 
          delay={1}
          shouldReduceMotion={shouldReduceMotion}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.3, 0.5]}
        />
        <AnimatedGradientOrb 
          className="bottom-1/4 right-0 w-96 h-96 bg-blue-500/10" 
          delay={3}
          shouldReduceMotion={shouldReduceMotion}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.3, 0.5]}
        />
        <UseCases 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={shouldReduceMotion}
        />
      </motion.section>

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* Testimonials Section with parallax animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative"
        style={{ 
          y: testimonialsY,
          opacity: testimonialsOpacity,
          scale: testimonialsScale
        }}
      >
        {/* Animated gradient orbs with scroll parallax */}
        <AnimatedGradientOrb 
          className="top-0 left-1/3 w-80 h-80" 
          delay={0.5}
          shouldReduceMotion={shouldReduceMotion}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.5, 0.7]}
        />
        <AnimatedGradientOrb 
          className="bottom-0 right-1/3 w-80 h-80 bg-blue-500/10" 
          delay={2.5}
          shouldReduceMotion={shouldReduceMotion}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.5, 0.7]}
        />
        <Testimonials 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={shouldReduceMotion}
        />
      </motion.section>

      {/* Premium Separator */}
      <PremiumSeparator />

      {/* HomePageCTA Section with parallax animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative"
        style={{ 
          y: ctaY,
          opacity: ctaOpacity,
          scale: ctaScale
        }}
      >
        {/* Animated gradient orbs with scroll parallax */}
        <AnimatedGradientOrb 
          className="top-1/2 left-1/4 w-96 h-96" 
          delay={1.5}
          shouldReduceMotion={shouldReduceMotion}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.7, 0.9]}
        />
        <AnimatedGradientOrb 
          className="top-0 right-1/2 w-72 h-72 bg-blue-500/10" 
          delay={3.5}
          shouldReduceMotion={shouldReduceMotion}
          scrollYProgress={scrollYProgress}
          scrollRange={[0.7, 0.9]}
        />
        <HomePageCTA 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={shouldReduceMotion}
        />
      </motion.section>
      </main>
    </>
  )
}
