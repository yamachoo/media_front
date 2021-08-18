import { LoginQuery, RegisterQuery } from '../../types/global'
import { server } from '../server'

export const userRegister = async (body: RegisterQuery) => {
  await server.post('/register', body)
}

export const userLogin = async (body: LoginQuery) => {
  await server.post('/login', body)
}

export const userLogout = async () => {
  await server.get('/logout')
}
