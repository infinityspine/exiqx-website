// app/rack-mounted/page.tsx
import type { Metadata } from 'next'
import RackMountedContent from './RackMountedContent'

export const metadata: Metadata = {
  title: 'Rack-Mounted Footplates | ExIQx Performance',
  description: 'Precision-mounted to your squat rack uprights for elite posterior chain loading through the plantar surface.',
  openGraph: {
    title: 'Rack-Mounted Footplates | ExIQx Performance',
    description: 'Elite biomechanical equipment for peak athletic performance.',
    images: ['/rack-mounted-hero.jpg'],
  },
}

export default function RackMountedPage() {
  return <RackMountedContent />
}
