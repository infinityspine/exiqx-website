'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function RackMountedPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
        {/* HERO IMAGE (Background) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/rack-mounted-hero.jpg"
            alt="ExIQx Rack-Mounted Footplate"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          {/* Gradient Overlay - Subtle top to bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
        </div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Rack-Mounted Footplate
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
            The flagship ExIQx configuration — precision-mounted to your squat rack uprights
            for elite posterior chain loading through the plantar surface.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/#waitlist"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300"
            >
              Join Waitlist
            </Link>
            <Link
              href="/#technology"
              className="rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-[0.15em] hover:border-red-600 hover:text-red-500 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section className="relative py-28 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/rack-mounted-side.jpg"
              alt="Rack-Mounted Footplate Side View"
              width={800}
              height={800}
              className="rounded-2xl border border-white/10 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Precision-Mounted Stability</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              The rack-mounted footplate anchors securely to 3"×3" uprights using dual
              hitch-pin brackets, ensuring a rigid, stable interface for high-force 
              posterior chain loading. No wobble, no flex — just pure force transfer.
            </p>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>• Fits all standard 43" rack widths (Rogue, Sorinex, Titan)</li>
              <li>• Dual peg + U-collar attachment for rapid setup</li>
              <li>• Tool-free locking system with hitch pin or detent</li>
              <li>• 10°–70° plantarflexion adjustment arc</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= BIOMECHANICAL SECTION ================= */}
      <section className="relative py-28 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Aligned with Human Biomechanics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white/70 leading-relaxed text-lg"
          >
            The rack-mounted system is engineered around a ~38° plantarflexion alignment, 
            mirroring the natural closed-chain vector of sprinting and acceleration. 
            This geometry targets the soleus, gastrocnemius, and hamstrings through 
            their full length-tension curve — enabling concentric, eccentric, and 
            isometric loading without posterior ankle restraint.
          </motion.p>
        </div>
      </section>

      {/* ================= SPECS SECTION ================= */}
      <section className="relative py-28 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
            <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
              <li>• Footplate Width: 20–24" (optional lateral stabilizers)</li>
              <li>• Adjustment Plate Radius: ~4" with 15° hole spacing</li>
              <li>• Angle Range: 10°–70° plantarflexion</li>
              <li>• Material: 11-gauge steel with powder-coated finish</li>
              <li>• Weight: ~30 lbs assembled</li>
              <li>• Mount Type: Dual-bracket rack interface (peg + collar)</li>
              <li>• Tool-Free Adjustability: Hitch pin, detent, or twist-lock collar</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/rack-mounted-detail.jpg"
              alt="Rack-Mounted Footplate Detail"
              width={800}
              height={800}
              className="rounded-2xl border border-white/10 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-b from-black via-black/80 to-red-950/20 border-t border-white/10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          The Foundation of the ExIQx System
        </motion.h2>
        <Link
          href="/#waitlist"
          className="rounded-full bg-red-600 px-10 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-red-700 transition-all duration-300"
        >
          Join Waitlist
        </Link>
      </section>
    </main>
  )
}