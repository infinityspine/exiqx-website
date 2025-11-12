import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | ExIQx Performance',
  description: 'Get in touch with ExIQx Performance for product inquiries, technical support, and custom solutions for elite training facilities.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

