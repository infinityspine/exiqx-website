import { NextRequest, NextResponse } from 'next/server'

import { Resend } from 'resend'



const resend = new Resend(process.env.RESEND_API_KEY)



export async function POST(request: NextRequest) {

  try {

    const body = await request.json()

    const { name, email, facilityName, facilityType, additionalInfo } = body



    if (!name || typeof name !== 'string' || !name.trim()) {

      return NextResponse.json({ error: 'Name is required' }, { status: 400 })

    }



    if (!email || typeof email !== 'string') {

      return NextResponse.json({ error: 'Email is required' }, { status: 400 })

    }



    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {

      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })

    }



    const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL

    const FROM_EMAIL = process.env.FROM_EMAIL



    if (!ADMIN_EMAIL || !FROM_EMAIL) {

      console.error('Missing environment variables for email sending')

      return NextResponse.json(

        { error: 'Server configuration error' },

        { status: 500 }

      )

    }



    // Admin notification email

    const adminHtml = `

      <h2>New Early Access Request</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      ${facilityName ? `<p><strong>Facility Name:</strong> ${facilityName}</p>` : ''}

      ${facilityType ? `<p><strong>Facility Type:</strong> ${facilityType}</p>` : ''}

      ${additionalInfo ? `<p><strong>Additional Information:</strong> ${additionalInfo}</p>` : ''}

      <p><strong>Source:</strong> website</p>

      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>

    `



    try {

      await resend.emails.send({

        from: `ExIQx Performance <${FROM_EMAIL}>`,

        to: ADMIN_EMAIL,

        subject: 'New Early Access Request — ExIQx',

        html: adminHtml,

      })

    } catch (err) {

      console.error('Admin email error:', err)

    }



    return NextResponse.json({ success: true })

  } catch (err) {

    console.error('Early Access API error:', err)

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })

  }

}
