'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface BiomechanicsSectionProps {
  title?: string
  description?: string
  className?: string
}

const BiomechanicsSection = memo(function BiomechanicsSection({
  title = 'Aligned with Human Biomechanics',
  description,
  className = ''
}: BiomechanicsSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className={`bg-black border-t border-white/10 ${className}`}
      style={{ 
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h2 
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white"
            style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {title}
          </h2>

          {/* Description - broken into paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-white/70 font-light leading-relaxed">
            <p>
              The rack-mounted system is engineered around a ~38° plantarflexion alignment, mirroring the natural closed-chain vector of sprinting and acceleration.
            </p>
            <p>
              This geometry targets the soleus, gastrocnemius, and hamstrings through their full length-tension curve — enabling concentric, eccentric, and isometric loading without posterior ankle restraint.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default BiomechanicsSection
