'use client'

import { motion } from 'framer-motion'

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6" style={{ paddingTop: 'clamp(8rem, 12vw, 10rem)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight mb-12 text-white">
            Warranty
          </h1>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            Every ExIQx product is backed by comprehensive warranty coverage against defects in materials and workmanship under normal use. Our warranty reflects confidence in precision engineering and uncompromising quality standards built for high-intensity training environments.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Warranty Claims
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            To initiate a warranty claim, contact <a href="mailto:support@exiqxperformance.com" className="text-white underline decoration-[#e50914] decoration-2 underline-offset-4 hover:text-gray-300 transition-colors duration-300">support@exiqxperformance.com</a> with order information, product serial number, and detailed description of the issue. Resolution includes replacement parts, repair service, or product replacement depending on defect nature. Expedited processing prioritized to minimize training downtime.
          </p>

          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Quality Assurance
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-0">
            Quality standards are built into every manufacturing stage, from material selection through final inspection. Premium-grade materials and rigorous testing before shipment ensure warranty claims remain rare. When claims occur, we handle them with the same precision that goes into every ExIQx product.
          </p>
        </motion.div>
      </div>
    </main>
  )
}