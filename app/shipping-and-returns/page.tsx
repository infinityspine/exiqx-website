import type { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Shipping & Returns | ExIQx Performance',
  description: 'ExIQx Performance shipping policies, delivery timelines, and return procedures for elite biomechanical equipment.',
}

export default function ShippingAndReturnsPage() {
  return (
    <section className="bg-black text-white text-center py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 leading-relaxed">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold uppercase mb-8"
        >
          Shipping & Returns
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg opacity-90 space-y-4"
        >
          <p>
            ExIQx Performance is committed to delivering your equipment with precision and care. Standard 
            orders are processed within 5-7 business days and shipped via reliable carriers with full 
            tracking information provided. We understand that timing matters for facility installations 
            and training schedules, which is why we offer expedited shipping options for urgent requirements. 
            International orders are subject to destination-specific timelines and customs processing, 
            with all applicable duties and taxes calculated transparently during checkout.
          </p>
          <p>
            Our return policy reflects our confidence in the quality and performance of every ExIQx product. 
            Unused items in original, undamaged packaging may be returned within 30 days of delivery for 
            a full refund of the product price. Return shipping costs are the responsibility of the customer 
            unless the return is due to a defect or error on our part. All returns must be pre-authorized 
            by contacting our support team at support@exiqxperformance.com. Custom configurations, personalized 
            items, or products modified after delivery are not eligible for return unless defective.
          </p>
          <p>
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

