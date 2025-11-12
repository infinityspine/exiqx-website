'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-6 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-extrabold uppercase tracking-tight mb-8 text-white">
            Contact
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed tracking-wide mb-6">
            ExIQx Performance provides precision-engineered support for technical specifications, facility integrations, and custom performance solutions.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed tracking-wide mb-6">
            For product inquiries, warranty claims, or custom-engineering requests, our team offers direct consultation and elite installation guidance.
          </p>
          
          <div className="text-white font-semibold mt-8 tracking-wider text-xl mb-6">
            <a 
              href="mailto:support@exiqxperformance.com" 
              className="underline decoration-[#e50914] decoration-2 underline-offset-4 hover:text-gray-300 transition-colors duration-300"
            >
              support@exiqxperformance.com
            </a>
          </div>
          
          <p className="text-lg text-gray-400 leading-relaxed tracking-wide mb-0">
            Responses within 24–48 hours. Dedicated consultation available for institutional and high-volume facility orders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
