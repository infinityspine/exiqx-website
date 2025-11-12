'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TechnologyContent() {
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
          <div className="w-32 h-[4px] bg-[#e50914] mb-24"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-32">
            The ExIQx Footplate re-engineers posterior-chain training through biomechanical precision and authentic ground-force mechanics. Every component is designed to honor the physics of human movement, creating training systems that translate directly to athletic performance.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white mt-40">
            Closed-Chain Plantarflexion
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-24"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-16">
            ExIQx technology is engineered around user-adjustable closed-chain plantarflexion mechanics, allowing precise alignment from 10° to 70° to match each athlete's preferred loading angle, performance objective, or rehabilitation phase. Each interval positions the user in a true ground-force vector, directing load through the plantar surface of the foot—from the metatarsal heads and ball of the foot, through the ankle complex, calves, hamstrings, glutes, and spinal erectors.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-32">
            This closed-chain configuration mimics the natural kinetic sequence of sprinting, jumping, and human gait, enabling authentic posterior-chain activation under real-world ground-force mechanics. Complete posterior-chain integration links plantar fascia to glutes and spinal stabilizers in one continuous vector. Neuromechanical precision allows athletes to dial in plantarflexion for optimal strength, speed, or rehabilitation outcomes.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white mt-40">
            Why We Invented the ExIQx Footplate
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-24"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-16">
            Conventional Nordic and GHD-style devices stabilize the body by anchoring the posterior ankle and leg, transferring force through the Achilles and calf complex. While this isolates eccentric hamstring strength, it diverts kinetic energy away from the true ground-force pathway used in sprinting, jumping, and sport-specific motion.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-16">
            In natural athletic movement, energy transfers through the plantar surface of the foot—especially the ball of the foot and metatarsal heads—creating a closed-chain kinetic line that drives upward through the ankle, knee, and hip into the entire posterior chain. That's how athletes create explosive propulsion and elastic recoil.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-32">
            The ExIQx Footplate was designed to restore that authentic energy flow. By re-routing force through the plantar surface instead of the posterior ankle, it mimics the kinetic energy flow of sprinting and jumping, extends the mechanical lever arm from the ball of the foot to the knee for increased torque and muscular activation, and activates the full posterior chain from metatarsal heads to spinal erectors under genuine closed-chain conditions. This isn't a modified Nordic device; it's a biomechanical re-engineering of how athletes produce and absorb force, restoring the body's authentic ground-up energy system.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white mt-40">
            Precision Engineering
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-24"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-16">
            Hybrid construction combines CNC-machined ⅜" aluminum for lightweight precision with welded 11-gauge steel arms for structural strength. Every component is machined to aerospace-level tolerances for perfect bearing alignment and zero lateral play.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-32">
            The powder-coated black finish provides corrosion resistance, with custom color options available on request. All ExIQx equipment is designed, machined, and assembled in the United States.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white mt-40">
            Performance Outcomes
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-24"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-16">
            Sprint carryover: recreates the closed-chain vector of sprint acceleration for direct athletic transfer. The footplate positions athletes in the exact force vector used during acceleration, training the neuromuscular system to apply force the way it does in competition.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-16">
            Posterior-chain activation: maximizes muscular integration from the plantar surface through the glutes and spinal erectors. This complete kinetic chain engagement ensures that training adaptations transfer directly to performance outcomes.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-32">
            Rehabilitation crossover: enables controlled eccentric loading and posterior-chain retraining across progressive angles. The adjustable range allows practitioners to match loading patterns to specific rehabilitation phases while maintaining biomechanical authenticity.
          </p>

          <div className="mt-40">
            <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
              Technical Specifications
            </h2>
            <div className="w-32 h-[4px] bg-[#e50914] mb-24"></div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-20">
              Explore the complete engineering, materials, and biomechanical design that make the ExIQx Footplate the most advanced posterior-chain training system available.
            </p>
            
            <Link
              href="/specifications"
              className="text-lg md:text-xl text-white underline decoration-[#e50914] decoration-2 underline-offset-4 hover:text-gray-300 transition-colors duration-300"
            >
              View Full Specifications →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}