'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'

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
  return (
    <section
      id="use-cases"
      className="relative min-h-screen bg-black px-6 py-20 lg:py-32"
      aria-labelledby="use-cases-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.h2
            id="use-cases-heading"
            variants={fadeUp}
            className="font-display text-4xl font-extrabold uppercase tracking-[0.05em] text-white lg:text-5xl"
            style={{ transform: 'translateZ(0)' }}
          >
            Training Applications
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-lg text-white/70 font-light leading-relaxed"
          >
            Versatile equipment for comprehensive posterior chain development
          </motion.p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="space-y-16">
          {/* Use Case 1 - Nordic Hamstring Curls */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Image with Elite Styling */}
            <motion.div 
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -4 }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden border border-zinc-800/60 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)] will-change-transform"
              style={{ transform: 'translateZ(0)' }}
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
              variants={fadeUp}
              className="group will-change-transform"
              style={{ transform: 'translateZ(0)' }}
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
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
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
              variants={fadeUp}
              className="relative aspect-[4/5] rounded-lg overflow-hidden lg:order-2 border border-zinc-800/60 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)] will-change-transform"
              whileHover={shouldReduceMotion ? {} : { 
                y: -6, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 180, damping: 20 }
              }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              style={{ transform: 'translateZ(0)' }}
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
              variants={fadeUp}
              className="lg:order-1 group will-change-transform"
              style={{ transform: 'translateZ(0)' }}
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
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
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
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { 
                y: -6, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 180, damping: 20 }
              }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden border border-zinc-800/60 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)] will-change-transform"
              style={{ transform: 'translateZ(0)' }}
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
              variants={fadeUp}
              className="group will-change-transform"
              style={{ transform: 'translateZ(0)' }}
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
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4 }}
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