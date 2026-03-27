import { Request, Response, NextFunction } from 'express'
import { AppError } from './errorHandler'

export function validateContact(req: Request, _res: Response, next: NextFunction) {
  const { name, email, message } = req.body
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return next(new AppError(400, 'Name must be at least 2 characters'))
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRe.test(email)) {
    return next(new AppError(400, 'Valid email is required'))
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return next(new AppError(400, 'Message must be at least 10 characters'))
  }
  next()
}
