import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warranty | ExIQx Performance',
  description: 'ExIQx Performance warranty coverage, quality assurance standards, and claims process for precision-engineered biomechanical equipment.',
}

export default function WarrantyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

