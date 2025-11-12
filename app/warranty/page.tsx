'use client'

import { motion } from 'framer-motion'

export default function WarrantyPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-8 py-28 md:py-36 text-left md:pl-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Warranty
          </h1>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-20">
            Every ExIQx Performance product is backed by our comprehensive warranty coverage, reflecting our 
            commitment to precision engineering and uncompromising quality standards. Our warranty protects 
            against defects in materials and workmanship under normal use conditions, ensuring that your 
            investment in elite biomechanical equipment is fully protected. We engineer our products to 
            withstand the demands of high-intensity training environments, and our warranty reflects our 
            confidence in the durability and performance of every component we manufacture.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-20">
            Warranty claims are processed through our dedicated support team to ensure rapid resolution. 
            To initiate a warranty claim, contact support@exiqxperformance.com with your order information, 
            product serial number if applicable, and a detailed description of the issue. Our team will 
            review your claim promptly and guide you through the resolution process, which may include 
            replacement parts, repair service, or product replacement depending on the nature of the defect. 
            We understand that equipment downtime impacts training schedules, which is why we prioritize 
            expedited warranty claim processing for all customers.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-0">
            Our quality assurance standards are built into every stage of the manufacturing process, from 
            material selection through final inspection. We source only premium-grade materials and subject 
            every product to rigorous testing before shipment. This commitment to quality means warranty 
            claims are rare, but when they do occur, we handle them with the same precision and attention 
            to detail that goes into every ExIQx product. Your satisfaction and the performance integrity 
            of your equipment are our highest priorities, and our warranty program is designed to support 
            both without compromise.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
