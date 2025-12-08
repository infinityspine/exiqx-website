'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import { TrendingUp, Zap, Move } from 'lucide-react'

interface BiomechanicsEliteProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const BiomechanicsElite = memo(function BiomechanicsElite({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: BiomechanicsEliteProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  const pillars = [
    {
      icon: TrendingUp,
      title: 'LONGER LEVER ARM = MORE TORQUE',
      body: 'Force entering through the forefoot increases the distance to the knee joint (axis of rotation), creating higher posterior-chain torque and deeper hamstring recruitment.'
    },
    {
      icon: Zap,
      title: 'AUTHENTIC GROUND-FORCE PATHWAY',
      body: 'Routing energy through the metatarsal heads mirrors the natural closed-chain force pathway used in sprinting, jumping, and directional changes.'
    },
    {
      icon: Move,
      title: 'NATURAL FORCE VECTOR ALIGNMENT',
      body: 'Forefoot loading matches the forward/downward force vector athletes use in sport. Traditional Nordics reverse this vector through the back of the ankle, limiting transfer.'
    }
  ]

  return (
    <section
      id="biomechanics-elite"
      className="relative bg-black border-t border-white/10 pt-[clamp(4rem,10vw,7rem)] pb-[clamp(4rem,10vw,7rem)]"
      aria-labelledby="biomechanics-elite-heading"
    >
      {/* Subtle radial red glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-red-600/4 via-red-900/2 to-transparent blur-[80px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          {/* Headline */}
          <motion.div
            className="mb-[clamp(2rem,5vw,4rem)] text-center flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.h2
              id="biomechanics-elite-heading"
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center whitespace-normal sm:whitespace-nowrap"
            >
              AUTHENTIC GROUND-FORCE MECHANICS.
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-prose mx-auto text-center"
            >
              Plantar loading that mirrors natural athletic movement.
            </motion.p>
          </motion.div>

          {/* Three Pillar Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={shouldReduceMotion ? {} : {
                    y: -8,
                    borderColor: 'rgba(220, 38, 38, 0.4)',
                    boxShadow: '0 20px 60px rgba(220, 38, 38, 0.2), 0 0 40px rgba(220, 38, 38, 0.15)',
                    transition: {
                      duration: 0.3,
                      ease: [0.77, 0, 0.175, 1]
                    }
                  }}
                  className="group bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                  }}
                >
                  {/* Subtle red gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Glowing red border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-red-500/0 group-hover:border-red-500/20 transition-all duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative bg-gradient-to-br from-red-500/10 to-red-900/5 rounded-xl p-4 border border-red-500/10 group-hover:border-red-500/30 transition-all duration-300">
                          <IconComponent 
                            className="w-8 h-8 lg:w-10 lg:h-10 text-red-500" 
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-base lg:text-lg mb-4 leading-tight text-center uppercase tracking-wide">
                      {pillar.title}
                    </h3>

                    {/* Body Text */}
                    <p className="text-white/70 text-sm lg:text-base font-light leading-relaxed text-center">
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default BiomechanicsElite

