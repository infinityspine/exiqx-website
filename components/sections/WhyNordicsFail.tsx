'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'

interface WhyNordicsFailProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const WhyNordicsFail = memo(function WhyNordicsFail({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: WhyNordicsFailProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  const cards = [
    {
      label: 'INCORRECT FORCE PATHWAY',
      headline: 'Force transfers through the back of the ankle',
      body: 'Traditional Nordic benches route kinetic energy through the posterior ankle instead of the forefoot. This bypasses the natural closed-chain pathway used in sprinting and jumping, reducing posterior-chain activation and limiting athletic transfer.'
    },
    {
      label: 'SHORT LEVER ARM = LOW TORQUE',
      headline: 'Reduced distance from force to knee joint',
      body: 'When force enters through the back of the ankle, the lever arm from the point of force application to the knee (axis of rotation) is shortened. This drastically reduces torque and muscular demand on the hamstrings and glutes.'
    },
    {
      label: 'BROKEN GROUND-FORCE MECHANICS',
      headline: 'Does not mimic real athletic force vectors',
      body: 'Traditional Nordics create an artificial vector that does not match sprinting, cutting, or jumping. Without forefoot loading, athletes cannot develop strength along the lines of force they actually use in sport.'
    }
  ]

  return (
    <section
      id="why-nordics-fail"
      className="relative bg-black border-t border-white/10"
      style={{ 
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}
      aria-labelledby="why-nordics-fail-heading"
    >
      {/* Subtle red glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600/8 via-red-900/4 to-transparent blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          {/* Centered Title */}
          <motion.h2
            id="why-nordics-fail-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{ 
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
              transform: 'translateZ(0)'
            }}
          >
            WHY TRADITIONAL NORDICS FAIL
          </motion.h2>

          {/* Three Card Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              marginBottom: 'clamp(3rem, 6vw, 4rem)'
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? {} : {
                  y: -8,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 20px 60px rgba(220, 38, 38, 0.15), 0 0 40px rgba(220, 38, 38, 0.1)',
                  transition: {
                    duration: 0.3,
                    ease: [0.77, 0, 0.175, 1]
                  }
                }}
                className="group bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 relative overflow-hidden"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                }}
              >
                {/* Subtle red gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Small Red Label */}
                  <div 
                    className="text-red-500 text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{
                      fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
                      letterSpacing: '0.15em'
                    }}
                  >
                    {card.label}
                  </div>

                  {/* Bold Subheadline */}
                  <h3 className="text-white font-bold text-lg lg:text-xl mb-4 leading-tight">
                    {card.headline}
                  </h3>

                  {/* Body Text */}
                  <p className="text-white/70 text-sm lg:text-base font-light leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Centered Line */}
          <motion.p
            variants={fadeUp}
            className="text-white/60 text-center text-base lg:text-lg font-light"
            style={{
              marginTop: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            Your footplate corrects all three foundational biomechanical flaws.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
})

export default WhyNordicsFail

