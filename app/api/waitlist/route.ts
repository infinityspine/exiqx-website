import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase'
import { resend } from '@/lib/resend'
import { getWaitlistConfirmationEmail } from '@/emails/waitlist-confirmation'
import { getWaitlistAdminNotification } from '@/emails/admin-notification'

export async function POST(request: NextRequest) {
  const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL
  const FROM_EMAIL = process.env.FROM_EMAIL

  if (!ADMIN_EMAIL || !FROM_EMAIL) {
    console.error('Missing email environment variables (ADMIN_NOTIFICATION_EMAIL, FROM_EMAIL)')
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    )
  }
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
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{
        email: email.toLowerCase().trim(),
        source: source || 'website',
      }])

    // Handle duplicate emails gracefully
    if (error && error.code === '23505') {
      console.log('Email already exists — treating as success')
      // Still send success response (do not show error to user)
      return NextResponse.json({ success: true, duplicate: true })
    }

    // Handle other Supabase errors
    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { success: false, message: 'Database error' },
        { status: 500 }
      )
    }

    // Send admin notification email
    try {
      const adminEmail = getWaitlistAdminNotification(email, source || 'website')
      await resend.emails.send({
        from: FROM_EMAIL as string,
        to: ADMIN_EMAIL as string,
        subject: adminEmail.subject,
        html: adminEmail.html,
      })
    } catch (emailError) {
      console.error('Admin email error:', emailError)
      // Don't fail the request if email fails
    }

    // Send confirmation email to user
    try {
      const userEmail = getWaitlistConfirmationEmail(email)
      await resend.emails.send({
        from: FROM_EMAIL as string,
        to: email,
        subject: userEmail.subject,
        html: userEmail.html,
      })
    } catch (emailError) {
      console.error('User confirmation email error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("WAITLIST API ERROR:", error);

    return NextResponse.json(
      { 
        error: error?.message || error?.toString() || "Unknown server error",
        stack: error?.stack || null 
      },
      { status: 500 }
    );
  }
}

