import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact ExIQx Performance | Technical Support & Inquiries',
  description: 'Contact ExIQx Performance for product specifications, custom solutions, and technical support.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

