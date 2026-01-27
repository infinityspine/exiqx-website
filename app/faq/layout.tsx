import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | EXIQX™ Performance',
  description: 'Frequently asked questions about EXIQX™ Nordic Forefoot Trainer systems, installation, shipping, and warranty.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

