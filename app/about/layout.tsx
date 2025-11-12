import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About ExIQx Performance | Biomechanical Training Systems',
  description: 'ExIQx designs precision-engineered training equipment at the intersection of biomechanics and human performance. Built for athletes who demand authenticity.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

