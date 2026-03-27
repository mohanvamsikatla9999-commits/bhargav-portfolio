import express from 'express'
import cors from 'cors'
import contactRouter from './routes/contact'
import { errorHandler } from './middleware/errorHandler'

const app = express()

app.use(cors({ origin: process.env.FRONTEND_URL ?? '*' }))
app.use(express.json())

app.get('/health', (_req, res) => res.json({ status: 'ok' }))
app.use('/api/contact', contactRouter)

app.use(errorHandler)

export default app
