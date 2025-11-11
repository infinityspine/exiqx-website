'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

// ============================================================================
// Animation Variants
// ============================================================================

/**
 * Apple-style page transition variants
 * Uses smooth cubic-bezier easing for elegant fade and slide animations
 */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Apple's signature cubic-bezier easing
      when: 'beforeChildren' as const,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
    },
  },
}

// ============================================================================
// Component
// ============================================================================

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

/**
 * PageTransition Component
 *
 * Wraps page content with smooth AnimatePresence transitions.
 * Automatically detects route changes via usePathname() and animates
 * between pages with Apple-style fade/slide effects.
 *
 * @example
 * ```tsx
 * <PageTransition>
 *   <YourPageContent />
 * </PageTransition>
 * ```
 */
export default function PageTransition({
  children,
  className = ''
}: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
