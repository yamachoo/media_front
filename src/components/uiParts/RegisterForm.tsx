import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { userRegister } from '../../server/api/auth'
import type { RegisterRequest } from '../../types/global'

export const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterRequest>()
  const history = useHistory()
  const onSubmit = async (data: RegisterRequest) => {
    try {
      await userRegister(data)
      history.push('/login')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="card bg-base-200 p-10 w-96">
      <form onSubmit={handleSubmit(onSubmit)} className="form-control mb-8">
        <input
          {...register('name', {
            required: true,
            maxLength: 24,
            minLength: 1
          })}
          placeholder="名前"
          className="input mb-6"
        />
        <input
          {...register('email', { required: true, maxLength: 100 })}
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
          新規登録
        </button>
      </form>
      <Link to="/" className="link link-hover text-center">
        既にアカウントをお持ちですか？
      </Link>
    </div>
  )
}
