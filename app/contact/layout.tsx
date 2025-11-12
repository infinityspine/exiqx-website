import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact ExIQx Performance | Technical Support',
  description: 'Contact ExIQx Performance for technical specifications, custom solutions, and installation support.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

