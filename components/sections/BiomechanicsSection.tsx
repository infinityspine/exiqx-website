'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface BiomechanicsSectionProps {
  title: string
  description: string
}

const BiomechanicsSection = memo(function BiomechanicsSection({ title, description }: BiomechanicsSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="bg-black border-t border-white/10"
      style={{ 
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Centered Headline */}
          <h2 
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            {title}
          </h2>

          {/* Left-Aligned Body Text */}
          <div className="text-base sm:text-lg text-white/70 font-light leading-relaxed text-left">
            <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              {description}
            </p>

            <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              User-adjustable from 10° to 70°, each position creates an authentic ground-force pathway through the entire posterior chain: from metatarsal heads through calves, hamstrings, glutes, and spinal erectors.
            </p>

            <p>
              CNC-machined aluminum and welded steel construction. Engineered to aerospace tolerances. Made in the United States.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default BiomechanicsSection
