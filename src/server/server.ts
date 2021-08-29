import axios from 'axios'
import { ENDPOINT_PATH, ENDPOINT_VERSION, SERVER_URL } from '../constants'

const ENDPOINT_URL = `${SERVER_URL}/${ENDPOINT_PATH}/${ENDPOINT_VERSION}`

export const server = axios.create({
  baseURL: ENDPOINT_URL,
  timeout: 5000,
  withCredentials: true
})
