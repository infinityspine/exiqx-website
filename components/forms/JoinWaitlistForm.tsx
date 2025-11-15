'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'
import { Mail, CheckCircle2, Loader2 } from 'lucide-react'

interface JoinWaitlistFormProps {
  source?: string
  className?: string
}

export default function JoinWaitlistForm({ source = 'unknown', className = '' }: JoinWaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist')
      }

      setIsSuccess(true)
      setEmail('')
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
        className={`text-center ${className}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20 border border-red-500/20"
        >
          <CheckCircle2 className="h-8 w-8 text-red-500" />
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
        <p className="text-white/70">
          Check your email for confirmation. We'll notify you when ExIQx equipment becomes available.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp}
      onSubmit={handleSubmit}
      className={className}
    >
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <div className="flex-1 relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isSubmitting}
            className="w-full pl-12 pr-4 py-4 bg-zinc-950/40 border border-zinc-800/60 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ transform: 'translateZ(0)' }}
          />
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase tracking-[0.1em] text-sm rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Joining...
            </span>
          ) : (
            'Join Waitlist'
          )}
        </motion.button>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-sm text-red-400 text-center"
        >
          {error}
        </motion.p>
      )}
    </motion.form>
  )
}

