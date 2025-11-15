import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function GET() {
  const FROM_EMAIL = process.env.FROM_EMAIL
  const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL

  if (!FROM_EMAIL || !ADMIN_EMAIL) {
    return NextResponse.json(
      { error: 'Missing email environment variables' },
      { status: 500 }
    )
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL as string,
      to: ADMIN_EMAIL as string,
      subject: 'EXIQx Test Email',
      html: '<p>This is a test email from the EXIQx system. Everything is working!</p>',
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Test email error:', error)
    return NextResponse.json(
      { error: 'Failed to send test email' },
      { status: 500 }
    )
  }
}

