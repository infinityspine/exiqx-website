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
          <h1 className="text-7xl font-extrabold uppercase tracking-tight mb-8 text-white">
            About
          </h1>
          <div className="w-20 h-[6px] bg-[#e50914] mb-12"></div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12"
          >
            ExIQx exists at the convergence of biomechanics, precision engineering, and authentic 
            ground-force movement science. We design training systems anchored in mechanical truth—not 
            trends or compromise. Every component respects the physics that govern human performance.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12"
          >
            Our equipment honors natural human mechanics, joint kinematics, and force vector accuracy. 
            Built for athletes and professionals who demand training tools that translate directly to 
            performance. Movement fidelity is non-negotiable.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12"
          >
            Every product is engineered with disciplined minimalism and mechanical precision. We eliminate 
            noise. We refine motion. We serve those who pursue biomechanical authenticity.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-0"
          >
            ExIQx exists for the relentless pursuit of mechanical perfection. Built for those who refuse 
            to settle.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
