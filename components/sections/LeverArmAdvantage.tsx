'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'

interface LeverArmAdvantageProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const LeverArmAdvantage = memo(function LeverArmAdvantage({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: LeverArmAdvantageProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  return (
    <section
      id="lever-arm-advantage"
      className="relative bg-black border-t border-white/10"
      style={{ 
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}
      aria-labelledby="lever-arm-heading"
    >
      {/* Subtle red glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600/8 via-red-900/4 to-transparent blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          {/* Centered Uppercase Title */}
          <motion.h2
            id="lever-arm-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{ 
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
              transform: 'translateZ(0)'
            }}
          >
            Lever-Arm Advantage
          </motion.h2>

          {/* Left-Aligned Body Text */}
          <motion.div
            variants={fadeUp}
            className="text-base sm:text-lg text-white/70 font-light leading-relaxed text-left space-y-6"
          >
            <p>
              By shifting force into the forefoot, the ExIQx footplate increases the effective lever arm relative to the knee—the body's axis of rotation during Nordic and GHR patterns.
            </p>

            <p>
              A longer lever arm increases torque, which significantly elevates muscular demand through the calves, hamstrings, glutes, and spinal erectors. This creates a mechanical profile unmatched by flat-foot or heel-secured Nordic variations.
            </p>

            <p>
              The result is stronger eccentric adaptation, greater sprint and jump transfer, and a more authentic closed-chain force pathway.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default LeverArmAdvantage

