import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { userLogout } from '../../server/api/auth'
import type { User } from '../../types/global'
import { UserContext } from '../App'

export const LogoutButton: React.FC = () => {
  const { setUser } = useContext(UserContext)
  const history = useHistory()
  const logout = async () => {
    try {
      await userLogout()
      setUser({} as User)
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={logout} className="btn btn-sm btn-primary mx-2">
      ログアウト
    </button>
  )
}
