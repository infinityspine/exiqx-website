'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface CTASectionProps {
  headline?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

const CTASection = memo(function CTASection({
  headline = 'The Foundation of the ExIQx System',
  description = 'Join the waitlist to be first in line when we launch.',
  ctaText = 'Join Waitlist',
  ctaHref = '/join-waitlist',
  secondaryCtaText,
  secondaryCtaHref
}: CTASectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="relative bg-black border-t border-white/10"
      style={{ 
        paddingTop: 'clamp(6rem, 12vw, 10rem)',
        paddingBottom: 'clamp(6rem, 12vw, 10rem)'
      }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h2 
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-[0.05em] text-white"
            style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {headline}
          </h2>

          {/* Description */}
          <p 
            className="text-lg sm:text-xl text-white/70 font-light"
            style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <motion.a
              href={ctaHref}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="inline-block rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:from-red-500 hover:to-red-600 hover:scale-[1.02] shadow-2xl shadow-red-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black w-full sm:w-auto"
            >
              {ctaText}
            </motion.a>

            {/* Secondary CTA */}
            {secondaryCtaText && secondaryCtaHref && (
              <motion.a
                href={secondaryCtaHref}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="inline-block rounded-xl border border-white/20 bg-transparent px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black w-full sm:w-auto"
              >
                {secondaryCtaText}
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default CTASection
