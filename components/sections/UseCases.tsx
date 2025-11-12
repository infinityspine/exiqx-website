'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

const UseCases = memo(function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative min-h-screen bg-black px-6 py-20 lg:py-32"
      aria-labelledby="use-cases-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            id="use-cases-heading"
            className="font-display text-4xl font-extrabold uppercase tracking-[0.05em] text-white lg:text-5xl"
          >
            Training Applications
          </h2>
          <p className="mt-4 text-lg text-white/70 font-light">
            Versatile equipment for comprehensive posterior chain development
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-16">
          {/* Use Case 1 - Nordic Hamstring Curls */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[4/5] rounded-lg bg-white/5 backdrop-blur-sm" aria-hidden="true">
                <div className="flex h-full items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-accent/20" />
                </div>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white">
                Nordic Hamstring Curls
              </h3>
              <p className="mb-4 text-white/70 font-light">
                Eccentric hamstring training for injury prevention and explosive power development.
              </p>
              <ul className="space-y-2 text-white/60 font-light" role="list">
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Reduces hamstring injury risk by up to 51%
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Improves sprint speed and acceleration
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Enhances knee flexion strength
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Use Case 2 - Glute-Ham Raises */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Content (reversed order on desktop) */}
            <motion.div 
              className="lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white">
                Glute-Ham Raises
              </h3>
              <p className="mb-4 text-white/70 font-light">
                Complete posterior chain activation for comprehensive lower body development.
              </p>
              <ul className="space-y-2 text-white/60 font-light" role="list">
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Strengthens glutes, hamstrings, and lower back
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Improves hip extension power
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Enhances athletic performance
                </li>
              </ul>
            </motion.div>
            
            {/* Image Placeholder */}
            <motion.div 
              className="lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[4/5] rounded-lg bg-white/5 backdrop-blur-sm" aria-hidden="true">
                <div className="flex h-full items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-accent/20" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Use Case 3 - Progressive Overload */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[4/5] rounded-lg bg-white/5 backdrop-blur-sm" aria-hidden="true">
                <div className="flex h-full items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-accent/20" />
                </div>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white">
                Progressive Overload
              </h3>
              <p className="mb-4 text-white/70 font-light">
                Adjustable resistance system for continuous strength progression.
              </p>
              <ul className="space-y-2 text-white/60 font-light" role="list">
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Supports beginner to elite athletes
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Band-assisted progression option
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  Weighted progression capability
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default UseCases