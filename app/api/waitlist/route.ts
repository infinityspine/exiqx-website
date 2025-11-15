import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase'
import { resend } from '@/lib/resend'

const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL
const FROM_EMAIL = process.env.FROM_EMAIL

if (!ADMIN_EMAIL || !FROM_EMAIL) {
  throw new Error('Missing email environment variables (ADMIN_NOTIFICATION_EMAIL, FROM_EMAIL)')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source } = body

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const supabase = createClient()
    const { error: insertError } = await supabase
      .from('waitlist')
      .insert({
        email: email.toLowerCase().trim(),
        source: source || 'unknown',
      })

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      )
    }

    // Send admin notification email
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: 'New Waitlist Signup — ExIQx',
        html: `
          <div style="font-family: system-ui, sans-serif; color: #000;">
            <h2 style="color: #dc2626;">New Waitlist Signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source || 'unknown'}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Admin email error:', emailError)
      // Don't fail the request if email fails
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "You're on the ExIQx Waitlist",
        html: `
          <div style="font-family: system-ui, sans-serif; color: #000; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #dc2626; font-size: 24px; margin-bottom: 20px;">Thank You for Joining!</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              You've been added to the ExIQx Performance waitlist. We'll notify you as soon as our elite biomechanical equipment becomes available.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-top: 20px;">
              Stay tuned for updates on our rack-mounted footplate, GHD retrofit, and freestanding systems.
            </p>
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              — The ExIQx Performance Team
            </p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('User confirmation email error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

