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
      name: 'Pre-Order Deposit',
      price: '$149',
      description: 'Reserve your ExIQx system with a refundable deposit',
    },
    {
      id: 'rack-mounted',
      name: 'Rack-Mounted System',
      price: '$1,399',
      description: 'Complete system for power racks',
    },
    {
      id: 'ghd-retrofit',
      name: 'GHD Retrofit System',
      price: '$1,299',
      description: 'Upgrade your existing GHD',
    },
    {
      id: 'freestanding',
      name: 'Freestanding System',
      price: '$1,199',
      description: 'Standalone training station',
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
        <h1 className="text-5xl font-bold mb-4">Place Your Order</h1>
        <p className="text-xl text-gray-400 mb-12">
          Select your ExIQx system and complete checkout
        </p>

        <div className="grid gap-6 mb-12">
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
                <div className="text-3xl font-bold">{product.price}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-white text-black py-6 rounded-lg text-xl font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Proceed to Checkout'}
        </button>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Secure checkout powered by Stripe • SSL encrypted • PCI compliant
        </p>
      </div>
    </div>
  );
}
