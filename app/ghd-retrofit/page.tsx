import type { Metadata } from 'next'
import GHDRetrofitContent from './GHDRetrofitContent'

export const metadata: Metadata = {
  title: 'EXIQX™ Nordic Forefoot Trainer - GHD Retrofit | EXIQX™ Performance',
  description: 'The EXIQX™ Nordic Forefoot Trainer GHD retrofit kit - upgrade your existing GHD with forefoot loading technology.',
}

export default function GHDRetrofitPage() {
  return <GHDRetrofitContent />
}