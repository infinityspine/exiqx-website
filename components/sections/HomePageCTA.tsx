/**
 * CTASection Component
 * 
 * Purpose: Final conversion-focused call-to-action section
 * to drive waitlist signups or product inquiries.
 * 
 * Features:
 * - Prominent CTA buttons
 * - Accessible semantic structure
 * - ExIQx dark design system with red accent
 * - Production-ready placeholder layout
 * 
 * TODO: Add actual form integration and conversion tracking
 */

'use client'

import { memo } from 'react'

const CTASection = memo(function CTASection() {
  return (
    <section
      id="cta"
      className="relative min-h-screen bg-black px-6 py-20 lg:py-32"
      aria-labelledby="cta-heading"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2
            id="cta-heading"
            className="font-display text-4xl font-extrabold uppercase tracking-[0.05em] text-white lg:text-6xl"
          >
            Elevate Your Training
          </h2>
          <p className="mt-6 text-xl text-white/80 lg:text-2xl">
            Join the waitlist for exclusive early access to the{' '}
            <span className="font-semibold text-accent">
              Rack-Mounted Footplate
            </span>
          </p>
        </div>

        {/* Value Propositions */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {/* Benefit 1 */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-2 text-2xl font-bold text-accent">50%</div>
            <p className="text-sm text-white/70">
              Reduction in hamstring injuries
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-2 text-2xl font-bold text-accent">Patent-Pending</div>
            <p className="text-sm text-white/70">
              Proprietary design technology
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-2 text-2xl font-bold text-accent">Lifetime</div>
            <p className="text-sm text-white/70">
              Warranty on all components
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="#waitlist"
            className="inline-block rounded-xl bg-accent px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_10px_30px_rgba(220,38,38,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Join Waitlist
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-block rounded-xl border border-white/25 bg-white/5 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/90 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Request Demo
          </a>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Engineered in Arizona • Made in the USA
          </p>
          <p className="text-xs text-white/40">
            Limited initial production run
          </p>
        </div>

        {/* Optional: Email Capture Form Placeholder */}
        <div className="mt-16">
          <form className="mx-auto max-w-md" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Notify Me
              </button>
            </div>
            <p className="mt-2 text-xs text-white/40">
              Be the first to know when we launch
            </p>
          </form>
        </div>
      </div>
    </section>
  )
})

export default CTASection