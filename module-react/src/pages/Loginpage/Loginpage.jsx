import './Loginpage.scss'

function Loginpage() {
  return (
    <div className="wrapper">
      <form className='login__form'>
        <h2 className="login__headling">вход</h2>
        <input className='login__input' type="text" placeholder='Логин' />
        <input className='login__input' type="password" placeholder='Пароль' />
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Я согласен получать обновления на почту</label>
        <button type="submit">Войти</button>

      </form>
    </div>
  );
}

export default Loginpage