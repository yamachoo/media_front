import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { errorRoutes, publictRoutes } from '../router'
import type { User } from '../types/global'
import { Header } from './uiParts/Header'

type UserContextType = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = React.createContext({} as UserContextType)

export const App: React.FC = () => {
  const [user, setUser] = React.useState({} as User)

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          {publictRoutes.map((config, i) => (
            <Route key={i} {...config} />
          ))}
          {errorRoutes.map((config, i) => (
            <Route key={i} {...config} />
          ))}
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}
