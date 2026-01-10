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
      icon: Zap,
      title: 'PLANTAR SURFACE LOADING',
      body: 'Routes force through the ball of the foot—the natural contact point in sprinting, jumping, and change of direction.'
    },
    {
      icon: TrendingUp,
      title: 'EXTENDED MOMENT ARM',
      body: 'Forefoot loading increases force application distance to the knee, creating superior posterior-chain demand from foot to glutes.'
    },
    {
      icon: Move,
      title: 'ATHLETIC FORCE VECTORS',
      body: 'Traditional Nordics route force through the posterior ankle. ExIQx routes force through the ball of the foot—where it matters in athletic performance.'
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
            className="text-center flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            <motion.h2
              id="biomechanics-elite-heading"
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white text-center leading-[1.15] max-w-5xl mx-auto"
            >
              <span className="block">TRAINING SYSTEM ENGINEERED FOR</span>
              <span className="block">FORCE TRANSMISSION IN ATHLETIC PERFORMANCE.</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-24 md:mt-28 text-base md:text-lg lg:text-xl font-medium text-gray-200/90 leading-relaxed max-w-4xl mx-auto text-center"
            >
              <span className="block">Loads the plantar surface of the foot, especially the ball of the foot,</span>
              <span className="block">where force transmission occurs in athletic performance—</span>
              <span className="block">not the posterior ankle.</span>
            </motion.p>
          </motion.div>

          {/* Three Pillar Grid */}
          <motion.div 
            className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
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
                        <div className="relative bg-gray-800/50 rounded-full p-3 md:p-4 border border-red-500/10 group-hover:border-red-500/30 transition-all duration-300 backdrop-blur-sm">
                          <IconComponent 
                            className="w-12 h-12 md:w-16 md:h-16 text-red-500" 
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 md:mt-6 text-white font-semibold text-lg md:text-xl leading-tight text-center uppercase tracking-wide">
                      {pillar.title}
                    </h3>

                    {/* Body Text */}
                    <p className="mt-2 md:mt-3 text-gray-400 text-sm md:text-base font-normal leading-relaxed text-center">
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

