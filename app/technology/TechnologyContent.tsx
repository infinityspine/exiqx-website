'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { Zap, Activity, Cog, TrendingUp } from 'lucide-react'

// Animation variants for smooth section reveals
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export default function TechnologyContent() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Elite scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 origin-left z-50"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <main className="relative bg-black overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center bg-black px-6">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-6 font-inter">
              The Science
            </p>
            <h1 className="text-white font-extrabold text-6xl sm:text-7xl leading-tight mb-8 font-montserrat">
              The Science Behind the<br className="hidden sm:block" /> ExIQx Footplate
            </h1>
            <p className="text-gray-400 text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto font-inter text-center">
              Biomechanics, precision, and performance — re-engineered from the ground up.
            </p>
          </motion.div>
        </section>

        {/* Gradient separator */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black" aria-hidden="true" />

        {/* Section 1: Closed-Chain Plantarflexion Alignment */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center">
                  <Activity className="w-7 h-7 text-red-500" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-montserrat">
                  Closed-Chain Plantarflexion Alignment
                  <span className="block text-2xl sm:text-3xl text-red-500 mt-2">
                    User-Adjustable 10°–70°
                  </span>
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-gray-300 font-inter leading-relaxed text-base sm:text-lg">
              <p>
                ExIQx technology is engineered around <strong className="text-white">user-adjustable closed-chain plantarflexion mechanics</strong>, allowing precise alignment from 10° to 70° to match each athlete's preferred loading angle, performance objective, or rehabilitation phase.
              </p>
              <p>
                Each interval positions the user in a true ground-force vector, directing load through the plantar surface of the foot — from the metatarsal heads and ball of the foot, through the ankle complex, calves, hamstrings, glutes, and spinal erectors.
              </p>
              <p>
                This closed-chain configuration mimics the natural kinetic sequence of sprinting, jumping, and human gait, enabling:
              </p>

              <div className="grid gap-6 sm:grid-cols-3 mt-8">
                <div className="bg-zinc-950/50 border border-red-900/20 rounded-2xl p-6 hover:border-red-900/40 transition-colors duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <p className="text-white font-semibold mb-2">Authentic Posterior-Chain Activation</p>
                  <p className="text-sm text-gray-400">
                    Under real-world ground-force mechanics and kinetic energy transfer
                  </p>
                </div>

                <div className="bg-zinc-950/50 border border-red-900/20 rounded-2xl p-6 hover:border-red-900/40 transition-colors duration-300">
                  <div className="text-4xl mb-4">🦵</div>
                  <p className="text-white font-semibold mb-2">Complete Posterior-Chain Integration</p>
                  <p className="text-sm text-gray-400">
                    Linking plantar fascia to glutes and spinal stabilizers in one continuous vector
                  </p>
                </div>

                <div className="bg-zinc-950/50 border border-red-900/20 rounded-2xl p-6 hover:border-red-900/40 transition-colors duration-300">
                  <div className="text-4xl mb-4">🧩</div>
                  <p className="text-white font-semibold mb-2">Neuromechanical Precision</p>
                  <p className="text-sm text-gray-400">
                    Dial in plantarflexion for optimal strength, speed, or rehabilitation outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visual spacer */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Section 2: Why We Invented the ExIQx Footplate */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-red-500" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-montserrat">
                  Why We Invented the ExIQx Footplate
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-gray-300 font-inter leading-relaxed text-base sm:text-lg">
              <p>
                Conventional Nordic and GHD-style devices stabilize the body by anchoring the posterior ankle and leg, transferring force through the Achilles and calf complex.
              </p>
              <p>
                While this isolates eccentric hamstring strength, it <strong className="text-white">diverts kinetic energy away from the true ground-force pathway</strong> used in sprinting, jumping, and sport-specific motion.
              </p>
              <p>
                In natural athletic movement, energy transfers through the <strong className="text-white">plantar surface of the foot</strong> — especially the ball of the foot and metatarsal heads — creating a closed-chain kinetic line that drives upward through the ankle, knee, and hip into the entire posterior chain.
              </p>
              <p className="text-white text-xl font-semibold">
                That's how athletes create explosive propulsion and elastic recoil.
              </p>
              <p>
                The ExIQx Footplate was designed to restore that authentic energy flow. By re-routing force through the plantar surface instead of the posterior ankle, it:
              </p>

              <div className="bg-gradient-to-br from-zinc-950 to-black border border-red-900/30 rounded-2xl p-8 space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">🔺</div>
                  <p>
                    <strong className="text-white">Mimics the kinetic energy flow</strong> of sprinting and jumping, retraining the body to apply force the way it does in sport.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">⚙️</div>
                  <p>
                    <strong className="text-white">Extends the mechanical lever arm</strong> from the ball of the foot to the knee, increasing torque, muscular activation, and motor-unit recruitment across the hamstrings and glutes.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">🧩</div>
                  <p>
                    <strong className="text-white">Activates the full posterior chain</strong>—from metatarsal heads to spinal erectors—under genuine closed-chain conditions.
                  </p>
                </div>
              </div>

              <p className="text-white text-xl font-semibold pt-6 border-t border-zinc-800">
                This isn't a modified Nordic device; it's a biomechanical re-engineering of how athletes produce and absorb force, restoring the body's authentic ground-up energy system.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Visual spacer */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Section 3: Precision Engineering */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center">
                  <Cog className="w-7 h-7 text-red-500" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-montserrat">
                  Precision Engineering
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-gray-300 font-inter leading-relaxed text-base sm:text-lg">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Hybrid Construction</h3>
                  <p className="text-sm text-gray-400">
                    CNC-machined ⅜" aluminum for lightweight precision; welded 11-gauge steel arms for structural strength
                  </p>
                </div>

                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Aerospace Precision</h3>
                  <p className="text-sm text-gray-400">
                    CNC-machined to aerospace-level tolerances for perfect bearing alignment and zero lateral play
                  </p>
                </div>

                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Durable Finish</h3>
                  <p className="text-sm text-gray-400">
                    Powder-coated black finish for corrosion resistance, with custom color options available on request
                  </p>
                </div>

                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-3">Made in USA</h3>
                  <p className="text-sm text-gray-400">
                    Designed, machined, and assembled in the United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visual spacer */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Section 4: Performance Outcomes */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-red-500" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-montserrat">
                  Performance Outcomes
                </h2>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div className="bg-gradient-to-br from-zinc-950 to-black border border-red-900/30 rounded-2xl p-8 hover:border-red-500/50 transition-colors duration-300">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-white font-bold text-xl mb-3 font-montserrat">Sprint Carryover</h3>
                <p className="text-gray-400 text-sm">
                  Recreates the closed-chain vector of sprint acceleration for direct athletic transfer
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-950 to-black border border-red-900/30 rounded-2xl p-8 hover:border-red-500/50 transition-colors duration-300">
                <div className="text-5xl mb-4">🦵</div>
                <h3 className="text-white font-bold text-xl mb-3 font-montserrat">Posterior-Chain Activation</h3>
                <p className="text-gray-400 text-sm">
                  Maximizes muscular integration from the plantar surface through the glutes and spinal erectors
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-950 to-black border border-red-900/30 rounded-2xl p-8 hover:border-red-500/50 transition-colors duration-300">
                <div className="text-5xl mb-4">🧩</div>
                <h3 className="text-white font-bold text-xl mb-3 font-montserrat">Rehabilitation Crossover</h3>
                <p className="text-gray-400 text-sm">
                  Enables controlled eccentric loading and posterior-chain retraining across progressive angles
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gradient transition to CTA */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black" aria-hidden="true" />

        {/* CTA Section */}
        <motion.section
          className="relative text-center py-32 px-4 sm:px-6 lg:px-8 bg-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white font-extrabold text-5xl sm:text-6xl leading-tight mb-6 font-montserrat">
              Explore the Full Technical Specifications
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl mb-10 font-inter leading-relaxed">
              Dive deeper into the engineering, materials, and biomechanical design that makes the ExIQx Footplate the most advanced posterior-chain training system available.
            </p>
            <Link
              href="/specifications"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              View Full Specifications →
            </Link>
          </div>
        </motion.section>
      </main>
    </>
  )
}
