import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeLoginStatus } from '../../store/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import './Authentication.scss'

function Loginpage() {
  const [errorParagraphText, setErrorParagraphText] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const validateErrorParagraph = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    const { login, password } = data;
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.login === login);


    if (user?.password === password) {
      dispatch(changeLoginStatus(true))
      navigate('/')
    } else {
      setErrorParagraphText('Логин или пароль неверен')
      reset()
      setTimeout(() => setErrorParagraphText(''), 2000)
    }
  }

  return (
    <div className="login">
      <div className="login__wrapper">

        <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
          <Link className="login__link" to='/registration' >Зарегистрироваться</Link>
          <h2 className="login__headling">вход</h2>


          <input className='login__input' type="text" placeholder='Логин' {...register('login', {
            required: 'Поле не должно быть пустым',
            minLength: {
              value: 4,
              message: 'Логин должен содержать не менее 4-х символов'
            },
          })} />
          <p className="login__input-error">{errors?.login?.message || ''}</p>


          <input className='login__input' type="password" placeholder='Пароль' {...register('password', {
            required: 'Поле не должно быть пустым',
            minLength: {
              value: 4,
              message: 'Пароль не менее 4-х символов'
            },
          })} />
          <p className="login__input-error">{errors?.password?.message || ''}</p>


          <div className="login__checkbox">
            <input className='login__checkbox-input' type="checkbox" name="" id="checkbox-input" />
            <label className='login__checkbox-label' htmlFor="checkbox-input" />
            <p className='login__checkbox-text'>Я согласен получать обновления на почту</p>
          </div>
          <p className='login__validate-error' ref={validateErrorParagraph}>{errorParagraphText}</p>
          <button className='button button_colored' type="submit">Войти</button>
        </form>

      </div>
    </div>
  );
}

export default Loginpage