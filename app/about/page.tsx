'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight uppercase mb-10 text-white">
            About
          </h1>
          <div className="w-24 h-1 bg-[#e50914] mx-auto mb-12"></div>
          
          <div className="text-lg md:text-xl text-gray-300 font-light leading-loose space-y-6">
            <p>
              ExIQx exists at the intersection of biomechanics, precision engineering, and authentic 
              ground-force movement. We design training equipment that honors the physics of human 
              performance—not trends, not shortcuts, but biomechanical truth. Every component, every 
              angle, every force vector is calculated to respect the mechanics that govern human 
              movement and athletic expression.
            </p>
            <p>
              Our equipment is built for athletes, coaches, and performance professionals who demand 
              training systems that replicate real-world force vectors, joint mechanics, and tissue 
              loading patterns. Movement fidelity is non-negotiable. Every product is engineered to 
              translate seamlessly from the training floor to competition, ensuring that the work 
              you invest here manifests where it matters most.
            </p>
            <p>
              ExIQx exists for the relentless pursuit of mechanical perfection and human potential. 
              Our tools are forged for those who refuse to compromise on authenticity, precision, and 
              performance. This is equipment designed by the standards of biomechanical science, built 
              for those who understand that excellence is not a destination—it's a continuous refinement 
              of mechanics, intent, and execution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
