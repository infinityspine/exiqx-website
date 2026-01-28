export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    console.log("ENV CHECK:", {
      hasUrl: !!process.env.SUPABASE_URL,
      hasKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      keyPrefix: process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0,12),
      keyLen: process.env.SUPABASE_SERVICE_ROLE_KEY?.length,
    })

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase env vars at runtime')
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false },
    })

    const body = await req.json().catch(() => null)
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

    console.log('WAITLIST HIT:', email)

    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

    const source = 'website'

    // Authoritative write to Supabase (server-only, service role key)
    const { error: insertError } = await supabase
      .schema('public')
      .from('waitlist')
      .insert([{ email, source }])

    if (insertError) {
      console.error("SUPABASE INSERT ERROR (raw):", insertError)
      console.error("SUPABASE INSERT ERROR (fields):", {
        message: insertError.message,
        details: (insertError as any).details,
        hint: (insertError as any).hint,
        code: (insertError as any).code,
      })
      return NextResponse.json(
        {
          message: insertError.message,
          details: (insertError as any).details,
          hint: (insertError as any).hint,
          code: (insertError as any).code,
        },
        { status: 500 }
      )
    }

    // Send Resend email AFTER insert succeeds
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'EXIQX Performance <onboarding@resend.dev>',
        to: 'infinityspine@gmail.com',
        subject: 'New Waitlist Signup — EXIQX',
        html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
      })
    } catch (emailErr) {
      console.error('Resend email failed after successful Supabase insert', { email, source, error: emailErr })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist route error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
