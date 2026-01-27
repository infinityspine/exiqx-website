import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warranty | EXIQX™ Performance',
  description: 'EXIQX™ Performance product warranty information.',
}

export default function WarrantyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

