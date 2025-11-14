// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import ExIQxAtmosphere from '@/components/layout/ExIQxAtmosphere'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'ExIQx Performance',
  description: 'Elite biomechanical athletic equipment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-black text-white antialiased">
        <ExIQxAtmosphere intensity="subtle" />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}