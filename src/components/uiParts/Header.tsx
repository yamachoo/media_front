import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import { LoginButton } from './LoginButton'
import { LogoutButton } from './LogoutButton'
import { RegisterButton } from './RegisterButton'

export const Header: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <header className="navbar bg-neutral absolute w-screen">
      <div className="flex-1 px-2 mx-2">
        <Link to="/" className="text-lg font-bold text-white">
          Media
        </Link>
      </div>
      <div className="flex-none">
        {Object.keys(user).length !== 0 && <LogoutButton />}
        {Object.keys(user).length !== 0 || <LoginButton />}
        {Object.keys(user).length !== 0 || <RegisterButton />}
      </div>
    </header>
  )
}
