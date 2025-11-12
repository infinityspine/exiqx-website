import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | ExIQx Performance',
  description: 'Frequently asked questions about ExIQx Performance footplates, installation, usage, shipping, and returns.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

