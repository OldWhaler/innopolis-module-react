import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import './Authentication.scss'

function Registrationpage() {
  const navigate = useNavigate()

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

    if (localStorage.getItem(login)) {
      reset();
      alert('Такой пользователь уже сущетсвует!')
    } else {
      localStorage.setItem(login, password);
      navigate('/')
    }
  }


  return (
    <div className="registration">
      <div className="registration__wrapper">

        <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
          <Link className="registration__link" to='/login' >Авторизоваться</Link>
          <h2 className="registration__headling">Регистрация</h2>


          <input className='registration__input' type="text" placeholder='Логин' {...register('login', {
            required: 'Поле не должно быть пустым',
            minLength: {
              value: 4,
              message: 'Логин должен содержать не менее 4-х символов'
            },
          })} />
          <p className="registration__input-error">{errors?.login?.message || ''}</p>


          <input className='registration__input' type="password" placeholder='Пароль' {...register('password', {
            required: 'Поле не должно быть пустым',
            minLength: {
              value: 4,
              message: 'Пароль должен содержать не менее 4-х символов'
            },
          })} />
          <p className="registration__input-error">{errors?.password?.message || ''}</p>


          <div className="registration__checkbox">
            <input className='registration__checkbox-input' type="checkbox" name="" id="checkbox-input" />
            <label className='registration__checkbox-label' htmlFor="checkbox-input" />
            <p className='registration__checkbox-text'>Я согласен получать обновления на почту</p>
          </div>
          <p className='registration__validate-error' />
          <button className='button button_colored' type="submit">Зарегистрироваться</button>
        </form>

      </div>
    </div>
  );
}

export default Registrationpage