import React from 'react'
import { useForm } from 'react-hook-form'
import { userRegister } from '../../server/api/auth'
import type { RegisterRequest } from '../../types/global'

export const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterRequest>()
  const onSubmit = async (data: RegisterRequest) => {
    try {
      await userRegister(data)
      console.log('success')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="card bg-base-200 p-10 max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="form-control">
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
    </div>
  )
}
