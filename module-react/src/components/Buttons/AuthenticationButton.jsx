import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function AuthenticationButton() {
  const navigate = useNavigate()
  const logged = useSelector(store => store.appReducer.logged)

  const onClick = () => {
    navigate('/login')
  }

  return (
    <button className="button" onClick={onClick}>{logged ? 'Выйти' : 'Войти'}</button>
  )

}

export default AuthenticationButton;