'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { z } from 'zod'
import { Check } from 'lucide-react'

// ============================================================================
// Schema Validation
// ============================================================================

const GHDFeatureDetailPropsSchema = z.object({
  title: z.string().default('Seamless GHD Integration'),
  description: z.string().default('Advanced engineering for elite performance'),
  features: z.array(z.string()).default([
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ]),
  imageSrc: z.string().default('/ghd-mounted-side.jpg'),
  imageAlt: z.string().default('Product feature detail'),
  imagePosition: z.enum(['left', 'right']).default('left'),
  className: z.string().optional(),
})

type GHDFeatureDetailProps = z.infer<typeof GHDFeatureDetailPropsSchema>

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

const GHDFeatureDetail = memo<Partial<GHDFeatureDetailProps>>((props) => {
  const validatedProps = GHDFeatureDetailPropsSchema.parse(props)
  const {
    title,
    description,
    features,
    imageSrc,
    imageAlt,
    imagePosition,
    className = '',
  } = validatedProps

  const shouldReduceMotion = useReducedMotion()

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : (imagePosition === 'left' ? -50 : 50),
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
        ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
      },
    },
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : (imagePosition === 'left' ? 50 : -50),
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION_MEDIUM,
        ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
      },
    },
  }

  return (
    <section
      className={`bg-[#0A0A0A] border-t border-red-600/20 ${className}`}
      aria-label={`${title} feature section`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
            imagePosition === 'right' ? '' : ''
          }`}
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className={imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden border border-red-600/20 bg-[#111111]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-lg"
                quality={85}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className={imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-montserrat">
              {title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 font-inter text-base lg:text-lg">
              {description}
            </p>

            {/* Features List */}
            <ul className="space-y-3" role="list">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
                  }}
                  className="flex items-start text-gray-300 text-sm lg:text-base font-inter"
                >
                  <Check
                    className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

GHDFeatureDetail.displayName = 'GHDFeatureDetail'

export default GHDFeatureDetail
export type { GHDFeatureDetailProps }
