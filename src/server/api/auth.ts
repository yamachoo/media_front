import { LoginRequest, RegisterRequest, User } from '../../types/global'
import { server } from '../server'

export const userRegister = async (body: RegisterRequest) => {
  await server.post('/register', body)
}

export const userLogin = async (body: LoginRequest): Promise<User> => {
  const { data } = await server.post('/login', body)
  return data
}

export const userLogout = async () => {
  await server.get('/logout')
}
