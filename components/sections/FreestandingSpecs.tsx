'use client'

import React, { memo } from 'react'

const FreestandingSpecs = memo(() => {
  return (
    <section className="bg-black text-white py-24 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-montserrat">Technical Specifications</h2>
        <p className="text-gray-400 text-lg font-inter">
          Precision-engineered biomechanics for authentic ground-force performance.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-white/90">
          <tbody className="divide-y divide-white/10">
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Footplate Width</td>
              <td className="py-4 text-gray-300 font-inter">24" standard (optional lateral stabilizers for added platform width)</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Footplate Angle Range</td>
              <td className="py-4 text-gray-300 font-inter">10°–70° user-adjustable via five-position radial locking plate</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Plantarflexion Alignment</td>
              <td className="py-4 text-gray-300 font-inter">Closed-chain alignment mimicking natural sprinting and jump vectors; user-adjustable 10°–70°</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Adjustment Mechanism</td>
              <td className="py-4 text-gray-300 font-inter">Radial locking plate with five discrete holes and tool-free quick-release hitch pin</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Construction</td>
              <td className="py-4 text-gray-300 font-inter">Hybrid aluminum + 11-gauge steel for precision and strength</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Machining Tolerances</td>
              <td className="py-4 text-gray-300 font-inter">CNC-machined to aerospace-level precision for perfect bearing alignment and zero lateral play</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Mounting Compatibility</td>
              <td className="py-4 text-gray-300 font-inter">Precision-fit variants for 3×3 uprights with 5/8" or 1" pin interfaces</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Material Finish</td>
              <td className="py-4 text-gray-300 font-inter">Powder-coated black (custom colors available upon request)</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Weight</td>
              <td className="py-4 text-gray-300 font-inter">≈ 30 lbs assembled</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Closed-Chain Mechanics</td>
              <td className="py-4 text-gray-300 font-inter">Force directed through plantar surface (ball of foot → knee → hip) for authentic ground-force performance</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Adjustability</td>
              <td className="py-4 text-gray-300 font-inter">Tool-free angle selection and quick interchange between configurations</td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-semibold text-white font-inter">Country of Manufacture</td>
              <td className="py-4 text-gray-300 font-inter">USA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12 text-gray-400 text-base leading-relaxed max-w-3xl mx-auto font-inter">
        <p className="mb-4">
          <strong className="text-white">Biomechanical Highlights:</strong> Closed-chain plantarflexion channels force through the metatarsal heads and plantar surface, replicating true athletic ground-force mechanics.
        </p>
        <p className="mb-4">
          <strong className="text-white">Lengthened Lever Arm:</strong> Ball-of-foot to knee geometry increases torque and posterior-chain recruitment.
        </p>
        <p>
          <strong className="text-white">Authentic Kinetic Transfer:</strong> Mimics the energy flow of sprinting, jumping, and gait for sport-specific performance carryover.
        </p>
      </div>
    </section>
  )
})

FreestandingSpecs.displayName = 'FreestandingSpecs'

export default FreestandingSpecs
