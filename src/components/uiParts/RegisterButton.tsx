import { Link } from 'react-router-dom'

export const RegisterButton: React.FC = () => {
  return (
    <Link to="/register">
      <button className="btn btn-sm btn-primary mx-2">登録する</button>
    </Link>
  )
}
