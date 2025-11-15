export function getWaitlistConfirmationEmail(email: string) {
  return {
    subject: "You're on the Waitlist",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You're on the Waitlist</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #000000; color: #ffffff;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #000000;">
    <tr>
      <td align="center" style="padding: 60px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #000000;">
          <!-- Header -->
          <tr>
            <td style="padding: 0 0 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 800; color: #ffffff; letter-spacing: 0.1em; text-transform: uppercase; line-height: 1.2;">
                ExIQx Performance
              </h1>
            </td>
          </tr>
          
          <!-- Subheader -->
          <tr>
            <td style="padding: 0 0 50px; text-align: center;">
              <h2 style="margin: 0; font-size: 24px; font-weight: 600; color: #dc2626; letter-spacing: 0.05em; text-transform: uppercase;">
                You're on the Waitlist
              </h2>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0;">
              <p style="margin: 0 0 30px; font-size: 16px; line-height: 1.7; color: #e5e5e5; text-align: center;">
                Thank you for joining the ExIQx Performance waitlist.
              </p>
              
              <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #e5e5e5; text-align: center;">
                We'll notify you as soon as the Rack-Mounted Footplate pre-orders open.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 60px 0 0; text-align: center; border-top: 1px solid #262626;">
              <p style="margin: 0 0 10px; font-size: 12px; color: #737373; line-height: 1.6;">
                no-reply@exiqx.com
              </p>
              <p style="margin: 0; font-size: 12px; color: #525252; line-height: 1.6;">
                © 2025 ExIQx Performance
              </p>
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

