import { Request, Response, NextFunction } from 'express'

const store = new Map<string, { count: number; resetAt: number }>()

export function rateLimiter(limit = 10, windowMs = 60_000) {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip ?? 'unknown'
    const now = Date.now()
    const entry = store.get(key)

    if (!entry || now > entry.resetAt) {
      store.set(key, { count: 1, resetAt: now + windowMs })
      return next()
    }

    if (entry.count >= limit) {
      return res.status(429).json({ success: false, error: 'Too many requests' })
    }

    entry.count++
    next()
  }
}
