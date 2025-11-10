import type { Metadata } from 'next'
import FreestandingContent from './FreestandingContent'

export const metadata: Metadata = {
  title: 'Freestanding Footplate | ExIQx Performance',
  description: 'Versatile freestanding footplate solution for elite posterior-chain training. No rack required.',
}

export default function FreestandingPage() {
  return <FreestandingContent />
}