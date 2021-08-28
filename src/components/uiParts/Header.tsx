import { useContext } from 'react'
import { UserContext } from '../App'
import { LoginButton } from './LoginButton'
import { LogoutButton } from './LogoutButton'

export const Header: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <header className="navbar bg-neutral absolute w-screen">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold text-white">Media</span>
      </div>
      <div className="flex-none">
        {Object.keys(user).length !== 0 ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  )
}
