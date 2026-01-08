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
      className="relative bg-black py-[clamp(4rem,10vw,7rem)]"
      aria-labelledby="use-cases-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-[clamp(2rem,5vw,4rem)] text-center flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.h2
            id="use-cases-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{ transform: 'translateZ(0)' }}
          >
            TRAINING APPLICATIONS.
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-prose mx-auto text-center"
          >
            Ground-force transmission training for performance, rehabilitation, and development.
          </motion.p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="w-full space-y-16">
          {/* Use Case 1 - Nordic Hamstring Curls */}
          <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-2">
            {/* Image with Elite Styling */}
            <motion.div 
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { 
                y: -6, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 180, damping: 20 }
              }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="relative w-full min-w-0 max-w-full aspect-[3/2] rounded-lg overflow-hidden border border-zinc-800/60 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)] will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              <Image
                src="/images/training/nordic-curl-athlete.jpg"
                alt="Athlete performing Nordic hamstring curl on ExIQx footplate"
                fill
                className="object-cover object-[50%_25%] grayscale brightness-75"
                quality={85}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
              {/* Red accent gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Oval/vignette frame to match Cards 1 & 2 photo treatment */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.92)_100%)]" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              variants={fadeUp}
              className="min-w-0 group will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-red-400">
                PERFORMANCE TRAINING
              </h3>
              <p className="mb-4 text-white/70 font-medium leading-[1.8] text-lg md:text-xl">
                Eccentric and isometric hamstring loading with plantar surface force transmission for sprint mechanics and injury-resistant strength.
              </p>
              <ul className="space-y-2 text-white/60 font-normal text-base md:text-lg" role="list">
                {[
                  'Eccentric hamstring strength development',
                  'Isometric force production capacity',
                  'Sprint-specific force transmission patterns'
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
          <div className="grid w-full min-w-0 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-12">
            {/* Image with Elite Styling - FIRST in DOM for mobile */}
            <motion.div 
              variants={fadeUp}
              className="relative w-full min-w-0 max-w-full aspect-[3/2] rounded-lg overflow-hidden lg:order-2 border border-zinc-800/60 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)] will-change-transform"
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
                className="object-cover object-[50%_25%] grayscale brightness-75"
                quality={85}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            
            {/* Content - SECOND in DOM for mobile, FIRST on desktop (lg:order-1) */}
            <motion.div 
              variants={fadeUp}
              className="min-w-0 lg:order-1 group will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-red-400">
                INJURY PREVENTION & REHAB
              </h3>
              <p className="mb-4 text-white/70 font-medium leading-[1.8] text-lg md:text-xl">
                Hamstring and ACL protocols through plantar surface loading—not the posterior ankle loading of traditional equipment.
              </p>
              <ul className="space-y-2 text-white/60 font-normal text-base md:text-lg" role="list">
                {[
                  'Hamstring strain prevention and rehab',
                  'ACL and Achilles return-to-play progression',
                  'Eccentric loading through athletic force pathways'
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
          <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-2">
            {/* Image with Elite Styling - Product Detail Shot */}
            <motion.div 
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { 
                y: -6, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 180, damping: 20 }
              }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="relative w-full min-w-0 max-w-full aspect-[3/2] rounded-lg overflow-hidden border border-zinc-800/60 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)] will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              <Image
                src="/images/training/adjustment-mechanism-detail.jpg"
                alt="Close-up of ExIQx footplate angle adjustment mechanism"
                fill
                className="object-cover object-[50%_25%] grayscale brightness-75"
                quality={85}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
              {/* Red accent gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              variants={fadeUp}
              className="min-w-0 group will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white transition-colors duration-300 group-hover:text-red-400">
                Progressive Overload
              </h3>
              <p className="mb-4 text-white/70 font-medium leading-[1.8] text-lg md:text-xl">
                Scalable plantar surface loading with adjustable ROM—from band-assisted beginners to unassisted elite athletes.
              </p>
              <ul className="space-y-2 text-white/60 font-normal text-base md:text-lg" role="list">
                {[
                  'Band-assisted progression (beginner-friendly)',
                  'Adjustable ROM for individual athlete needs',
                  'Bodyweight eccentric and isometric training',
                  'Advanced unassisted concentric variations'
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