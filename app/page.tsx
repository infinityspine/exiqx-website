'use client'

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import SectionDivider from '@/components/ui/SectionDivider'
import HeroSection from '@/components/sections/HeroSection'
import FootplateFeatures from '@/components/sections/FootplateFeatures'
import ForefootTorqueAdvantage from '@/components/sections/ForefootTorqueAdvantage'
import ForefootMechanicsDiagram from '@/components/sections/ForefootMechanicsDiagram'
import LeverArmAdvantage from '@/components/sections/LeverArmAdvantage'
import GroundForceVectorAdvantage from '@/components/sections/GroundForceVectorAdvantage'
import WhyNordicsFail from '@/components/sections/WhyNordicsFail'
import UseCases from '@/components/sections/UseCases'
import Testimonials from '@/components/sections/Testimonials'
import HomePageCTA from '@/components/sections/HomePageCTA'

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

      <SectionDivider />

      {/* FootplateFeatures Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="relative"
        style={{ transform: 'translateZ(0)' }}
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

      <SectionDivider />

      {/* Forefoot Torque Advantage Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="relative"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Gradient orb */}
        <AnimatedGradientOrb 
          className="top-1/2 left-1/3 w-96 h-96"
          delay={0.6}
          shouldReduceMotion={!!shouldReduceMotion}
        />
        <ForefootTorqueAdvantage 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={!!shouldReduceMotion}
        />
      </motion.section>

      <SectionDivider />

      {/* Forefoot Mechanics Diagram Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="relative"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Gradient orb */}
        <AnimatedGradientOrb 
          className="top-1/3 right-1/4 w-[28rem] h-[28rem]"
          delay={0.8}
          shouldReduceMotion={!!shouldReduceMotion}
        />

        <ForefootMechanicsDiagram />
      </motion.section>

      <SectionDivider />

      {/* LeverArmAdvantage Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="relative"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Single optimized gradient orb */}
        <AnimatedGradientOrb 
          className="top-1/2 left-1/2 w-96 h-96" 
          delay={0.75}
          shouldReduceMotion={!!shouldReduceMotion}
        />
        <LeverArmAdvantage 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={!!shouldReduceMotion}
        />
      </motion.section>

      <SectionDivider />

      {/* Ground Force Vector Advantage Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="relative"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Gradient orb */}
        <AnimatedGradientOrb 
          className="top-1/4 right-0 w-96 h-96"
          delay={0.8}
          shouldReduceMotion={!!shouldReduceMotion}
        />
        <GroundForceVectorAdvantage 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={!!shouldReduceMotion}
        />
      </motion.section>

      <SectionDivider />

      {/* Why Nordics Fail Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="relative"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Gradient orb */}
        <AnimatedGradientOrb 
          className="top-0 left-1/3 w-72 h-72"
          delay={1.2}
          shouldReduceMotion={!!shouldReduceMotion}
        />
        <WhyNordicsFail 
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={!!shouldReduceMotion}
        />
      </motion.section>

      <SectionDivider />

      {/* UseCases Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="relative"
        style={{ transform: 'translateZ(0)' }}
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

      <SectionDivider />

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="relative"
        style={{ transform: 'translateZ(0)' }}
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

      <SectionDivider />

      {/* HomePageCTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="relative"
        style={{ transform: 'translateZ(0)' }}
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
