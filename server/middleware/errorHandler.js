export function notFoundHandler(request, response) {
  response.status(404).json({ error: 'Route not found' })
}

export function errorHandler(error, request, response, next) {
  if (response.headersSent) {
    return next(error)
  }

  const isMalformedJson = error instanceof SyntaxError && error.status === 400 && 'body' in error
  const status = isMalformedJson ? 400 : 500
  const message = isMalformedJson ? 'Request body contains invalid JSON' : 'Internal server error'

  console.error(error)
  response.status(status).json({ error: message })
}
