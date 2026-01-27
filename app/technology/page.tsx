import type { Metadata } from 'next'
import TechnologyContent from './TechnologyContent'

export const metadata: Metadata = {
  title: 'Technology | EXIQX™ Performance',
  description: 'The biomechanical science behind EXIQX™ plantar surface loading technology for Nordic forefoot training.',
  openGraph: {
    title: 'Technology | EXIQX™ Performance',
    description: 'The biomechanical science behind EXIQX™ plantar surface loading technology for Nordic forefoot training.',
    images: ['/technology-hero.jpg'],
  },
}

export default function TechnologyPage() {
  return <TechnologyContent />
}
