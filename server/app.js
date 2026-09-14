import cors from 'cors'
import express from 'express'
import { config } from './config/env.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'
import contactRoutes from './routes/contactRoutes.js'
import projectRoutes from './routes/projectRoutes.js'

const app = express()

app.use(cors({ origin: config.allowedOrigin }))
app.use(express.json())

app.get('/', (request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api/projects', projectRoutes)
app.use('/api/contact', contactRoutes)
app.use(notFoundHandler)
app.use(errorHandler)

export default app
