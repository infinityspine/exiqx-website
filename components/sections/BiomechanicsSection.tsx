'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Zap, TrendingUp, Move } from 'lucide-react'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'

interface BiomechanicsSectionProps {
  title?: string
  description?: string
}

const BiomechanicsSection = memo(function BiomechanicsSection({ title, description }: BiomechanicsSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  const pillars = [
    {
      icon: Zap,
      title: 'PLANTAR SURFACE LOADING',
      body: 'Routes force through the ball of the foot—the natural contact point in sprinting, jumping, and change of direction.'
    },
    {
      icon: TrendingUp,
      title: 'EXTENDED MOMENT ARM',
      body: 'Forefoot loading increases distance to the knee, creating superior hamstring recruitment.'
    },
    {
      icon: Move,
      title: 'ATHLETIC FORCE VECTORS',
      body: 'Trains forward/downward force application—the pattern used in real sport, not gym isolation.'
    }
  ]

  return (
    <section
      className="bg-black border-t border-white/10"
      style={{ 
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white text-center leading-tight max-w-5xl mx-auto"
          >
            <span className="block">TRAINING SYSTEM ENGINEERED FOR</span>
            <span className="block">FORCE TRANSMISSION IN ATHLETIC PERFORMANCE.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl font-medium text-gray-200/90 leading-relaxed max-w-4xl mx-auto text-center"
          >
            <span className="block">Loads the plantar surface of the foot, especially the ball of the foot,</span>
            <span className="block">where force transmission occurs in athletic performance—</span>
            <span className="block">not the posterior ankle.</span>
          </motion.p>

          <motion.div
            variants={staggerChildren}
            className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/40 border border-gray-800 rounded-xl p-6 md:p-8 backdrop-blur-sm flex flex-col items-center text-center transition-all duration-300 hover:border-gray-700"
                >
                  <div className="mb-6 flex items-center justify-center">
                    <div className="bg-gray-800/50 rounded-full p-3 md:p-4">
                      <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-red-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mt-4 md:mt-6 text-white font-semibold text-lg md:text-xl uppercase tracking-wide text-center">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 md:mt-3 text-gray-400 text-sm md:text-base font-normal leading-relaxed text-center">
                    {pillar.body}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default BiomechanicsSection
