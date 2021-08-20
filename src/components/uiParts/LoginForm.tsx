import React from 'react'
import { useForm } from 'react-hook-form'
import { userLogin } from '../../server/api/auth'
import type { LoginQuery } from '../../types/global'

export const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginQuery>()
  const onSubmit = async (data: LoginQuery) => {
    try {
      await userLogin(data)
      console.log('success')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="card bg-base-200 p-10 max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="form-control">
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
    </div>
  )
}
