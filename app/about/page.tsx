import type { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'About | ExIQx Performance',
  description: 'Discover ExIQx Performance — precision-engineered biomechanical equipment designed for elite athletes and performance-driven training.',
}

export default function AboutPage() {
  return (
    <section className="bg-black text-white text-center py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 leading-relaxed">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold uppercase mb-8"
        >
          About
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg opacity-90 space-y-4"
        >
          <p>
            ExIQx Performance represents the convergence of biomechanical science and precision engineering, 
            dedicated to creating elite athletic equipment that delivers authentic ground-force performance. 
            Our mission is to bridge the gap between scientific understanding of human movement and the 
            equipment athletes rely on to maximize their potential. Every component we design undergoes 
            rigorous analysis to ensure it meets the uncompromising standards demanded by serious athletes 
            and performance professionals.
          </p>
          <p>
            At the core of our design philosophy lies a deep commitment to biomechanical authenticity. 
            We understand that true performance enhancement comes from equipment that respects the natural 
            mechanics of the human body while providing the precision and reliability necessary for elite 
            training environments. Our footplates are engineered to replicate authentic ground-force vectors, 
            enabling athletes to train movements that translate directly to competitive performance. This 
            biomechanical precision isn't just a feature—it's the foundation upon which every ExIQx product 
            is built.
          </p>
          <p>
            We serve athletes, coaches, and facilities who refuse to compromise on quality and performance. 
            Our equipment is designed for those who understand that the smallest details matter when pursuing 
            excellence. From professional training facilities to elite home gyms, ExIQx Performance provides 
            the tools necessary to achieve biomechanically sound, performance-driven training outcomes. 
            When you choose ExIQx, you're investing in equipment engineered to the highest standards of 
            precision, durability, and biomechanical integrity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

