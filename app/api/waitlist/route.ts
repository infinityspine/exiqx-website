export const runtime = 'nodejs'

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  // Fail fast on misconfiguration so it’s obvious in Vercel Function Logs.
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
})

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    const email = typeof body?.email === 'string' ? body.email.trim() : ''
    const source = typeof body?.source === 'string' ? body.source.trim() : 'website'

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'content-type': 'application/json' },
      })
    }

    // Minimal email format check (server-side).
    if (!email.includes('@') || email.length > 320) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'content-type': 'application/json' },
      })
    }

    // 1) Authoritative write to Supabase (service role key, server-only)
    const { data: inserted, error: insertError } = await supabaseAdmin
      .from('waitlist')
      .insert({ email, source })
      .select('id')
      .single()

    if (insertError) {
      console.error('Supabase waitlist insert failed', {
        email,
        source,
        error: insertError,
      })
      return new Response(JSON.stringify({ error: 'Failed to join waitlist' }), {
        status: 500,
        headers: { 'content-type': 'application/json' },
      })
    }

    // 2) Only after successful insert → send admin notification email
    let emailResult
    try {
      emailResult = await resend.emails.send({
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
      console.error('Resend email failed after successful Supabase insert', {
        email,
        source,
        waitlistId: inserted?.id,
        error: emailErr,
      })
      return new Response(JSON.stringify({ error: 'Joined waitlist, but notification failed' }), {
        status: 502,
        headers: { 'content-type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true, id: inserted?.id, emailResult }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
  } catch (err) {
    console.error('Waitlist route error', err)
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }
}
