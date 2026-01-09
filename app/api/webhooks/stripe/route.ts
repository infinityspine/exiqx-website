import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    console.error('❌ No Stripe signature found in request headers');
    return NextResponse.json(
      { error: 'No signature' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (err: any) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        console.log('✅ Checkout session completed:', {
          sessionId: session.id,
          customerEmail: session.customer_details?.email,
          customerName: session.customer_details?.name,
          phone: session.customer_details?.phone,
          amountTotal: session.amount_total,
          currency: session.currency,
          productId: session.metadata?.productId,
          paymentStatus: session.payment_status,
          shippingAddress: (session as any).shipping_details?.address,
          billingAddress: session.customer_details?.address,
        });

        // TODO: Implement your business logic here:
        // 1. Store order in database
        // 2. Add customer to waitlist
        // 3. Send confirmation email
        // 4. Update inventory/tracking
        // 5. Trigger fulfillment workflow
        
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('⏰ Checkout session expired:', {
          sessionId: session.id,
          customerEmail: session.customer_details?.email,
        });
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('💳 Payment intent succeeded:', {
          paymentIntentId: paymentIntent.id,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
        });
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error('❌ Payment failed:', {
          paymentIntentId: paymentIntent.id,
          lastPaymentError: paymentIntent.last_payment_error?.message,
        });
        break;
      }

      case 'charge.succeeded': {
        const charge = event.data.object as Stripe.Charge;
        console.log('💰 Charge succeeded:', {
          chargeId: charge.id,
          amount: charge.amount,
          currency: charge.currency,
        });
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        console.log('💸 Charge refunded:', {
          chargeId: charge.id,
          amountRefunded: charge.amount_refunded,
        });
        break;
      }

      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.error('❌ Error processing webhook:', err);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
