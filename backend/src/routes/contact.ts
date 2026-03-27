import { Router } from 'express'
import { submitContact } from '../controllers/contactController'
import { validateContact } from '../middleware/validate'
import { rateLimiter } from '../middleware/rateLimiter'

const router = Router()

router.post('/', rateLimiter(5, 60_000), validateContact, submitContact)

export default router
