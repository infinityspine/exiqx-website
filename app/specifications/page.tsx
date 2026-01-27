import type { Metadata } from 'next'
import SpecificationsContent from './SpecificationsContent'

export const metadata: Metadata = {
  title: 'Technical Specifications | EXIQX™ Performance',
  description: 'Complete technical specifications for EXIQX™ Nordic Forefoot Trainer systems - dimensions, materials, and installation requirements.',
  openGraph: {
    title: 'Technical Specifications | EXIQX™ Performance',
    description: 'Complete technical specifications for EXIQX™ Nordic Forefoot Trainer systems - dimensions, materials, and installation requirements.',
    images: ['/specifications-hero.jpg'],
  },
}

export default function SpecificationsPage() {
  return <SpecificationsContent />
}
