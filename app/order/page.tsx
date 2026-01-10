'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function OrderPage() {
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('deposit');

  const products = [
    {
      id: 'deposit',
      name: 'PRE-ORDER DEPOSIT',
      price: '$149',
      description: 'Secure your place in line with a fully refundable deposit',
    },
    {
      id: 'rack-mounted',
      name: 'RACK-MOUNTED SYSTEM',
      price: '$799',
      priceLabel: 'FOUNDING MEMBER PRICING',
      description: 'Complete system for power racks',
    },
  ];

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: selectedProduct,
          quantity: 1,
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        console.error('No checkout URL returned');
        setLoading(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-16 md:gap-18">
          <div className="flex flex-col gap-12 md:gap-14">
            <div className="flex flex-col gap-8 md:gap-10">
              <h1 className="text-5xl font-bold">FOUNDING MEMBER PROGRAM</h1>
              <p className="text-xl text-gray-400">
                Limited first-run units for athletes and coaches who demand{' '}
                precision engineering and proven performance.
              </p>
            </div>

            <div className="grid gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedProduct === product.id
                      ? 'border-white bg-white/5'
                      : 'border-gray-800 hover:border-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-400">{product.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{product.price}</div>
                      {'priceLabel' in product && product.priceLabel && (
                        <div className="mt-2 inline-flex items-center rounded-full bg-gray-900/50 px-3 py-1 text-xs uppercase tracking-wide text-gray-300 border border-gray-700">
                          {product.priceLabel}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-white text-black py-6 rounded-lg text-xl font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </button>

            <div className="flex flex-col gap-3">
              <p className="text-center text-gray-400 text-sm">
                Secure checkout powered by Stripe • SSL encrypted • PCI compliant
              </p>
              <p className="text-center text-gray-500 text-xs uppercase tracking-[0.2em]">
                PATENT-PENDING • PRECISION-ENGINEERED • MADE IN ARIZONA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
