import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmation | EXIQX™ Performance',
  description: 'Your EXIQX™ order confirmation.',
}

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-5xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-xl text-gray-400 mb-8">
          Thank you for your order. Check your email for confirmation.
        </p>
        <a href="/" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-bold">
          Return to Home
        </a>
      </div>
    </div>
  );
}