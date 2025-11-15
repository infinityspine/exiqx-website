export function getWaitlistAdminNotification(email: string, source: string) {
  return {
    subject: 'New Waitlist Signup — ExIQx',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Waitlist Signup</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb; color: #111827;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background-color: #dc2626; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.05em;">
                New Waitlist Signup
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px 40px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Email:</strong>
                    <p style="margin: 4px 0 0; font-size: 16px; color: #111827;">${email}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Source:</strong>
                    <p style="margin: 4px 0 0; font-size: 16px; color: #111827;">${source || 'unknown'}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #374151; font-size: 14px;">Time:</strong>
                    <p style="margin: 4px 0 0; font-size: 16px; color: #111827;">${new Date().toLocaleString()}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim(),
  }
}

export function getDemoRequestAdminNotification(
  fullName: string,
  email: string,
  organization: string | null,
  phone: string | null,
  message: string | null
) {
  return {
    subject: 'New Demo Request — ExIQx',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Demo Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb; color: #111827;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; background-color: #dc2626; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.05em;">
                New Demo Request
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px 40px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Name:</strong>
                    <p style="margin: 4px 0 0; font-size: 16px; color: #111827;">${fullName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Email:</strong>
                    <p style="margin: 4px 0 0; font-size: 16px; color: #111827;">${email}</p>
                  </td>
                </tr>
                ${organization ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Organization:</strong>
                    <p style="margin: 4px 0 0; font-size: 16px; color: #111827;">${organization}</p>
                  </td>
                </tr>
                ` : ''}
                ${phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Phone:</strong>
                    <p style="margin: 4px 0 0; font-size: 16px; color: #111827;">${phone}</p>
                  </td>
                </tr>
                ` : ''}
                ${message ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Message:</strong>
                    <p style="margin: 4px 0 0; font-size: 16px; color: #111827; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #374151; font-size: 14px;">Time:</strong>
                    <p style="margin: 4px 0 0; font-size: 16px; color: #111827;">${new Date().toLocaleString()}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim(),
  }
}

