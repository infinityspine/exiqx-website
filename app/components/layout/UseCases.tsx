/**
 * UseCases Component
 * 
 * Purpose: Showcase real-world training applications and
 * biomechanical benefits of the footplate system.
 * 
 * Features:
 * - Visual use case demonstrations
 * - Accessible semantic structure
 * - ExIQx dark design system
 * - Production-ready placeholder layout
 * 
 * TODO: Add actual use case content with imagery and detailed descriptions
 */

'use client'

import { memo } from 'react'

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
          <p className="mt-4 text-lg text-white/70">
            Versatile equipment for comprehensive posterior chain development
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-16">
          {/* Use Case 1 */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="aspect-video rounded-xl bg-white/5 backdrop-blur-sm" aria-hidden="true">
              <div className="flex h-full items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-accent/20" />
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white">
                Nordic Hamstring Curls
              </h3>
              <p className="mb-4 text-white/70">
                Eccentric hamstring training for injury prevention and explosive power development.
              </p>
              <ul className="space-y-2 text-white/60" role="list">
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
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Content (reversed order on desktop) */}
            <div className="lg:order-2">
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white">
                Glute-Ham Raises
              </h3>
              <p className="mb-4 text-white/70">
                Complete posterior chain activation for comprehensive lower body development.
              </p>
              <ul className="space-y-2 text-white/60" role="list">
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
            </div>
            
            {/* Image Placeholder */}
            <div className="aspect-video rounded-xl bg-white/5 backdrop-blur-sm lg:order-1" aria-hidden="true">
              <div className="flex h-full items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-accent/20" />
              </div>
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="aspect-video rounded-xl bg-white/5 backdrop-blur-sm" aria-hidden="true">
              <div className="flex h-full items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-accent/20" />
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h3 className="mb-4 font-display text-3xl font-bold uppercase tracking-[0.03em] text-white">
                Progressive Overload
              </h3>
              <p className="mb-4 text-white/70">
                Adjustable resistance system for continuous strength progression.
              </p>
              <ul className="space-y-2 text-white/60" role="list">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default UseCases