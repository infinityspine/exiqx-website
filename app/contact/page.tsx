'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-8 py-28 md:py-36 text-left md:pl-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-7xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Contact
          </h1>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12"
          >
            ExIQx provides technical specifications, custom solutions, and facility installation support. 
            For product inquiries, warranty claims, or custom engineering requirements, contact our team.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-0"
          >
            <a 
              href="mailto:support@exiqxperformance.com" 
              className="text-white font-normal underline decoration-[#e50914] decoration-2 underline-offset-4 hover:text-gray-300 transition-colors"
            >
              support@exiqxperformance.com
            </a>
            {' '}Responses within 24-48 hours. Dedicated consultation available for facility installations and bulk orders.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
