import 'dotenv/config'
import app from './app.js'
import { config } from './config/env.js'

app.listen(config.port, () => {
  console.log(`Portfolio API listening on http://localhost:${config.port}`)
})
