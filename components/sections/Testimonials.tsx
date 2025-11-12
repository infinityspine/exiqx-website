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

const Testimonials = memo(function Testimonials() {
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
          <p className="mt-4 text-lg text-white/70">
            Hear from strength coaches and athletes who trust ExIQx equipment
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial Card 1 */}
          <article className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
            {/* Quote Icon */}
            <div className="mb-4 text-accent" aria-hidden="true">
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote */}
            <blockquote>
              <p className="mb-6 text-white/80 font-light">
                Game-changer for our hamstring injury prevention protocol. 
                Our athletes have seen a dramatic reduction in soft tissue injuries.
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Avatar Placeholder */}
              <div
                className="h-12 w-12 rounded-full bg-white/10"
                aria-hidden="true"
              />
              
              {/* Author Info */}
              <div>
                <cite className="not-italic font-semibold text-white">
                  Dr. Sarah Mitchell
                </cite>
                <p className="text-sm text-white/60">
                  Head Strength Coach, D1 Football Program
                </p>
              </div>
            </div>
          </article>

          {/* Testimonial Card 2 */}
          <article className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
            {/* Quote Icon */}
            <div className="mb-4 text-accent" aria-hidden="true">
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote */}
            <blockquote>
              <p className="mb-6 text-white/80 font-light">
                The build quality is exceptional. This is professional-grade 
                equipment that belongs in every serious training facility.
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Avatar Placeholder */}
              <div
                className="h-12 w-12 rounded-full bg-white/10"
                aria-hidden="true"
              />
              
              {/* Author Info */}
              <div>
                <cite className="not-italic font-semibold text-white">
                  Marcus Thompson
                </cite>
                <p className="text-sm text-white/60">
                  Owner, Elite Performance Center
                </p>
              </div>
            </div>
          </article>

          {/* Testimonial Card 3 */}
          <article className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
            {/* Quote Icon */}
            <div className="mb-4 text-accent" aria-hidden="true">
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote */}
            <blockquote>
              <p className="mb-6 text-white/80 font-light">
                Best investment I've made for my training. The biomechanical 
                design makes Nordic curls accessible and effective.
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              {/* Avatar Placeholder */}
              <div
                className="h-12 w-12 rounded-full bg-white/10"
                aria-hidden="true"
              />
              
              {/* Author Info */}
              <div>
                <cite className="not-italic font-semibold text-white">
                  Jessica Rodriguez
                </cite>
                <p className="text-sm text-white/60">
                  Professional Track Athlete
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Optional: Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Used by 500+ Athletes Nationwide
          </p>
        </div>
      </div>
    </section>
  )
})

export default Testimonials