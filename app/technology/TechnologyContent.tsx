'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import { useParallax } from '@/hooks/useParallax'
import { Zap, Settings, Cog, Target, Award } from 'lucide-react'

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

export default function TechnologyPage() {
  const reducedMotion = useReducedMotion()
  const shouldReduceMotion = !!reducedMotion
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  // Tesla-style parallax - only for hero
  const heroY = shouldReduceMotion ? undefined : useParallax(scrollYProgress, 25)

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
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(6rem, 12vw, 10rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            transform: 'translateZ(0)'
          }}
        >
          {/* Animated gradient orbs */}
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
                marginBottom: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              Technology
            </motion.h1>
            
            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden will-change-transform"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                y: heroY,
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
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            transform: 'translateZ(0)'
          }}
        >
          {/* Animated gradient orb */}
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
                  y: [0, -6, 0]
                }}
                transition={{ 
                  duration: 6,
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
              >
                Why We Invented the ExIQx Footplate
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
          variants={fadeUp}
          className="relative will-change-transform"
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
          />

          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex items-start gap-3 sm:gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.3 } }}
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -6, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <Settings className="w-5 h-5 sm:w-7 sm:h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <motion.h2 
                className="font-display font-extrabold uppercase tracking-[0.05em] text-white leading-tight break-words"
                style={{ 
                  fontSize: 'clamp(1.75rem, 6vw, 3rem)',
                  lineHeight: '1.2'
                }}
              >
                Closed-Chain Plantarflexion
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
          variants={fadeUp}
          className="relative will-change-transform"
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
          />

          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.3 } }}
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -6, 0]
                }}
                transition={{ 
                  duration: 6,
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
                }}
              >
                Precision Engineering
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
          variants={fadeUp}
          className="relative will-change-transform"
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
          />

          <div className="mx-auto max-w-5xl px-6">
            <motion.div 
              className="flex items-start gap-6" 
              style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.3 } }}
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -6, 0]
                }}
                transition={{ 
                  duration: 6,
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
                }}
              >
                Performance Outcomes
              </motion.h2>
            </motion.div>

            <motion.div 
              className="grid gap-8 md:grid-cols-3"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {performanceOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300 overflow-hidden will-change-transform"
                  style={{ transform: 'translateZ(0)' }}
                  whileHover={shouldReduceMotion ? {} : { 
                    y: -8,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 160, damping: 20 }
                  }}
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
            </motion.div>
          </div>
        </motion.section>

        {/* Premium Separator */}
        <PremiumSeparator />

        {/* Technical Specifications CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative will-change-transform"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 10vw, 8rem)'
          }}
        >
          {/* Animated gradient orb */}
          <AnimatedGradientOrb 
            className="top-0 right-1/2 w-72 h-72 bg-blue-500/10" 
            delay={2.5}
            shouldReduceMotion={!!shouldReduceMotion}
          />

          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div 
              className="flex items-center justify-center gap-6 will-change-transform" 
              style={{ 
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                transform: 'translateZ(0)'
              }}
            >
              <motion.div 
                className="flex-shrink-0"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.3 } }}
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -6, 0]
                }}
                transition={{ 
                  duration: 6,
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
                }}
              >
                Technical Specifications
              </motion.h2>
            </motion.div>

            <motion.div
              className="relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden will-change-transform"
              style={{ 
                padding: 'clamp(2.5rem, 5vw, 4rem)', 
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                transform: 'translateZ(0)'
              }}
              whileHover={shouldReduceMotion ? {} : {
                y: -3,
                scale: 1.02,
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
            >
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                Explore the engineering, materials, and biomechanical design that make the ExIQx Footplate the most advanced posterior-chain training system available.
              </p>
            </motion.div>

            <motion.a
              href="/specifications"
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { 
                scale: 1.05, 
                y: -3,
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-block rounded-xl bg-accent px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_10px_30px_rgba(220,38,38,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              View Full Specifications →
            </motion.a>
          </div>
        </motion.section>
      </main>
    </>
  )
}