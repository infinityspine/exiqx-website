import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | ExIQx Performance',
  description: 'Discover ExIQx Performance — precision-engineered biomechanical equipment designed for elite athletes and performance-driven training.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

