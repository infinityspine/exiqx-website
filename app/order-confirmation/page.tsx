'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useMemo, useState } from 'react'

type OrderDetails = {
  orderNumber: string
  amountPaid: string
  customerEmail: string
}

function formatAmount(value: unknown): string {
  if (typeof value === 'string') return value
  if (typeof value === 'number' && Number.isFinite(value)) {
    const normalized = Number.isInteger(value) ? value / 100 : value
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(normalized)
  }
  return '—'
}

function normalizeOrderDetails(data: unknown): OrderDetails {
  const obj = (data ?? {}) as Record<string, unknown>
  const orderNumber =
    (typeof obj.orderNumber === 'string' && obj.orderNumber) ||
    (typeof obj.order_number === 'string' && obj.order_number) ||
    (typeof obj.orderId === 'string' && obj.orderId) ||
    (typeof obj.id === 'string' && obj.id) ||
    '—'

  const customerEmail =
    (typeof obj.customerEmail === 'string' && obj.customerEmail) ||
    (typeof obj.customer_email === 'string' && obj.customer_email) ||
    (typeof obj.email === 'string' && obj.email) ||
    '—'

  const amountPaid =
    typeof obj.amountPaid === 'string'
      ? obj.amountPaid
      : typeof obj.amount_paid === 'string'
        ? obj.amount_paid
        : formatAmount(obj.amountPaid ?? obj.amount_paid ?? obj.amount_total)

  return { orderNumber, amountPaid, customerEmail }
}

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const sessionId = useMemo(() => searchParams.get('session_id'), [searchParams])

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [details, setDetails] = useState<OrderDetails | null>(null)

  useEffect(() => {
    let cancelled = false

    async function run() {
      setIsLoading(true)
      setError(null)
      setDetails(null)

      if (!sessionId) {
        setIsLoading(false)
        setError('Missing session_id.')
        return
      }

      try {
        const res = await fetch(
          `/api/order-details?session_id=${encodeURIComponent(sessionId)}`,
          { method: 'GET' }
        )

        if (!res.ok) {
          throw new Error('Failed to load order details.')
        }

        const json: unknown = await res.json()
        const normalized = normalizeOrderDetails(json)

        if (!cancelled) {
          setDetails(normalized)
          setIsLoading(false)
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Something went wrong.')
          setIsLoading(false)
        }
      }
    }

    void run()

    return () => {
      cancelled = true
    }
  }, [sessionId])

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
        {isLoading ? (
          <div className="w-full">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Confirming your order…
            </h1>
            <p className="mt-3 text-white/70">
              Please wait while we fetch your order details.
            </p>
          </div>
        ) : error ? (
          <div className="w-full">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15 text-red-400">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M12 9v4" />
                <path
                  strokeLinecap="round"
                  d="M12 17h.01"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Couldn’t confirm order
            </h1>
            <p className="mt-3 text-white/70">{error}</p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <div className="w-full">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 6 9 17l-5-5"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Order Confirmed!
            </h1>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-left">
              <div className="grid gap-4">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-white/60">
                    Order Number
                  </div>
                  <div className="mt-1 text-lg font-semibold">
                    {details?.orderNumber ?? '—'}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-white/60">
                    Amount Paid
                  </div>
                  <div className="mt-1 text-lg font-semibold">
                    {details?.amountPaid ?? '—'}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-white/60">
                    Customer Email
                  </div>
                  <div className="mt-1 break-all text-lg font-semibold">
                    {details?.customerEmail ?? '—'}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Return to Home
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black text-white">
          <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Loading…
            </h1>
          </div>
        </main>
      }
    >
      <OrderConfirmationContent />
    </Suspense>
  )
}