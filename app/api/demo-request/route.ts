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
    const { full_name, email, organization, phone, message } = body

    // Validate required fields
    if (!full_name || typeof full_name !== 'string' || full_name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Full name is required' },
        { status: 400 }
      )
    }

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
      .from('demo_requests')
      .insert({
        full_name: full_name.trim(),
        email: email.toLowerCase().trim(),
        organization: organization?.trim() || null,
        phone: phone?.trim() || null,
        message: message?.trim() || null,
      })

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to submit demo request' },
        { status: 500 }
      )
    }

    // Send admin notification email
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: 'New Demo Request — ExIQx',
        html: `
          <div style="font-family: system-ui, sans-serif; color: #000;">
            <h2 style="color: #dc2626;">New Demo Request</h2>
            <p><strong>Name:</strong> ${full_name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
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
        subject: 'ExIQx Demo Request Received',
        html: `
          <div style="font-family: system-ui, sans-serif; color: #000; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #dc2626; font-size: 24px; margin-bottom: 20px;">Demo Request Received</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Hi ${full_name},
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-top: 20px;">
              Thank you for your interest in ExIQx Performance equipment. We've received your demo request and will contact you shortly to schedule a demonstration.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-top: 20px;">
              Our team will reach out to discuss how our elite biomechanical systems can enhance your training facility.
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
    console.error('Demo request API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

