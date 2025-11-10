import type { Metadata } from 'next'
import GHDRetrofitContent from './GHDRetrofitContent'

export const metadata: Metadata = {
  title: 'GHD Retrofit Kit | ExIQx Performance',
  description: 'Transform your existing GHD into an elite posterior-chain training station with our retrofit footplate system.',
}

export default function GHDRetrofitPage() {
  return <GHDRetrofitContent />
}