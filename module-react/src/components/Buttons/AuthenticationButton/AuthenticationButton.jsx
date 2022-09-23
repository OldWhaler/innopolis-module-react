import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { changeLoginStatus, clearBasket } from '../../../store/appSlice';

import './AuthenticationButton.scss'

function AuthenticationButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logged = useSelector(store => store.appReducer.logged)

  const onClick = () => {
    if (logged) {
      dispatch(clearBasket())
      dispatch(changeLoginStatus(false))
    }
    navigate('/login')
  }

  return (
    <button className="button" onClick={onClick}>{logged ? 'Выйти' : 'Войти'}</button>
  )

}

export default AuthenticationButton;