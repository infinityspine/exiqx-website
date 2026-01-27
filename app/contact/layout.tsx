import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | EXIQX™ Performance',
  description: 'Contact EXIQX™ Performance for technical specifications, facility integrations, and custom Nordic forefoot training solutions.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

