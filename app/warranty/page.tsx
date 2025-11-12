import type { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Warranty | ExIQx Performance',
  description: 'ExIQx Performance warranty coverage, quality assurance standards, and claims process for precision-engineered biomechanical equipment.',
}

export default function WarrantyPage() {
  return (
    <section className="bg-black text-white text-center py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 leading-relaxed">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold uppercase mb-8"
        >
          Warranty
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg opacity-90 space-y-4"
        >
          <p>
            Every ExIQx Performance product is backed by our comprehensive warranty coverage, reflecting our 
            commitment to precision engineering and uncompromising quality standards. Our warranty protects 
            against defects in materials and workmanship under normal use conditions, ensuring that your 
            investment in elite biomechanical equipment is fully protected. We engineer our products to 
            withstand the demands of high-intensity training environments, and our warranty reflects our 
            confidence in the durability and performance of every component we manufacture.
          </p>
          <p>
            Warranty claims are processed through our dedicated support team to ensure rapid resolution. 
            To initiate a warranty claim, contact support@exiqxperformance.com with your order information, 
            product serial number if applicable, and a detailed description of the issue. Our team will 
            review your claim promptly and guide you through the resolution process, which may include 
            replacement parts, repair service, or product replacement depending on the nature of the defect. 
            We understand that equipment downtime impacts training schedules, which is why we prioritize 
            expedited warranty claim processing for all customers.
          </p>
          <p>
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

