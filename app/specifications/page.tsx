import type { Metadata } from 'next'
import SpecificationsContent from './SpecificationsContent'

export const metadata: Metadata = {
  title: 'Full Specifications | ExIQx Performance',
  description: 'Complete technical specifications for the ExIQx Footplate — engineered for elite performance.',
  openGraph: {
    title: 'Full Specifications | ExIQx Performance',
    description: 'Engineered for elite performance.',
    images: ['/specifications-hero.jpg'],
  },
}

export default function SpecificationsPage() {
  return <SpecificationsContent />
}
