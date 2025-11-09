import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Metadata
export const metadata: Metadata = {
  title: "ExIQx Performance",
  description:
    "Biomechanical athletic equipment engineered for elite performance and injury prevention.",
}

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Global Nav */}
        <NavBar />

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  )
}