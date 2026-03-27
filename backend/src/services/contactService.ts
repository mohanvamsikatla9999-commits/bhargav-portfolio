import type { ContactPayload } from '../types'

// In production: wire to nodemailer / SendGrid / DB
export async function processContact(payload: ContactPayload): Promise<void> {
  console.log('[ContactService] New message from:', payload.email)
  // TODO: send email or persist to DB
}
