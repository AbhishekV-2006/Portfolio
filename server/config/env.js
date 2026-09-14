import path from 'node:path'
import { fileURLToPath } from 'node:url'

const serverDirectory = path.dirname(fileURLToPath(import.meta.url))

export const config = {
  port: Number(process.env.PORT) || 5000,
  allowedOrigin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173',
  projectsFile: path.resolve(serverDirectory, '..', process.env.PROJECTS_DATA_FILE || './data/projects.json'),
  contactsFile: path.resolve(serverDirectory, '..', process.env.CONTACT_DATA_FILE || './data/contacts.json')
}
