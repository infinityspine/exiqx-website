'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { z } from 'zod'

// ============================================================================
// Schema Validation
// ============================================================================

const SpecItemSchema = z.object({
  label: z.string(),
  value: z.string(),
})

const GHDSpecsPropsSchema = z.object({
  title: z.string().default('Technical Specifications'),
  subtitle: z.string().optional(),
  specs: z.array(SpecItemSchema).default([
    { label: 'Footplate Width', value: '20–24"' },
    { label: 'Angle Range', value: '10°–70° plantarflexion' },
    { label: 'Material', value: '11-gauge steel' },
  ]),
  imageSrc: z.string().default('/ghd-mounted-detail.jpg'),
  imageAlt: z.string().default('Product specifications detail'),
  imagePosition: z.enum(['left', 'right']).default('right'),
  className: z.string().optional(),
})

type GHDSpecsProps = z.infer<typeof GHDSpecsPropsSchema>

// ============================================================================
// Animation Constants
// ============================================================================

const ANIMATION_CONSTANTS = {
  EASE_ATHLETIC: [0.43, 0.13, 0.23, 0.96],
  DURATION_MEDIUM: 0.6,
  STAGGER: 0.05,
} as const

// ============================================================================
// Component
// ============================================================================

const GHDSpecs = memo<Partial<GHDSpecsProps>>((props) => {
  const validatedProps = GHDSpecsPropsSchema.parse(props)
  const {
    title,
    subtitle,
    specs,
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
      aria-labelledby="specs-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className={imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}
          >
            <h2
              id="specs-title"
              className="text-3xl lg:text-4xl font-bold text-white mb-2 font-montserrat"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-400 text-sm mb-6 font-inter">{subtitle}</p>
            )}

            {/* Specs Table */}
            <div className="bg-[#111111] border border-red-600/20 rounded-lg overflow-hidden">
              <dl>
                {specs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * ANIMATION_CONSTANTS.STAGGER,
                      ease: ANIMATION_CONSTANTS.EASE_ATHLETIC,
                    }}
                    className={`flex justify-between items-start p-4 ${
                      index !== specs.length - 1 ? 'border-b border-red-600/10' : ''
                    }`}
                  >
                    <dt className="text-gray-400 text-sm font-inter w-1/2 pr-4">
                      {spec.label}
                    </dt>
                    <dd className="text-white text-sm font-semibold font-inter w-1/2 text-right">
                      {spec.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>

            {/* Technical Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-xs text-gray-500 font-inter"
            >
              All specifications subject to final engineering validation. Production units may vary slightly.
            </motion.p>
          </motion.div>

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
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
})

GHDSpecs.displayName = 'GHDSpecs'

export default GHDSpecs
export type { GHDSpecsProps }
