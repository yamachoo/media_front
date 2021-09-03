import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

export const UserButton: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <Link to="/user">
      <button className="btn btn-sm btn-ghost mx-2">{user.name}</button>
    </Link>
  )
}
