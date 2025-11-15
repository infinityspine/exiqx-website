'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import { CheckCircle2, Loader2, User, Mail, Building2, Phone, MessageSquare } from 'lucide-react'

export default function RequestDemoForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit demo request')
      }

      setIsSuccess(true)
      setFormData({
        full_name: '',
        email: '',
        organization: '',
        phone: '',
        message: '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20 border border-red-500/20"
        >
          <CheckCircle2 className="h-10 w-10 text-red-500" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-white mb-4">Demo Request Received</h3>
        <p className="text-white/70 text-lg leading-relaxed">
          Thank you for your interest in ExIQx Performance. We've received your demo request and will contact you shortly to schedule a demonstration.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerChildren}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Full Name */}
      <motion.div variants={fadeUp}>
        <label htmlFor="full_name" className="block text-sm font-medium text-white/80 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-4 bg-zinc-950/40 border border-zinc-800/60 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="John Doe"
            style={{ transform: 'translateZ(0)' }}
          />
        </div>
      </motion.div>

      {/* Email */}
      <motion.div variants={fadeUp}>
        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-4 bg-zinc-950/40 border border-zinc-800/60 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="john@example.com"
            style={{ transform: 'translateZ(0)' }}
          />
        </div>
      </motion.div>

      {/* Organization */}
      <motion.div variants={fadeUp}>
        <label htmlFor="organization" className="block text-sm font-medium text-white/80 mb-2">
          Organization
        </label>
        <div className="relative">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-4 bg-zinc-950/40 border border-zinc-800/60 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Your organization or facility"
            style={{ transform: 'translateZ(0)' }}
          />
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div variants={fadeUp}>
        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
          Phone
        </label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-4 bg-zinc-950/40 border border-zinc-800/60 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="(555) 123-4567"
            style={{ transform: 'translateZ(0)' }}
          />
        </div>
      </motion.div>

      {/* Message */}
      <motion.div variants={fadeUp}>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
          Message
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-white/40" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows={5}
            className="w-full pl-12 pr-4 py-4 bg-zinc-950/40 border border-zinc-800/60 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
            placeholder="Tell us about your training facility and how ExIQx can help..."
            style={{ transform: 'translateZ(0)' }}
          />
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={fadeUp} className="pt-4">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase tracking-[0.1em] text-sm rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </span>
          ) : (
            'Request Demo'
          )}
        </motion.button>
      </motion.div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-400 text-center"
        >
          {error}
        </motion.p>
      )}
    </motion.form>
  )
}

