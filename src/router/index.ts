import { Home } from '../components/pages/Home'
import { Login } from '../components/pages/Login'
import { NotFound } from '../components/pages/NotFound'
import { Register } from '../components/pages/Register'
import { User } from '../components/pages/User'

export const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/register',
    exact: false,
    component: Register
  }
]

export const privateRoutes = [
  {
    path: '/user',
    exact: false,
    component: User
  }
]

export const errorRoutes = [
  {
    path: '*',
    exact: false,
    component: NotFound
  }
]
