import React from 'react'
import { userLogout } from '../../server/api/auth'

export const LogoutButton: React.FC = () => {
  const logout = async () => {
    try {
      await userLogout()
      console.log('success')
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
