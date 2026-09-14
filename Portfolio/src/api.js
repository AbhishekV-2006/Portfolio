import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export async function fetchApi(path, options = {}) {
  const { body, headers, ...requestOptions } = options

  try {
    const response = await axios({
      ...requestOptions,
      url: `${API_BASE_URL}${path}`,
    headers: {
      'Content-Type': 'application/json',
        ...headers
      },
      data: body
    })

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'The API request failed', { cause: error })
  }
}
