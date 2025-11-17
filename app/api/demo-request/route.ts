import { NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/lib/supabase'

import { resend } from '@/lib/resend'

import { getDemoConfirmationEmail } from '@/emails/demo-confirmation'

import { getDemoRequestAdminNotification } from '@/emails/admin-notification'



export async function POST(request: NextRequest) {

  const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL

  const FROM_EMAIL = process.env.FROM_EMAIL



  if (!ADMIN_EMAIL || !FROM_EMAIL) {

    console.error('Missing environment variables (ADMIN_NOTIFICATION_EMAIL, FROM_EMAIL)')

    return NextResponse.json(

      { error: 'Server configuration error' },

      { status: 500 }

    )

  }



  try {

    const body = await request.json()

    const { full_name, email, organization, phone, message } = body



    if (!full_name || typeof full_name !== 'string' || !full_name.trim()) {

      return NextResponse.json({ error: 'Full name is required' }, { status: 400 })

    }



    if (!email || typeof email !== 'string') {

      return NextResponse.json({ error: 'Email is required' }, { status: 400 })

    }



    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {

      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })

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

      return NextResponse.json({ error: 'Failed to submit demo request' }, { status: 500 })

    }



    // Admin email

    try {

      const adminEmail = getDemoRequestAdminNotification(

        full_name,

        email,

        organization || null,

        phone || null,

        message || null

      )

      await resend.emails.send({

        from: FROM_EMAIL,

        to: ADMIN_EMAIL,

        subject: adminEmail.subject,

        html: adminEmail.html,

      })

    } catch (err) {

      console.error('Admin email error:', err)

    }



    // User confirmation email

    try {

      const userEmail = getDemoConfirmationEmail(full_name)

      await resend.emails.send({

        from: FROM_EMAIL,

        to: email,

        subject: userEmail.subject,

        html: userEmail.html,

      })

    } catch (err) {

      console.error('User confirmation email error:', err)

    }



    return NextResponse.json({ success: true })

  } catch (err) {

    console.error('Demo request API error:', err)

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })

  }

}
