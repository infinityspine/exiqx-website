'use client'

import { motion } from 'framer-motion'

export default function FAQPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-8 py-28 md:py-36 text-left md:pl-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-6 text-white">
            FAQ
          </h1>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            Frequently asked questions about ExIQx Performance footplates, installation, usage, shipping, and returns.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            What makes ExIQx footplates different from standard equipment?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            ExIQx footplates are precision-engineered to replicate authentic ground-force vectors, ensuring 
            biomechanically accurate movement patterns. Unlike standard equipment that may compromise on 
            biomechanical integrity, our footplates are designed with scientific precision to deliver 
            performance outcomes that translate directly to competitive environments. Every component is 
            engineered to the highest standards of durability and precision.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            Which footplate configuration is right for my facility?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            Our rack-mounted footplate integrates seamlessly with existing power rack systems, ideal for 
            facilities maximizing space efficiency. The GHD retrofit option transforms standard glute-ham 
            developers into biomechanically precise training tools. The freestanding model offers complete 
            flexibility for facilities requiring standalone equipment. Each configuration maintains the same 
            biomechanical precision—your choice depends on your facility's specific layout and training 
            requirements.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            What is the installation process like?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            Installation varies by configuration. Rack-mounted units require standard power rack compatibility 
            and can typically be installed in under 30 minutes with basic tools. GHD retrofit installations 
            are designed for straightforward integration with most standard GHD frames. Freestanding models 
            require minimal assembly. All units include comprehensive installation instructions, and our 
            support team is available to assist with any technical questions during setup.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            What are your shipping timelines?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            Standard orders typically ship within 5-7 business days after order confirmation. Expedited 
            shipping options are available for urgent requirements. International shipping timelines vary 
            by destination and are calculated at checkout. All orders include tracking information, and 
            you'll receive updates at each stage of the shipping process. For bulk orders or custom 
            configurations, delivery timelines will be confirmed during the ordering process.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            What is your return policy?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            We stand behind the quality and performance of every ExIQx product. Unused items in original 
            packaging may be returned within 30 days of delivery for a full refund, excluding shipping 
            costs. Custom or personalized items are not eligible for return unless defective. All returns 
            must be authorized through our support team prior to shipping. For defective items or warranty 
            claims, please contact support@exiqxperformance.com for expedited resolution.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            How do I maintain my ExIQx footplate?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            ExIQx footplates are engineered for minimal maintenance requirements. Regular cleaning with 
            standard gym equipment cleaners is sufficient. The precision-engineered components are built 
            to withstand high-intensity training environments. Periodic inspection of mounting hardware 
            is recommended to ensure optimal performance. All moving parts are designed for long-term 
            durability and require no special lubrication or maintenance procedures beyond standard care.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
