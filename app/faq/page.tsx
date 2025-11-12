'use client'

import { motion } from 'framer-motion'

export default function FAQPage() {
  return (
    <section className="bg-black text-white text-center py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 leading-relaxed">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold uppercase mb-8"
        >
          FAQ
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg opacity-90 space-y-6"
        >
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-bold uppercase mb-2">What makes ExIQx footplates different from standard equipment?</h2>
            <p>
              ExIQx footplates are precision-engineered to replicate authentic ground-force vectors, ensuring 
              biomechanically accurate movement patterns. Unlike standard equipment that may compromise on 
              biomechanical integrity, our footplates are designed with scientific precision to deliver 
              performance outcomes that translate directly to competitive environments. Every component is 
              engineered to the highest standards of durability and precision.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-bold uppercase mb-2">Which footplate configuration is right for my facility?</h2>
            <p>
              Our rack-mounted footplate integrates seamlessly with existing power rack systems, ideal for 
              facilities maximizing space efficiency. The GHD retrofit option transforms standard glute-ham 
              developers into biomechanically precise training tools. The freestanding model offers complete 
              flexibility for facilities requiring standalone equipment. Each configuration maintains the same 
              biomechanical precision—your choice depends on your facility's specific layout and training 
              requirements.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-bold uppercase mb-2">What is the installation process like?</h2>
            <p>
              Installation varies by configuration. Rack-mounted units require standard power rack compatibility 
              and can typically be installed in under 30 minutes with basic tools. GHD retrofit installations 
              are designed for straightforward integration with most standard GHD frames. Freestanding models 
              require minimal assembly. All units include comprehensive installation instructions, and our 
              support team is available to assist with any technical questions during setup.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-bold uppercase mb-2">What are your shipping timelines?</h2>
            <p>
              Standard orders typically ship within 5-7 business days after order confirmation. Expedited 
              shipping options are available for urgent requirements. International shipping timelines vary 
              by destination and are calculated at checkout. All orders include tracking information, and 
              you'll receive updates at each stage of the shipping process. For bulk orders or custom 
              configurations, delivery timelines will be confirmed during the ordering process.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-bold uppercase mb-2">What is your return policy?</h2>
            <p>
              We stand behind the quality and performance of every ExIQx product. Unused items in original 
              packaging may be returned within 30 days of delivery for a full refund, excluding shipping 
              costs. Custom or personalized items are not eligible for return unless defective. All returns 
              must be authorized through our support team prior to shipping. For defective items or warranty 
              claims, please contact support@exiqxperformance.com for expedited resolution.
            </p>
          </div>
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-bold uppercase mb-2">How do I maintain my ExIQx footplate?</h2>
            <p>
              ExIQx footplates are engineered for minimal maintenance requirements. Regular cleaning with 
              standard gym equipment cleaners is sufficient. The precision-engineered components are built 
              to withstand high-intensity training environments. Periodic inspection of mounting hardware 
              is recommended to ensure optimal performance. All moving parts are designed for long-term 
              durability and require no special lubrication or maintenance procedures beyond standard care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

