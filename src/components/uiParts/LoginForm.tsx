import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { userLogin } from '../../server/api/auth'
import type { LoginRequest } from '../../types/global'
import { UserContext } from '../App'

export const LoginForm: React.FC = () => {
  const { setUser } = useContext(UserContext)
  const { register, handleSubmit } = useForm<LoginRequest>()
  const history = useHistory()
  const onSubmit = async (data: LoginRequest) => {
    try {
      const user = await userLogin(data)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="card bg-base-200 p-10 w-96">
      <form onSubmit={handleSubmit(onSubmit)} className="form-control mb-8">
        <input
          {...register('email', {
            required: true,
            maxLength: 100
          })}
          placeholder="メールアドレス"
          className="input mb-6"
        />
        <input
          {...register('password', {
            required: true,
            maxLength: 24,
            minLength: 8
          })}
          placeholder="パスワード"
          className="input mb-6"
        />
        <button type="submit" className="btn btn-primary">
          ログイン
        </button>
      </form>
      <Link to="/register" className="text-center">
        新しいアカウントが必要ですか？
      </Link>
    </div>
  )
}
