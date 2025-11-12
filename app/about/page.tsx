'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-8 py-28 md:py-36 text-left md:pl-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 text-white">
            About
          </h1>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed"
          >
            ExIQx Performance exists at the convergence of biomechanics, precision engineering, and authentic ground-force movement science. We design training systems anchored in mechanical truth—not trends or compromise. Every component respects the physics that govern human performance. Our equipment honors natural human mechanics, joint kinematics, and force vector accuracy. Built for athletes and professionals who demand training tools that translate directly to performance. Movement fidelity is non-negotiable. Every product is engineered with disciplined minimalism and mechanical precision. We eliminate noise. We refine motion. We serve those who pursue biomechanical authenticity. ExIQx exists for the relentless pursuit of mechanical perfection. Built for those who refuse to settle.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}