/**
 * FootplateFeatures Component
 * 
 * Purpose: Showcase technical specifications and key features
 * of the rack-mounted footplate product.
 * 
 * Features:
 * - Responsive grid layout for features
 * - Accessible semantic HTML
 * - ExIQx dark design system
 * - Production-ready placeholder structure
 * 
 * TODO: Add actual feature cards with icons and detailed specs
 */

'use client'

import { memo } from 'react'

const FootplateFeatures = memo(function FootplateFeatures() {
  return (
    <section
      id="features"
      className="relative min-h-screen bg-[#050505] px-6 py-20 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            id="features-heading"
            className="font-display text-4xl font-extrabold uppercase tracking-[0.05em] text-white lg:text-5xl"
          >
            Technical Specifications
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Patent-pending design engineered for elite performance
          </p>
        </div>

        {/* Feature Grid Placeholder */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <div className="h-6 w-6 rounded bg-accent" aria-hidden="true" />
            </div>
            <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-[0.03em] text-white">
              Precision Engineering
            </h3>
            <p className="text-white/60">
              CNC-machined aluminum construction for unmatched durability
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <div className="h-6 w-6 rounded bg-accent" aria-hidden="true" />
            </div>
            <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-[0.03em] text-white">
              Universal Compatibility
            </h3>
            <p className="text-white/60">
              Fits standard power racks with 2x2" or 3x3" uprights
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <div className="h-6 w-6 rounded bg-accent" aria-hidden="true" />
            </div>
            <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-[0.03em] text-white">
              Biomechanical Optimized
            </h3>
            <p className="text-white/60">
              Designed for optimal posterior chain activation
            </p>
          </div>
        </div>

        {/* Technical Specs Link (Optional) */}
        <div className="mt-16 text-center">
          <a
            href="/specifications"
            className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View Full Specifications →
          </a>
        </div>
      </div>
    </section>
  )
})

export default FootplateFeatures