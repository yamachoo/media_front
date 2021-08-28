import { Home } from '../components/pages/Home'
import { Login } from '../components/pages/Login'
import { NotFound } from '../components/pages/NotFound'
import { Register } from '../components/pages/Register'

export const publictRoutes = [
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

export const errorRoutes = [
  {
    path: '*',
    exact: false,
    component: NotFound
  }
]
