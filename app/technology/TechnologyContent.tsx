'use client'

import { useState } from 'react'
import { motion, useScroll, useSpring, useReducedMotion, useTransform } from 'framer-motion'
import { Zap, Settings, Cog, Target, Award } from 'lucide-react'

// Animation variants for smooth section reveals
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

// Premium separator component
const PremiumSeparator = () => (
  <div className="relative h-px max-w-7xl mx-auto" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }} aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent blur-sm" />
  </div>
)

// Animated gradient orb component with scroll-responsive parallax
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
    return <div className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl`} style={style} aria-hidden="true" />
  }
  
  return (
    <motion.div
      className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl`}
      style={style}
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

export default function TechnologyPage() {
  const reducedMotion = useReducedMotion()
  const shouldReduceMotion = reducedMotion ?? false
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Parallax transforms for content containers
  const heroY = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const section1Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.1, 0.3], [50, -30])
  const section2Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.25, 0.45], [50, -30])
  const section3Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.4, 0.6], [50, -30])
  const section4Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.55, 0.75], [50, -30])
  const section5Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.7, 0.9], [50, -30])

  // Heading blur-to-sharp reveals
  const heroHeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 0.1], [8, 0])
  const section1HeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.1, 0.2], [8, 0])
  const section2HeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.25, 0.35], [8, 0])
  const section3HeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.4, 0.5], [8, 0])
  const section4HeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.55, 0.65], [8, 0])
  const section5HeadingBlur = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0.7, 0.8], [8, 0])

  // Scroll-responsive gradient orb transforms
  const orb1Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, -150])
  const orb2Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, 100])
  const orb3Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, -120])
  const orb4Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, 80])
  const orb5Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, -100])
  const orb6Y = shouldReduceMotion ? undefined : useTransform(scrollYProgress, [0, 1], [0, 90])

  // Performance outcomes data
  const performanceOutcomes = [
    {
      title: 'Sprint Carryover',
      description: 'Replicates the closed-chain vector of sprint acceleration for direct athletic transfer. The footplate positions athletes in the precise ground-force vector used during acceleration.'
    },
    {
      title: 'Posterior-Chain Activation',
      description: 'Maximizes muscular integration from the plantar surface through the glutes and spinal stabilizers for true kinetic-chain transfer.'
    },
    {
      title: 'Rehabilitation Crossover',
      description: 'Allows controlled eccentric loading across adjustable angles, enabling biomechanically precise retraining through every phase of recovery.'
    }
  ]

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
            shouldReduceMotion={shouldReduceMotion}
            style={{ y: orb1Y }}
          />
          <AnimatedGradientOrb 
            className="bottom-0 left-1/4 w-80 h-80 bg-blue-500/10" 
            delay={2}
            shouldReduceMotion={shouldReduceMotion}
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
              Technology
            </motion.h1>
            
          <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                y: heroY
              }}
              whileHover={shouldReduceMotion ? {} : {
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                <p>
                  The ExIQx Footplate re-engineers posterior-chain training through biomechanical precision and authentic ground-force mechanics. Every component is designed to honor the physics of human movement, creating training systems that translate directly to athletic performance.
                </p>
              </div>
          </motion.div>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Why We Invented Section */}
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
            shouldReduceMotion={shouldReduceMotion}
            style={{ y: orb3Y }}
          />

          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
                Why We Invented the ExIQx Footplate
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
                  Conventional Nordic and GHD-style devices stabilize the body by anchoring the posterior ankle and leg, transferring force through the Achilles and calf complex. This isolates the hamstrings but diverts kinetic energy away from the true ground-force pathway.
                </p>
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  In natural athletic movement, energy transfers through the plantar surface—especially the ball of the foot—creating a closed-chain kinetic line that drives through the ankle, knee, and hip into the entire posterior chain. The ExIQx Footplate restores that authentic energy flow.
                </p>
                <p>
                  By routing force through the plantar surface instead of the posterior ankle, it mirrors sprinting and jumping mechanics, extending the lever arm from the ball of the foot to the knee for increased torque and full posterior-chain activation.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Closed-Chain Plantarflexion Section */}
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
            shouldReduceMotion={shouldReduceMotion}
            style={{ y: orb4Y }}
          />

          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
                  <Settings className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                  filter: section2HeadingBlur ? `blur(${section2HeadingBlur}px)` : undefined
                }}
              >
                Closed-Chain Plantarflexion
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
                  ExIQx technology is engineered around user-adjustable closed-chain plantarflexion mechanics, allowing precise alignment from 10° to 70° to match each athlete's preferred loading angle, performance objective, or rehabilitation phase.
                </p>
                <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                  Each interval positions the user in a true ground-force vector, directing load through the plantar surface of the foot—from the metatarsal heads and ball of the foot, through the ankle complex, calves, hamstrings, glutes, and spinal erectors.
                </p>
                <p>
                  This closed-chain configuration mimics sprinting, jumping, and human gait, ensuring authentic kinetic sequence engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Precision Engineering Section */}
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
            shouldReduceMotion={shouldReduceMotion}
            style={{ y: orb5Y }}
          />

          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
                  <Cog className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                  filter: section3HeadingBlur ? `blur(${section3HeadingBlur}px)` : undefined
                }}
              >
                Precision Engineering
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
                  Hybrid construction combines CNC-machined ⅜" aluminum for lightweight precision with welded 11-gauge steel arms for structural strength. Every component is machined to aerospace-level tolerances for perfect bearing alignment and zero lateral play.
                </p>
                <p>
                  The matte black powder coat provides corrosion resistance with custom finishes available on request. All ExIQx systems are engineered, machined, and assembled in the United States.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Performance Outcomes Section */}
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
            shouldReduceMotion={shouldReduceMotion}
            style={{ y: orb6Y }}
          />

          <div className="mx-auto max-w-5xl px-6">
            <motion.div 
              className="flex items-start gap-6" 
              style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', y: section4Y }}
            >
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
                  <Target className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
                style={{ 
                  filter: section4HeadingBlur ? `blur(${section4HeadingBlur}px)` : undefined
                }}
              >
                Performance Outcomes
              </motion.h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {performanceOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300 overflow-hidden"
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                >
                  {/* Internal gradient glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-xl transition-all duration-500 pointer-events-none" />
                  <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {outcome.title}
                  </h3>
                  <p className="relative text-white/70 leading-relaxed">
                    {outcome.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Technical Specifications CTA Section */}
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
          {/* Animated gradient orb */}
          <AnimatedGradientOrb 
            className="top-0 right-1/2 w-72 h-72 bg-blue-500/10" 
            delay={2.5}
            shouldReduceMotion={shouldReduceMotion}
          />

          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div 
              className="flex items-center justify-center gap-6" 
              style={{ 
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                y: section5Y
              }}
            >
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.3 }}
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -8, 0],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
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
                  filter: section5HeadingBlur ? `blur(${section5HeadingBlur}px)` : undefined
                }}
              >
                Technical Specifications
              </motion.h2>
            </motion.div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)', 
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                y: section5Y
              }}
              whileHover={shouldReduceMotion ? {} : {
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                Explore the engineering, materials, and biomechanical design that make the ExIQx Footplate the most advanced posterior-chain training system available.
              </p>
            </motion.div>

            <motion.a
              href="/specifications"
              onMouseMove={(e) => {
                if (shouldReduceMotion) return
                const rect = e.currentTarget.getBoundingClientRect()
                setMousePosition({
                  x: (e.clientX - rect.left - rect.width / 2) * 0.1,
                  y: (e.clientY - rect.top - rect.height / 2) * 0.1,
                })
              }}
              onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
              animate={{ 
                x: mousePosition.x, 
                y: mousePosition.y,
                scale: shouldReduceMotion ? 1 : undefined
              }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="inline-block rounded-xl bg-accent px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_10px_30px_rgba(220,38,38,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View Full Specifications →
            </motion.a>
          </div>
        </motion.section>
      </main>
    </>
  )
}