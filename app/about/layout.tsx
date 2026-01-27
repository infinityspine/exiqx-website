import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | EXIQX™ Performance',
  description:
    'EXIQX™ designs precision-engineered equipment at the intersection of biomechanics and human performance. Built for athletes who demand mechanical truth.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

