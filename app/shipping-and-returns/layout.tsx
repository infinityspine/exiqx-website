import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping & Returns | ExIQx Performance',
  description: 'ExIQx Performance shipping policies, delivery timelines, and return procedures for elite biomechanical equipment.',
}

export default function ShippingAndReturnsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

