import { LoginRequest, RegisterRequest } from '../../types/global'
import { server } from '../server'

export const userRegister = async (body: RegisterRequest) => {
  await server.post('/register', body)
}

export const userLogin = async (body: LoginRequest) => {
  await server.post('/login', body)
}

export const userLogout = async () => {
  await server.get('/logout')
}
