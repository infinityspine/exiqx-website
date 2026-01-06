import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { productId, quantity = 1 } = await req.json();

    const products = {
      'rack-mounted': {
        name: 'ExIQx Rack-Mounted System',
        price: 79900,
        description: 'Patent-pending plantarflexion training equipment - Rack-mounted embodiment',
      },
      'ghd-retrofit': {
        name: 'ExIQx GHD Retrofit System',
        price: 129900,
        description: 'Patent-pending plantarflexion training equipment - GHD retrofit embodiment',
      },
      'freestanding': {
        name: 'ExIQx Freestanding System',
        price: 119900,
        description: 'Patent-pending plantarflexion training equipment - Freestanding embodiment',
      },
      'deposit': {
        name: 'Pre-Order Deposit',
        price: 14900,
        description: 'Refundable deposit to reserve your ExIQx system',
      },
    };

    const product = products[productId as keyof typeof products];
    
    if (!product) {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order`,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        productId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
