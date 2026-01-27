'use client'

import { motion } from 'framer-motion'

export default function ShippingAndReturnsPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-8 py-28 md:py-36 text-left md:pl-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Shipping & Returns
          </h1>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            EXIQX<sup className="text-xs">™</sup> Performance delivers equipment with precision and care. Standard orders process within 5-7 business days and ship via reliable carriers with full tracking. Expedited options available for urgent facility installations. International orders include transparent customs processing and duty calculation at checkout.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Returns
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            Unused items in original packaging may be returned within 30 days for full product refund. Return shipping costs are customer responsibility unless due to defect or error. All returns require pre-authorization via <a href="mailto:support@exiqxperformance.com" className="text-white underline decoration-[#e50914] decoration-2 underline-offset-4 hover:text-gray-300 transition-colors duration-300">support@exiqxperformance.com</a>. Custom configurations and modified items are non-returnable unless defective.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Support
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-0">
            For warranty claims, defects, or shipping issues, contact <a href="mailto:support@exiqxperformance.com" className="text-white underline decoration-[#e50914] decoration-2 underline-offset-4 hover:text-gray-300 transition-colors duration-300">support@exiqxperformance.com</a>. Response within 24-48 hours during business days.
          </p>
        </motion.div>
      </div>
    </section>
  )
}