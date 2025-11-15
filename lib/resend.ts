import { Resend } from 'resend'

let resendInstance: Resend | null = null

export function getResend() {
  if (!resendInstance) {
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      throw new Error('Missing RESEND_API_KEY environment variable')
    }
    resendInstance = new Resend(resendApiKey)
  }
  return resendInstance
}

// Export a getter function instead of calling it at module load
export const resend = {
  get emails() {
    return getResend().emails
  }
}

