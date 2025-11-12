'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <section className="bg-black text-white text-center py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 leading-relaxed">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold uppercase mb-8"
        >
          Contact
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg opacity-90 space-y-4"
        >
          <p>
            We're here to support your performance goals. Whether you're evaluating ExIQx equipment for 
            your training facility, seeking technical specifications, or exploring custom solutions for 
            specialized applications, our team is ready to assist. We understand that selecting the right 
            biomechanical equipment requires careful consideration, and we're committed to providing the 
            information and guidance you need to make informed decisions.
          </p>
          <p>
            For product inquiries, technical support, warranty claims, or general questions, please reach 
            out to us at <a href="mailto:support@exiqxperformance.com" className="text-red-600 hover:text-red-500 transition-colors underline">support@exiqxperformance.com</a>. 
            Our support team responds to all inquiries within 24-48 hours during business days. For facility 
            installations, bulk orders, or custom engineering requirements, we offer dedicated consultation 
            to ensure your specific needs are met with precision-engineered solutions.
          </p>
          <p>
            Thank you for considering ExIQx Performance. We appreciate your commitment to excellence and 
            look forward to supporting your pursuit of biomechanically authentic, performance-driven training. 
            Your success is our mission, and we're honored to be part of your performance journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

