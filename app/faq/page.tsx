'use client'

import { motion } from 'framer-motion'

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6" style={{ paddingTop: 'clamp(8rem, 12vw, 10rem)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight mb-12 text-white">
            FAQ
          </h1>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            Frequently asked questions about ExIQx Performance footplates, installation, usage, shipping, and returns.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            WHAT MAKES EXIQX FOOTPLATES DIFFERENT FROM STANDARD EQUIPMENT?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            ExIQx routes force through the ball of the foot—not the posterior ankle of traditional Nordic curls. This plantar surface loading mechanism trains the ground-force pathway used in sprinting, jumping, and change of direction. Our patent-pending system is the first Nordic curl device engineered specifically for athletic force transmission, not gym isolation.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            IS THE RACK-MOUNTED SYSTEM COMPATIBLE WITH MY FACILITY?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            The ExIQx Rack-Mounted Plantarflexion System integrates with standard 3×3 power rack systems using a precision-fit pin interface—no tools required. Simply align the mounting bracket with your rack's uprights and insert the pin. This founding member edition is designed for training facilities, collegiate programs, rehabilitation centers, and individual elite athletes with existing rack infrastructure.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            WHAT IS THE INSTALLATION PROCESS LIKE?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            Installation is instant—no tools required. Align the mounting bracket with your rack's uprights, insert the hitch pin, and you're ready to train. The quick-release pin system also enables tool-free angle adjustments (10°-70°). All units include setup instructions, and our support team is available for any questions.
          </p>
          
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-6 text-white">
            WHAT ARE YOUR SHIPPING TIMELINES?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            Founding member orders will ship based on production schedule. You'll receive email updates at key milestones: order confirmation, manufacturing start, and shipment dispatch. Expedited shipping options available. For bulk orders, delivery timelines will be confirmed during the ordering process.
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
            HOW DO I MAINTAIN MY EXIQX SYSTEM?
          </h2>
          <div className="w-32 h-[4px] bg-[#e50914] mb-16"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed" style={{ marginBottom: '100px' }}>
            ExIQx is engineered for minimal maintenance. Regular cleaning with standard gym equipment cleaners is sufficient. The precision-engineered bearings and powder-coated finish are built to withstand high-intensity training environments. Periodic inspection of mounting hardware is recommended. All moving parts are designed for long-term durability and require no special lubrication or maintenance beyond standard care.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
