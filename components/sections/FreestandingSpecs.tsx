'use client'

import React, { memo } from 'react'

const FreestandingSpecs = memo(() => {
  const specs = [
    {
      label: 'Footplate Width',
      value: '24" standard (optional lateral stabilizers for added platform width)'
    },
    {
      label: 'Footplate Angle Range',
      value: '10°–70° user-adjustable via five-position radial locking plate'
    },
    {
      label: 'Plantarflexion Alignment',
      value: 'Closed-chain alignment mimicking natural sprinting and jump vectors; user-adjustable 10°–70°'
    },
    {
      label: 'Adjustment Mechanism',
      value: 'Radial locking plate with five discrete holes and tool-free quick-release hitch pin'
    },
    {
      label: 'Construction',
      value: 'Hybrid aluminum + 11-gauge steel for precision and strength'
    },
    {
      label: 'Machining Tolerances',
      value: 'CNC-machined to aerospace-level precision for perfect bearing alignment and zero lateral play'
    },
    {
      label: 'Mounting Compatibility',
      value: 'Precision-fit variants for 3×3 uprights with 5/8" or 1" pin interfaces'
    },
    {
      label: 'Material Finish',
      value: 'Powder-coated black (custom colors available upon request)'
    },
    {
      label: 'Weight',
      value: '≈ 30 lbs assembled'
    },
    {
      label: 'Closed-Chain Mechanics',
      value: 'Force directed through plantar surface (ball of foot → knee → hip) for authentic ground-force performance'
    },
    {
      label: 'Adjustability',
      value: 'Tool-free angle selection and quick interchange between configurations'
    },
    {
      label: 'Country of Manufacture',
      value: 'USA'
    }
  ]

  return (
    <section className="bg-black text-white px-6 sm:px-8" style={{ paddingTop: 'clamp(6rem, 12vw, 10rem)', paddingBottom: 'clamp(6rem, 12vw, 10rem)' }}>
      <div className="max-w-5xl mx-auto text-center" style={{ marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
        <h2 className="font-bold font-montserrat" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
          Technical Specifications
        </h2>
        <p className="text-gray-400 font-inter" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.6' }}>
          Precision-engineered biomechanics for authentic ground-force performance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 sm:gap-8">
        {specs.map((spec, index) => (
          <div 
            key={index}
            className="bg-zinc-950/50 border border-zinc-800 rounded-2xl transition-all duration-300 hover:border-zinc-700"
            style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            <div className="font-semibold text-white font-inter" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
              {spec.label}
            </div>
            <div className="text-gray-400 font-inter" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.7' }}>
              {spec.value}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-gray-400 font-inter" style={{ marginTop: 'clamp(4rem, 8vw, 6rem)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.8' }}>
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <p>
            <strong className="text-white">Biomechanical Highlights:</strong> Closed-chain plantarflexion channels force through the metatarsal heads and plantar surface, replicating true athletic ground-force mechanics.
          </p>
        </div>
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <p>
            <strong className="text-white">Lengthened Lever Arm:</strong> Ball-of-foot to knee geometry increases torque and posterior-chain recruitment.
          </p>
        </div>
        <div>
          <p>
            <strong className="text-white">Authentic Kinetic Transfer:</strong> Mimics the energy flow of sprinting, jumping, and gait for sport-specific performance carryover.
          </p>
        </div>
      </div>
    </section>
  )
})

FreestandingSpecs.displayName = 'FreestandingSpecs'

export default FreestandingSpecs