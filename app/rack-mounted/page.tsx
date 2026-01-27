// app/rack-mounted/page.tsx
import type { Metadata } from 'next'
import RackMountedContent from './RackMountedContent'

export const metadata: Metadata = {
  title: 'EXIQX™ Nordic Forefoot Trainer - Rack-Mounted | EXIQX™ Performance',
  description: 'The EXIQX™ Nordic Forefoot Trainer eliminates posterior ankle restraints—Nordic training through the forefoot.',
  openGraph: {
    title: 'EXIQX™ Nordic Forefoot Trainer - Rack-Mounted',
    description: 'EXIQX™ Nordic Forefoot Trainer - patent-pending plantar surface loading for elite posterior chain training.',
    images: ['/rack-mounted-hero.jpg'],
  },
}

export default function RackMountedPage() {
  return <RackMountedContent />
}
