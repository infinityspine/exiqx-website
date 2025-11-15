export function getDemoConfirmationEmail(fullName: string) {
  return {
    subject: 'ExIQx Demo Request Received',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo Request Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #111111; border: 1px solid #262626; border-radius: 8px;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center; border-bottom: 1px solid #262626;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #dc2626; letter-spacing: 0.05em; text-transform: uppercase;">
                Demo Request Received
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #e5e5e5;">
                Hi ${fullName},
              </p>
              
              <p style="margin: 20px 0; font-size: 16px; line-height: 1.6; color: #e5e5e5;">
                Thank you for your interest in ExIQx Performance equipment. We've received your demo request and will contact you shortly to schedule a demonstration.
              </p>
              
              <p style="margin: 20px 0; font-size: 16px; line-height: 1.6; color: #e5e5e5;">
                Our team will reach out to discuss how our elite biomechanical systems can enhance your training facility.
              </p>
              
              <div style="margin: 30px 0; padding: 20px; background-color: #1a1a1a; border-left: 3px solid #dc2626; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #a3a3a3;">
                  <strong style="color: #dc2626;">What to Expect:</strong><br>
                  We'll contact you within 24-48 hours to schedule a convenient time for your demonstration and answer any questions you may have.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; border-top: 1px solid #262626; background-color: #0a0a0a;">
              <p style="margin: 0; font-size: 14px; color: #737373; line-height: 1.6;">
                — The ExIQx Performance Team<br>
                <span style="font-size: 12px; color: #525252;">Engineered in Arizona • Made in the USA</span>
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

