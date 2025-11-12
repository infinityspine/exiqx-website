'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { FileText, Settings, Wrench, Mail, Activity } from 'lucide-react'

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

  // Parallax effect for hero
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <>
      {/* Elite scroll progress indicator with glow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{ scaleX }}
        aria-hidden="true"
      >
        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-sm opacity-50" />
      </motion.div>

      <main className="relative bg-black overflow-hidden">
        {/* Hero Section with enhanced depth */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Enhanced background with radial gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
            }}
          />

          {/* Premium grid pattern with glow */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Content with parallax */}
          <motion.div 
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <motion.p 
                className="text-sm font-semibold tracking-[0.25em] text-red-500 uppercase" 
                style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Technical Data
              </motion.p>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight" 
                style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Full Specifications
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Engineered for elite performance.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* Premium separator with glow */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent blur-sm" />
        </div>

        {/* Section 1: Overview with enhanced styling */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <FileText className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-montserrat" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  Overview
                </h2>
              </div>
            </div>

            <motion.div 
              className="text-gray-300 font-inter text-base sm:text-lg backdrop-blur-sm bg-zinc-950/30 border border-zinc-800/50 rounded-2xl shadow-2xl"
              style={{ 
                lineHeight: '1.8',
                padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3.5rem)',
              }}
              whileHover={{ 
                borderColor: 'rgba(127, 29, 29, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                <p>
                  The ExIQx Footplate is engineered for <strong className="text-white">biomechanical precision and elite durability</strong>. Each unit is built in the USA using hybrid aluminum + 11-gauge steel construction, CNC-machined to aerospace-level precision, and finished in a deep black powder coat.
                </p>
              </div>
              <div>
                <p>
                  The inaugural production run features the <strong className="text-white">Rack-Mounted Footplate</strong>, with GHD-Retrofit and Freestanding embodiments coming soon.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Premium separator */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
        </div>

        {/* Section 2: Technical Specifications Table - Elite Edition */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <Settings className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-montserrat" style={{ marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                  Technical Specifications
                </h2>
                <p className="text-gray-400 font-inter" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.6' }}>
                  Complete technical breakdown of the ExIQx Footplate system
                </p>
              </div>
            </div>

            {/* Elite Specifications Table */}
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <motion.div 
                  className="overflow-hidden border border-zinc-800/80 rounded-2xl shadow-2xl backdrop-blur-sm bg-zinc-950/50"
                  whileHover={{
                    borderColor: 'rgba(127, 29, 29, 0.4)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <table className="min-w-full divide-y divide-zinc-800/80">
                    <thead className="bg-gradient-to-b from-zinc-950 to-zinc-950/90">
                      <tr>
                        <th
                          scope="col"
                          className="text-left text-sm font-semibold text-white uppercase tracking-wider font-montserrat"
                          style={{ padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 2.5vw, 1.75rem)' }}
                        >
                          Feature
                        </th>
                        <th
                          scope="col"
                          className="text-left text-sm font-semibold text-white uppercase tracking-wider font-montserrat"
                          style={{ padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 2.5vw, 1.75rem)' }}
                        >
                          Specification
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-black/50 divide-y divide-zinc-800/60">
                      {specifications.map((spec, index) => (
                        <motion.tr
                          key={spec.feature}
                          className="hover:bg-zinc-900/50 transition-all duration-300 group relative"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.03, duration: 0.4 }}
                        >
                          {/* Hover glow effect */}
                          <td 
                            className="text-sm font-semibold text-white font-montserrat group-hover:text-red-400 transition-colors duration-300 relative"
                            style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem) clamp(1.25rem, 2.5vw, 1.75rem)' }}
                          >
                            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10">{spec.feature}</span>
                          </td>
                          <td 
                            className="text-sm text-gray-300 font-inter relative"
                            style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem) clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: '1.7' }}
                          >
                            <span className="relative z-10">{spec.value}</span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Premium separator */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
        </div>

        {/* Section 3: Engineering Highlights - Elite Cards */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <Wrench className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-montserrat" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  Engineering Highlights
                </h2>
              </div>
            </div>

            <div className="text-gray-300 font-inter text-base sm:text-lg" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              {[
                'Hybrid aluminum/steel design provides stiffness and tactile feedback at a manageable 30 lb total weight.',
                'Radial plate geometry locks angles securely and evenly distributes torque.',
                'Laser-cut flanking plates ensure lateral stability under maximal posterior-chain loading.',
                'Powder-coat finish resists abrasion and oxidation for long-term commercial use.',
                'Quick-release architecture allows seamless integration into any 3×3 rack with precision-fit pin interfaces.',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="group relative flex items-start gap-4 bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-xl hover:border-red-900/50 hover:shadow-lg hover:shadow-red-900/10 transition-all duration-300"
                  style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-xl transition-all duration-500" />
                  
                  <div className="text-red-500 text-2xl flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">•</div>
                  <p style={{ lineHeight: '1.7' }} className="relative z-10">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Premium separator */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
        </div>

        {/* Section 4: Biomechanical Summary - Elite Treatment */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-6" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <Activity className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-montserrat text-center">
                Biomechanical Summary
              </h2>
            </div>

            <motion.div 
              className="relative bg-gradient-to-br from-zinc-950/90 via-black to-zinc-950/90 border border-red-900/40 rounded-2xl text-gray-300 font-inter text-base sm:text-lg shadow-2xl overflow-hidden backdrop-blur-sm" 
              style={{ 
                padding: 'clamp(2rem, 4vw, 3rem) clamp(2rem, 5vw, 3.5rem)', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'clamp(1.75rem, 3.5vw, 2.5rem)' 
              }}
              whileHover={{
                borderColor: 'rgba(239, 68, 68, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {[
                {
                  text: 'Closed-chain plantarflexion loading',
                  description: 'channels force through the ball of the foot → knee → hip, mirroring sprint, jump, and gait mechanics.'
                },
                {
                  text: 'Lengthened mechanical lever arm',
                  description: '(ball-of-foot → knee) amplifies torque and posterior-chain recruitment.'
                },
                {
                  text: 'Authentic ground-force vectoring',
                  description: 'aligns training with the kinetic demands of sport and rehabilitation.'
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-red-500 text-2xl flex-shrink-0">→</div>
                  <p style={{ lineHeight: '1.7' }}>
                    <strong className="text-white">{item.text}</strong> {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Premium separator */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
        </div>

        {/* Section 5: Coming Soon - Elite Styling */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="relative bg-gradient-to-br from-red-950/30 via-black to-red-950/20 border border-red-900/50 rounded-2xl text-center overflow-hidden shadow-2xl backdrop-blur-sm" 
              style={{ padding: 'clamp(3.5rem, 7vw, 5.5rem) clamp(2.5rem, 5vw, 4rem)' }}
              whileHover={{
                borderColor: 'rgba(239, 68, 68, 0.7)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-montserrat" style={{ marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                  Coming Soon
                </h2>
                <div className="text-gray-300 font-inter text-base sm:text-lg max-w-3xl mx-auto" style={{ lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <strong className="text-white">GHD-Retrofit Edition</strong> — integrates directly with existing GHD platforms.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <strong className="text-white">Freestanding Edition</strong> — portable, self-supporting design for facilities without rack systems.
                  </motion.p>
                  <motion.div 
                    style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)', paddingTop: 'clamp(2.5rem, 5vw, 3.5rem)', borderTop: '1px solid rgba(127, 29, 29, 0.4)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-red-400 font-semibold">
                      Stay tuned for early-access waitlist
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Premium separator */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
        </div>

        {/* Section 6: Download / Customization - Elite CTAs */}
        <motion.section
          className="relative py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-red-900/20 border border-red-900/40 flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-7 h-7 text-red-500" />
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 blur-xl" />
                </div>
              </motion.div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-montserrat" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  Download & Customization
                </h2>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3rem)' }}>
              {/* Download placeholder - Elite */}
              <motion.div 
                className="bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl text-center shadow-xl hover:border-zinc-700 transition-all duration-300" 
                style={{ padding: 'clamp(3rem, 6vw, 4.5rem) clamp(2rem, 4vw, 3rem)' }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FileText className="w-12 h-12 text-red-500 mx-auto" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white font-montserrat" style={{ marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                  Full Technical Data Sheet
                </h3>
                <p className="text-gray-400 font-inter" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.6', marginBottom: 'clamp(2rem, 4vw, 2.5rem)' }}>
                  Comprehensive technical documentation coming soon
                </p>
                <button
                  disabled
                  className="px-6 py-3 bg-zinc-800 text-gray-500 rounded-lg cursor-not-allowed font-semibold transition-all duration-300"
                >
                  Coming Soon
                </button>
              </motion.div>

              {/* Contact CTA - Elite */}
              <motion.div 
                className="relative bg-gradient-to-br from-red-950/30 via-black to-red-950/20 border border-red-900/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm" 
                style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(2.5rem, 5vw, 4rem)' }}
                whileHover={{
                  borderColor: 'rgba(239, 68, 68, 0.7)',
                  y: -6,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {/* Multiple layered glow effects for depth */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-red-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                {/* Subtle animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(239, 68, 68, 0.1), transparent)',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <motion.h3 
                    className="text-2xl sm:text-3xl font-bold text-white font-montserrat tracking-tight"
                    style={{ marginBottom: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Custom Orders & Inquiries
                  </motion.h3>
                  
                  <motion.div
                    className="w-full flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p 
                      className="text-gray-300 font-inter max-w-2xl mx-auto text-center" 
                      style={{ 
                        fontSize: 'clamp(0.9375rem, 1.75vw, 1.0625rem)', 
                        lineHeight: '1.75',
                        marginBottom: 'clamp(3rem, 6vw, 3.5rem)' // Increased mobile spacing significantly
                      }}
                    >
                      For custom colors, bulk orders, or licensing inquiries —<br className="hidden sm:block" />
                      <strong className="text-white block sm:inline mt-1 sm:mt-0">Contact ExIQx Performance</strong>
                    </p>
                  </motion.div>

                  <motion.a
                    href="mailto:info@exiqx.com"
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-900/50 hover:shadow-2xl"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact Us</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Final gradient with glow */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent" />
        </div>
      </main>
    </>
  )
}