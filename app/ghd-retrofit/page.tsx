"use client"

import React from "react"

export default function GHDRetrofitPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <section className="text-center px-6 py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          GHD Retrofit Footplate Apparatus
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Converts traditional GHD units into advanced eccentric hamstring and
          glute-loading platforms for performance training and rehabilitation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/rack-mounted"
            className="border border-red-600 text-red-500 px-8 py-3 rounded-full text-sm uppercase tracking-[0.15em] hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Rack-Mounted Version
          </a>
          <a
            href="/freestanding"
            className="bg-red-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-[0.15em] hover:bg-red-700 transition-all duration-300"
          >
            Freestanding Version
          </a>
        </div>
      </section>
    </main>
  )
}