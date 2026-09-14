import { config } from '../config/env.js'
import { readJson, writeJson } from './jsonStore.js'

export function getContacts() {
  return readJson(config.contactsFile)
}

export async function createContact(data) {
  const contacts = await getContacts()
  const submission = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    ...data,
    submittedAt: new Date().toISOString()
  }

  contacts.push(submission)
  await writeJson(config.contactsFile, contacts)
  return submission
}
