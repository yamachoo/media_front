import { Link } from 'react-router-dom'

export const LoginButton: React.FC = () => {
  return (
    <Link to="/login">
      <button className="btn btn-sm btn-ghost mx-2">ログイン</button>
    </Link>
  )
}
