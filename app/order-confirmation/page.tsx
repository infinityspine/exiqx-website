'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/order-details?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setOrderDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching order details:', error);
          setLoading(false);
        });
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading order details...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-400">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
        </div>

        {orderDetails && (
          <div className="bg-white/5 border border-gray-800 rounded-lg p-8 text-left">
            <h2 className="text-2xl font-bold mb-6">Order Details</h2>
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-1">Order Number</div>
                <div className="font-mono">{orderDetails.id}</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Amount Paid</div>
                <div className="text-2xl font-bold">
                  ${(orderDetails.amount_total / 100).toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Email</div>
                <div>{orderDetails.customer_details?.email}</div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12">
          
            href="/"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmation() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}
