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
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-20">
            ExIQx Performance is committed to delivering your equipment with precision and care. Standard 
            orders are processed within 5-7 business days and shipped via reliable carriers with full 
            tracking information provided. We understand that timing matters for facility installations 
            and training schedules, which is why we offer expedited shipping options for urgent requirements. 
            International orders are subject to destination-specific timelines and customs processing, 
            with all applicable duties and taxes calculated transparently during checkout.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-20">
            Our return policy reflects our confidence in the quality and performance of every ExIQx product. 
            Unused items in original, undamaged packaging may be returned within 30 days of delivery for 
            a full refund of the product price. Return shipping costs are the responsibility of the customer 
            unless the return is due to a defect or error on our part. All returns must be pre-authorized 
            by contacting our support team at support@exiqxperformance.com. Custom configurations, personalized 
            items, or products modified after delivery are not eligible for return unless defective.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-0">
            For warranty claims, defective items, or shipping-related issues, our customer service team 
            provides expedited support to ensure rapid resolution. We stand behind every product we ship 
            and are committed to ensuring your complete satisfaction. If you have questions about shipping 
            timelines, return procedures, or need assistance with a claim, please reach out to 
            support@exiqxperformance.com and our team will respond within 24-48 hours during business days.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
