export const SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : window.location.origin
export const ENDPOINT_PATH = 'api'
export const ENDPOINT_VERSION = 'v1'
