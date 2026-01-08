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
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerChildren}
        >
          <motion.h2
            id="use-cases-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
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
        <div className="w-full space-y-16 lg:space-y-12">
          {/* Use Case 1 */}
          <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <motion.div
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      transition: { type: 'spring', stiffness: 180, damping: 20 }
                    }
              }
              className="relative aspect-[3/2] overflow-hidden rounded-lg bg-black lg:col-span-7"
            >
              <Image
                src="/rack-mounted-hero.jpg"
                alt="Athlete performing rack-mounted Nordic hamstring curl on ExIQx system"
                fill
                className="object-contain grayscale"
                quality={85}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="min-w-0 group lg:col-span-5 lg:pl-10">
              <div className="mb-3 font-mono text-xs tracking-[0.25em] text-white/40">01</div>
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white">
                PERFORMANCE TRAINING
              </h3>
              <p className="mb-4 text-white/70 font-medium leading-[1.8] text-lg md:text-xl">
                Eccentric and isometric hamstring loading with plantar surface force transmission
                for sprint mechanics and injury-resistant strength.
              </p>
              <ul className="space-y-2 text-white/60 text-base md:text-lg">
                <li>• Eccentric hamstring strength development</li>
                <li>• Isometric force production capacity</li>
                <li>• Sprint-specific force transmission patterns</li>
              </ul>
            </motion.div>
          </div>

          {/* Use Case 2 */}
          <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <motion.div
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      transition: { type: 'spring', stiffness: 180, damping: 20 }
                    }
              }
              className="relative aspect-[3/2] overflow-hidden rounded-lg bg-black lg:order-2 lg:col-span-7"
            >
              <Image
                src="/images/training/adjustment-mechanism-detail.jpg"
                alt="Close-up of ExIQx footplate angle adjustment mechanism"
                fill
                className="object-contain grayscale"
                quality={85}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="min-w-0 lg:order-1 group lg:col-span-5 lg:pr-10">
              <div className="mb-3 font-mono text-xs tracking-[0.25em] text-white/40">02</div>
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white">
                INJURY PREVENTION & REHAB
              </h3>
              <p className="mb-4 text-white/70 font-medium leading-[1.8] text-lg md:text-xl">
                Hamstring and ACL protocols through plantar surface loading—not posterior ankle
                loading of traditional equipment.
              </p>
              <ul className="space-y-2 text-white/60 text-base md:text-lg">
                <li>• Hamstring strain prevention and rehab</li>
                <li>• ACL and Achilles return-to-play progression</li>
                <li>• Eccentric loading through athletic force pathways</li>
              </ul>
            </motion.div>
          </div>

          {/* Use Case 3 */}
          <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <motion.div
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      transition: { type: 'spring', stiffness: 180, damping: 20 }
                    }
              }
              className="relative aspect-[3/2] overflow-hidden rounded-lg bg-black lg:col-span-7"
            >
              <Image
                src="/Assisted_NordIQ.jpg"
                alt="Athlete performing assisted Nordic hamstring curl on ExIQx system"
                fill
                className="object-contain grayscale"
                quality={85}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="min-w-0 group lg:col-span-5 lg:pl-10">
              <div className="mb-3 font-mono text-xs tracking-[0.25em] text-white/40">03</div>
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white">
                PROGRESSIVE OVERLOAD
              </h3>
              <p className="mb-4 text-white/70 font-medium leading-[1.8] text-lg md:text-xl">
                Scalable plantar surface loading with adjustable ROM—from band-assisted beginners to
                unassisted elite athletes.
              </p>
              <ul className="space-y-2 text-white/60 text-base md:text-lg">
                <li>• Band-assisted progression (beginner-friendly)</li>
                <li>• Adjustable ROM for individual athlete needs</li>
                <li>• Bodyweight eccentric and isometric training</li>
                <li>• Advanced unassisted concentric variations</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default UseCases