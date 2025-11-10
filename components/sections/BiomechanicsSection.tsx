'use client'

import React, { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { z } from 'zod'

// ============================================================================
// Schema Validation
// ============================================================================

const BiomechanicsSectionPropsSchema = z.object({
  title: z.string().default('Aligned with Human Biomechanics'),
  description: z.string().default('Engineered for optimal performance and safety'),
  className: z.string().optional(),
})

type BiomechanicsSectionProps = z.infer<typeof BiomechanicsSectionPropsSchema>

// ============================================================================
// Animation Constants
// ============================================================================

const ANIMATION_CONSTANTS = {
  EASE_ATHLETIC: [0.43, 0.13, 0.23, 0.96],
  DURATION_MEDIUM: 0.6,
} as const

// ============================================================================
// Component
// ============================================================================

const BiomechanicsSection = memo<Partial<BiomechanicsSectionProps>>((props) => {
  const validatedProps = BiomechanicsSectionPropsSchema.parse(props)
  const { title, description, className = '' } = validatedProps
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className={`bg-[#0A0A0A] border-t border-red-600/20 ${className}`}
      aria-labelledby="biomechanics-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          id="biomechanics-title"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
            ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
          }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat"
        >
          {title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            delay: 0.1,
            duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
            ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
          }}
          className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-base lg:text-lg font-inter"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
})

BiomechanicsSection.displayName = 'BiomechanicsSection'

export default BiomechanicsSection
export type { BiomechanicsSectionProps }