import type { Metadata } from 'next'
import TechnologyContent from './TechnologyContent'

export const metadata: Metadata = {
  title: 'Technology | ExIQx Performance',
  description: 'The science behind the ExIQx Footplate — biomechanics, precision, and performance re-engineered from the ground up.',
  openGraph: {
    title: 'Technology | ExIQx Performance',
    description: 'Biomechanics, precision, and performance — re-engineered from the ground up.',
    images: ['/technology-hero.jpg'],
  },
}

export default function TechnologyPage() {
  return <TechnologyContent />
}
