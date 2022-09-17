import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import './Loginpage.scss'

function Loginpage() {
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))

    navigate('/')
  }


  return (
    <div className="login">
      <div className="login__wrapper">

        <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
          <Link className="login__link" to='/basket' >Зарегистрироваться</Link>
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
          <button className='button button_colored' type="submit">Войти</button>
        </form>

      </div>
    </div>
  );
}

export default Loginpage