'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
            {/* Image with Elite Styling */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden"
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
          <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-12">
            {/* Image with Elite Styling - FIRST in DOM for mobile */}
            <motion.div 
              className="relative aspect-[4/5] rounded-lg overflow-hidden lg:order-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
              className="lg:order-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
          </div>

          {/* Use Case 3 - Progressive Overload */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Image with Elite Styling - Product Detail Shot */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden"
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