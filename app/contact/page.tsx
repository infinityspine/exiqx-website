'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-8 py-28 md:py-36 text-left md:pl-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Contact
          </h1>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-32 pb-8">
            ExIQx Performance provides precision-engineered support for technical specifications, facility integrations, and custom performance solutions. For product inquiries, warranty claims, or custom-engineering requests, our team offers direct consultation and elite installation guidance.
          </p>
          
          <div className="text-white font-semibold tracking-wider text-2xl pt-8 mb-32 pb-8 block text-left">
            <a 
              href="mailto:support@exiqxperformance.com" 
              className="underline decoration-[#e50914] decoration-2 underline-offset-4 hover:text-gray-300 transition-colors duration-300"
            >
              support@exiqxperformance.com
            </a>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-0">
            Responses within 24–48 hours. Dedicated consultation available for institutional and high-volume facility orders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}