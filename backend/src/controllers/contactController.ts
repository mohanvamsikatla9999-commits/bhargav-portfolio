import { Request, Response, NextFunction } from 'express'
import { processContact } from '../services/contactService'
import type { ContactPayload, ApiResponse } from '../types'

export async function submitContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const payload = req.body as ContactPayload
    await processContact(payload)
    const response: ApiResponse = { success: true, message: 'Message received' }
    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}
