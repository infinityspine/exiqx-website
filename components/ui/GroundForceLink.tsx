'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { easeOutExpo } from '@/lib/motion'
import { useReducedMotion } from 'framer-motion'

interface GroundForceLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function GroundForceLink({ href, children, className = '' }: GroundForceLinkProps) {
  const shouldReduceMotion = !!useReducedMotion()

  return (
    <Link
      href={href}
      className={`relative inline-block text-sm md:text-base uppercase tracking-[0.18em] text-white hover:text-red-400 transition-colors duration-300 ${className}`}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-500 origin-left will-change-transform"
        style={{ transform: 'translateZ(0)' }}
        initial={{ scaleX: 0 }}
        whileHover={shouldReduceMotion ? {} : { scaleX: 1 }}
        transition={{
          duration: 0.4,
          ease: easeOutExpo as [number, number, number, number],
        }}
      />
    </Link>
  )
}

