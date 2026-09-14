const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export async function fetchApi(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  })
  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.error || 'The API request failed')
  }

  return data
}
