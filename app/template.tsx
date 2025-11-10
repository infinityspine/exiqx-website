'use client'

import PageTransition from '@/components/layout/PageTransition'

/**
 * Root Template Component
 *
 * This template wraps all page content with smooth page transitions.
 * Next.js automatically re-renders this component on route changes,
 * triggering the AnimatePresence animations in PageTransition.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/template
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}
