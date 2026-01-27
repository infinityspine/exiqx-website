import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping & Returns | EXIQX™ Performance',
  description: 'EXIQX™ Performance shipping and returns policy.',
}

export default function ShippingAndReturnsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

