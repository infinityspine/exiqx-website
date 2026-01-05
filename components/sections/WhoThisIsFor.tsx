'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'

interface WhoThisIsForProps {
  shouldReduceMotion?: boolean
}

const WhoThisIsFor = memo(function WhoThisIsFor({
  shouldReduceMotion: propShouldReduceMotion,
}: WhoThisIsForProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  return (
    <section
      className="relative bg-black py-[clamp(4rem,10vw,7rem)]"
      aria-labelledby="who-this-is-for-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerChildren}
        >
          <motion.h2
            id="who-this-is-for-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{ transform: shouldReduceMotion ? undefined : 'translateZ(0)' }}
          >
            Who This Is For
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-10 mx-auto max-w-3xl">
            <ul className="space-y-4 text-base sm:text-lg text-white/85 leading-relaxed">
              <li>Sports performance facilities</li>
              <li>Rehab &amp; return-to-play clinics</li>
              <li>Strength &amp; conditioning coaches</li>
              <li>Elite individual athletes</li>
            </ul>

            <p className="mt-10 text-base sm:text-lg text-white/70 leading-relaxed">
              First equipment to route force through the plantar surface rather than posterior ankle structures.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default WhoThisIsFor


