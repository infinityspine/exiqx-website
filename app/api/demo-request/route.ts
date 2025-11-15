import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase'
import { resend } from '@/lib/resend'
import { getDemoConfirmationEmail } from '@/emails/demo-confirmation'
import { getDemoRequestAdminNotification } from '@/emails/admin-notification'

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
      const adminEmail = getDemoRequestAdminNotification(
        full_name,
        email,
        organization || null,
        phone || null,
        message || null
      )
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
      const userEmail = getDemoConfirmationEmail(full_name)
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
  } catch (error) {
    console.error('Demo request API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

