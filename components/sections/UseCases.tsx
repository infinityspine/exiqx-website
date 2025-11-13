'use client'

import { memo } from 'react'
import { motion, useReducedMotion, useTransform } from 'framer-motion'
import Image from 'next/image'

interface UseCasesProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const UseCases = memo(function UseCases({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: UseCasesProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  // Image zoom on scroll
  const image1Scale = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.5, 0.7], [1, 1.1])
    : undefined
  const image2Scale = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.5, 0.7], [1, 1.15])
    : undefined
  const image3Scale = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.5, 0.7], [1, 1.12])
    : undefined

  // Optimized heading transform - scale only (removed blur for performance)
  const headingScale = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.35, 0.45], [0.95, 1])
    : undefined

  // Parallax separation between images and text
  const image1Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.4, 0.6], [30, -30])
    : undefined
  const text1Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.4, 0.6], [-30, 30])
    : undefined
  const image2Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.45, 0.65], [30, -30])
    : undefined
  const text2Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.45, 0.65], [-30, 30])
    : undefined
  const image3Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.5, 0.7], [30, -30])
    : undefined
  const text3Y = scrollYProgress && !shouldReduceMotion
    ? useTransform(scrollYProgress, [0.5, 0.7], [-30, 30])
    : undefined
  return (
    <section
      id="use-cases"
      className="relative min-h-screen bg-black px-6 py-20 lg:py-32"
      aria-labelledby="use-cases-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            id="use-cases-heading"
            className="font-display text-4xl font-extrabold uppercase tracking-[0.05em] text-white lg:text-5xl will-change-transform"
            style={{
              scale: headingScale,
              transform: 'translateZ(0)'
            }}
          >
            Training Applications
          </motion.h2>
          <p className="mt-4 text-lg text-white/70 font-light leading-relaxed">
            Versatile equipment for comprehensive posterior chain development
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-16">
          {/* Use Case 1 - Nordic Hamstring Curls */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Image with Elite Styling */}
            <motion.div 
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -4 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden border border-zinc-800/60 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
              style={{ y: image1Y, scale: image1Scale }}
            >
              <Image
                src="/images/training/nordic-curl-athlete.jpg"
                alt="Athlete performing Nordic hamstring curl on ExIQx footplate"
                fill
                className="object-cover grayscale brightness-75"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Red accent gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group"
              style={{ y: text1Y }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-red-400">
                Nordic Hamstring Curls
              </h3>
              <p className="mb-4 text-white/70 font-light leading-relaxed">
                Eccentric hamstring training for injury prevention and explosive power development.
              </p>
              <ul className="space-y-2 text-white/60 font-light" role="list">
                {[
                  'Reduces hamstring injury risk by up to 51%',
                  'Improves sprint speed and acceleration',
                  'Enhances knee flexion strength'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="mr-2 text-accent">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Use Case 2 - Glute-Ham Raises */}
          <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-12">
            {/* Image with Elite Styling - FIRST in DOM for mobile */}
            <motion.div 
              className="relative aspect-[4/5] rounded-lg overflow-hidden lg:order-2 border border-zinc-800/60 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -4 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: image2Y, scale: image2Scale }}
            >
              <Image
                src="/images/training/glute-ham-raise-athlete-v2.jpg"
                alt="Athlete performing glute-ham raise on ExIQx footplate"
                fill
                className="object-cover grayscale brightness-75"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            
            {/* Content - SECOND in DOM for mobile, FIRST on desktop (lg:order-1) */}
            <motion.div 
              className="lg:order-1 group"
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: text2Y }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-red-400">
                Glute-Ham Raises
              </h3>
              <p className="mb-4 text-white/70 font-light leading-relaxed">
                Complete posterior chain activation for comprehensive lower body development.
              </p>
              <ul className="space-y-2 text-white/60 font-light" role="list">
                {[
                  'Strengthens glutes, hamstrings, and lower back',
                  'Improves hip extension power',
                  'Enhances athletic performance'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="mr-2 text-accent">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Use Case 3 - Progressive Overload */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Image with Elite Styling - Product Detail Shot */}
            <motion.div 
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -4 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden border border-zinc-800/60 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]"
              style={{ y: image3Y, scale: image3Scale }}
            >
              <Image
                src="/images/training/adjustment-mechanism-detail.jpg"
                alt="Close-up of ExIQx footplate angle adjustment mechanism"
                fill
                className="object-cover brightness-90"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle red accent glow on one element */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="group"
              style={{ y: text3Y }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-red-400">
                Progressive Overload
              </h3>
              <p className="mb-4 text-white/70 font-light leading-relaxed">
                Adjustable resistance system for continuous strength progression.
              </p>
              <ul className="space-y-2 text-white/60 font-light" role="list">
                {[
                  'Supports beginner to elite athletes',
                  'Band-assisted progression option',
                  'Weighted progression capability'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="mr-2 text-accent">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default UseCases