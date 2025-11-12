'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TechnologyPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-8 py-28 md:py-36 text-left md:pl-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Technology
          </h1>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed" style={{ marginBottom: '100px' }}>
            The ExIQx Footplate re-engineers posterior-chain training through biomechanical precision and authentic ground-force mechanics. Every component is designed to honor the physics of human movement, creating training systems that translate directly to athletic performance.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Closed-Chain Plantarflexion
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed" style={{ marginBottom: '100px' }}>
            ExIQx technology is engineered around user-adjustable closed-chain plantarflexion mechanics, allowing precise alignment from 10° to 70° to match each athlete's preferred loading angle, performance objective, or rehabilitation phase. Each interval positions the user in a true ground-force vector, directing load through the plantar surface of the foot—from the metatarsal heads and ball of the foot, through the ankle complex, calves, hamstrings, glutes, and spinal erectors. This closed-chain configuration mimics sprinting, jumping, and human gait, ensuring authentic kinetic sequence engagement.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Why We Invented the ExIQx Footplate
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed" style={{ marginBottom: '100px' }}>
            Conventional Nordic and GHD-style devices stabilize the body by anchoring the posterior ankle and leg, transferring force through the Achilles and calf complex. This isolates the hamstrings but diverts kinetic energy away from the true ground-force pathway. In natural athletic movement, energy transfers through the plantar surface—especially the ball of the foot—creating a closed-chain kinetic line that drives through the ankle, knee, and hip into the entire posterior chain. The ExIQx Footplate restores that authentic energy flow. By routing force through the plantar surface instead of the posterior ankle, it mirrors sprinting and jumping mechanics, extending the lever arm from the ball of the foot to the knee for increased torque and full posterior-chain activation.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Precision Engineering
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed" style={{ marginBottom: '100px' }}>
            Hybrid construction combines CNC-machined ⅜" aluminum for lightweight precision with welded 11-gauge steel arms for structural strength. Every component is machined to aerospace-level tolerances for perfect bearing alignment and zero lateral play. The matte black powder coat provides corrosion resistance with custom finishes available on request. All ExIQx systems are engineered, machined, and assembled in the United States.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Performance Outcomes
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-32">
            <span className="font-semibold text-white">Sprint carryover:</span> replicates the closed-chain vector of sprint acceleration for direct athletic transfer. The footplate positions athletes in the precise ground-force vector used during acceleration.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-32">
            <span className="font-semibold text-white">Posterior-chain activation:</span> maximizes muscular integration from the plantar surface through the glutes and spinal stabilizers for true kinetic-chain transfer.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed" style={{ marginBottom: '100px' }}>
            <span className="font-semibold text-white">Rehabilitation crossover:</span> allows controlled eccentric loading across adjustable angles, enabling biomechanically precise retraining through every phase of recovery.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Technical Specifications
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-32">
            Explore the engineering, materials, and biomechanical design that make the ExIQx Footplate the most advanced posterior-chain training system available.
          </p>
          
          <Link
            href="/specifications"
            className="text-lg md:text-xl text-white underline decoration-[#e50914] decoration-2 underline-offset-4 hover:text-gray-300 transition-colors duration-300"
          >
            View Full Specifications →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}