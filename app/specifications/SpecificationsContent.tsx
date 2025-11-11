'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { FileText, Settings, Wrench, Mail } from 'lucide-react'

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

const specifications = [
  { feature: 'Model', value: 'Rack-Mounted Footplate (Launch Edition)' },
  { feature: 'Footplate Angle Range', value: '10° – 70° user-adjustable via five-position radial locking plate' },
  { feature: 'Adjustment Mechanism', value: 'Radial locking plate with five discrete holes + quick-release hitch pin for tool-free angle changes' },
  { feature: 'Closed-Chain Mechanics', value: 'Force directed through plantar surface — from metatarsal heads to full posterior chain' },
  { feature: 'Plantarflexion Alignment', value: 'User-tuned closed-chain intervals that mimic natural sprint and jump vectors' },
  { feature: 'Construction', value: 'Hybrid aluminum + 11-gauge steel for optimal balance of precision and strength' },
  { feature: 'Machining Tolerances', value: 'CNC-machined to aerospace-level precision for perfect bearing alignment and zero lateral play' },
  { feature: 'Mounting Compatibility', value: 'Available in precision-fit variants for 3×3 uprights with 5⁄8-in or 1-in pin interfaces' },
  { feature: 'Footplate Width', value: '24 in standard' },
  { feature: 'Finish', value: 'Powder-coated black (custom colors available — contact for quote)' },
  { feature: 'Bearings / Hardware', value: 'Press-fit ball bearings • Stainless hardware • Quick-release pins' },
  { feature: 'Weight (Assembled)', value: '≈ 30 lb' },
  { feature: 'Country of Manufacture', value: 'USA' },
]

export default function SpecificationsContent() {
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
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <p className="text-sm font-semibold tracking-[0.25em] text-red-500 mb-6 uppercase">
                Technical Data
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat leading-tight">
                Full Specifications
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed">
                Engineered for elite performance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gradient separator */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black" aria-hidden="true" />

        {/* Section 1: Overview */}
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
                  <FileText className="w-7 h-7 text-red-500" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-montserrat">
                  Overview
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-gray-300 font-inter leading-relaxed text-base sm:text-lg">
              <p>
                The ExIQx Footplate is engineered for <strong className="text-white">biomechanical precision and elite durability</strong>. Each unit is built in the USA using hybrid aluminum + 11-gauge steel construction, CNC-machined to aerospace-level precision, and finished in a deep black powder coat.
              </p>
              <p>
                The inaugural production run features the <strong className="text-white">Rack-Mounted Footplate</strong>, with GHD-Retrofit and Freestanding embodiments coming soon.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Visual spacer */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Section 2: Technical Specifications Table */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center">
                  <Settings className="w-7 h-7 text-red-500" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-montserrat">
                  Technical Specifications
                </h2>
                <p className="text-gray-400 font-inter">
                  Complete technical breakdown of the ExIQx Footplate system
                </p>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-zinc-800 rounded-2xl">
                  <table className="min-w-full divide-y divide-zinc-800">
                    <thead className="bg-zinc-950">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider font-montserrat"
                        >
                          Feature
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider font-montserrat"
                        >
                          Specification
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-black divide-y divide-zinc-800">
                      {specifications.map((spec, index) => (
                        <motion.tr
                          key={spec.feature}
                          className="hover:bg-zinc-950/50 transition-colors duration-200 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.03, duration: 0.4 }}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-white font-montserrat group-hover:text-red-400 transition-colors duration-200">
                            {spec.feature}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300 font-inter leading-relaxed">
                            {spec.value}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visual spacer */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Section 3: Engineering Highlights */}
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
                  <Wrench className="w-7 h-7 text-red-500" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-montserrat">
                  Engineering Highlights
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 font-inter leading-relaxed text-base sm:text-lg">
              <div className="flex items-start gap-4 bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-900/40 transition-colors duration-300">
                <div className="text-red-500 text-2xl flex-shrink-0">•</div>
                <p>
                  Hybrid aluminum/steel design provides stiffness and tactile feedback at a manageable 30 lb total weight.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-900/40 transition-colors duration-300">
                <div className="text-red-500 text-2xl flex-shrink-0">•</div>
                <p>
                  Radial plate geometry locks angles securely and evenly distributes torque.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-900/40 transition-colors duration-300">
                <div className="text-red-500 text-2xl flex-shrink-0">•</div>
                <p>
                  Laser-cut flanking plates ensure lateral stability under maximal posterior-chain loading.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-900/40 transition-colors duration-300">
                <div className="text-red-500 text-2xl flex-shrink-0">•</div>
                <p>
                  Powder-coat finish resists abrasion and oxidation for long-term commercial use.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 hover:border-red-900/40 transition-colors duration-300">
                <div className="text-red-500 text-2xl flex-shrink-0">•</div>
                <p>
                  Quick-release architecture allows seamless integration into any 3×3 rack with precision-fit pin interfaces.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visual spacer */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Section 4: Biomechanical Summary */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 font-montserrat text-center">
              Biomechanical Summary
            </h2>

            <div className="bg-gradient-to-br from-zinc-950 to-black border border-red-900/30 rounded-2xl p-8 sm:p-12 space-y-6 text-gray-300 font-inter leading-relaxed text-base sm:text-lg">
              <div className="flex items-start gap-4">
                <div className="text-red-500 text-2xl flex-shrink-0">→</div>
                <p>
                  <strong className="text-white">Closed-chain plantarflexion loading</strong> channels force through the ball of the foot → knee → hip, mirroring sprint, jump, and gait mechanics.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-red-500 text-2xl flex-shrink-0">→</div>
                <p>
                  <strong className="text-white">Lengthened mechanical lever arm</strong> (ball-of-foot → knee) amplifies torque and posterior-chain recruitment.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-red-500 text-2xl flex-shrink-0">→</div>
                <p>
                  <strong className="text-white">Authentic ground-force vectoring</strong> aligns training with the kinetic demands of sport and rehabilitation.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visual spacer */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Section 5: Coming Soon */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/40 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-montserrat">
                Coming Soon
              </h2>
              <div className="space-y-4 text-gray-300 font-inter text-base sm:text-lg max-w-3xl mx-auto">
                <p>
                  <strong className="text-white">GHD-Retrofit Edition</strong> — integrates directly with existing GHD platforms.
                </p>
                <p>
                  <strong className="text-white">Freestanding Edition</strong> — portable, self-supporting design for facilities without rack systems.
                </p>
                <div className="mt-8 pt-8 border-t border-red-900/30">
                  <p className="text-red-400 font-semibold">
                    Stay tuned for early-access waitlist
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

        {/* Section 6: Download / Customization */}
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
                  <Mail className="w-7 h-7 text-red-500" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-montserrat">
                  Download & Customization
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {/* Download placeholder */}
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 text-center">
                <FileText className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">
                  Full Technical Data Sheet
                </h3>
                <p className="text-gray-400 font-inter mb-6">
                  Comprehensive technical documentation coming soon
                </p>
                <button
                  disabled
                  className="px-6 py-3 bg-zinc-800 text-gray-500 rounded-lg cursor-not-allowed font-semibold"
                >
                  Coming Soon
                </button>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-900/40 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
                  Custom Orders & Inquiries
                </h3>
                <p className="text-gray-300 font-inter mb-6 max-w-2xl mx-auto">
                  For custom colors, bulk orders, or licensing inquiries —<br />
                  <strong className="text-white">Contact ExIQx Performance</strong>
                </p>
                <a
                  href="mailto:info@exiqx.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final gradient */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black" aria-hidden="true" />
      </main>
    </>
  )
}
