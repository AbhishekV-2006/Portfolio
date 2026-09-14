import { createContact, getContacts } from '../models/contactModel.js'

function validateContact({ name, email, message }) {
  if (!name || !String(name).trim()) {
    return { field: 'name', error: 'Name is required' }
  }
  if (!email || !String(email).trim()) {
    return { field: 'email', error: 'Email is required' }
  }
  if (!message || !String(message).trim()) {
    return { field: 'message', error: 'Message is required' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    return { field: 'email', error: 'Please provide a valid email address' }
  }

  return null
}

export async function listContacts(request, response, next) {
  try {
    response.json(await getContacts())
  } catch (error) {
    next(error)
  }
}

export async function submitContact(request, response, next) {
  try {
    const { name, email, message, subject } = request.body || {}
    const validationError = validateContact({ name, email, message })

    if (validationError) {
      return response.status(400).json(validationError)
    }

    const submission = await createContact({
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      ...(subject && { subject: String(subject).trim() })
    })

    response.status(201).json({ message: 'Contact submission received', submission })
  } catch (error) {
    next(error)
  }
}
