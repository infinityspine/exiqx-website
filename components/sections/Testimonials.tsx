/**
 * Testimonials Component
 * 
 * Purpose: Display social proof from athletes, trainers,
 * and strength coaches who use ExIQx equipment.
 * 
 * Features:
 * - Testimonial cards with attributions
 * - Accessible semantic structure
 * - ExIQx dark design system
 * - Production-ready placeholder layout
 * 
 * TODO: Add actual testimonial content with real quotes and photos
 */

'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface TestimonialsProps {
  shouldReduceMotion?: boolean
}

const Testimonials = memo(function Testimonials({
  shouldReduceMotion: propShouldReduceMotion
}: TestimonialsProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-[#050505] px-6 py-24 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            id="testimonials-heading"
            className="font-display text-4xl font-extrabold uppercase tracking-[0.05em] text-white lg:text-5xl"
          >
            Trusted by Elite Athletes
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Hear from strength coaches and athletes who trust ExIQx equipment
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial Card 1 */}
          <motion.article
            style={{ y: card1Y, transform: 'translateZ(0)' }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden will-change-transform"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            {/* Quote Icon */}
            <div className="relative mb-4 w-14 h-14 flex items-center justify-center rounded-2xl bg-red-900/20 border border-red-900/40 backdrop-blur-sm">
              <svg
                className="h-7 w-7 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" aria-hidden="true" />
            </div>

            {/* Quote */}
            <blockquote className="relative">
              <p className="mb-6 text-white/80 font-light leading-relaxed">
                Game-changer for our hamstring injury prevention protocol. 
                Our athletes have seen a dramatic reduction in soft tissue injuries.
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="relative flex items-center gap-4">
              {/* Avatar Placeholder */}
              <div
                className="h-12 w-12 rounded-full bg-white/10 border border-zinc-800/60"
                aria-hidden="true"
              />
              
              {/* Author Info */}
              <div>
                <cite className="not-italic font-semibold text-white transition-colors duration-300 group-hover:text-red-400">
                  Dr. Sarah Mitchell
                </cite>
                <p className="text-sm text-white/60 leading-relaxed">
                  Head Strength Coach, D1 Football Program
                </p>
              </div>
            </div>
          </motion.article>

          {/* Testimonial Card 2 */}
          <motion.article
            style={{ y: card2Y, transform: 'translateZ(0)' }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden will-change-transform"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            {/* Quote Icon */}
            <div className="relative mb-4 w-14 h-14 flex items-center justify-center rounded-2xl bg-red-900/20 border border-red-900/40 backdrop-blur-sm">
              <svg
                className="h-7 w-7 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" aria-hidden="true" />
            </div>

            {/* Quote */}
            <blockquote className="relative">
              <p className="mb-6 text-white/80 font-light leading-relaxed">
                The build quality is exceptional. This is professional-grade 
                equipment that belongs in every serious training facility.
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="relative flex items-center gap-4">
              {/* Avatar Placeholder */}
              <div
                className="h-12 w-12 rounded-full bg-white/10 border border-zinc-800/60"
                aria-hidden="true"
              />
              
              {/* Author Info */}
              <div>
                <cite className="not-italic font-semibold text-white transition-colors duration-300 group-hover:text-red-400">
                  Marcus Thompson
                </cite>
                <p className="text-sm text-white/60 leading-relaxed">
                  Owner, Elite Performance Center
                </p>
              </div>
            </div>
          </motion.article>

          {/* Testimonial Card 3 */}
          <motion.article
            style={{ y: card3Y, transform: 'translateZ(0)' }}
            whileHover={shouldReduceMotion ? {} : { 
              y: -4, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 overflow-hidden will-change-transform"
          >
            {/* Internal gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            {/* Quote Icon */}
            <div className="relative mb-4 w-14 h-14 flex items-center justify-center rounded-2xl bg-red-900/20 border border-red-900/40 backdrop-blur-sm">
              <svg
                className="h-7 w-7 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" aria-hidden="true" />
            </div>

            {/* Quote */}
            <blockquote className="relative">
              <p className="mb-6 text-white/80 font-light leading-relaxed">
                Best investment I've made for my training. The biomechanical 
                design makes Nordic curls accessible and effective.
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="relative flex items-center gap-4">
              {/* Avatar Placeholder */}
              <div
                className="h-12 w-12 rounded-full bg-white/10 border border-zinc-800/60"
                aria-hidden="true"
              />
              
              {/* Author Info */}
              <div>
                <cite className="not-italic font-semibold text-white transition-colors duration-300 group-hover:text-red-400">
                  Jessica Rodriguez
                </cite>
                <p className="text-sm text-white/60 leading-relaxed">
                  Professional Track Athlete
                </p>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Optional: Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40 leading-relaxed">
            PATENT-PENDING • ENGINEERED IN ARIZONA • MADE IN THE USA
          </p>
        </div>
      </div>
    </section>
  )
})

export default Testimonials
