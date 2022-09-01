import './Header.scss';
import { Link } from 'react-router-dom'

function Header({ basketCounter, basketSum }) {
  return (
    <header className="header">
      <h1 className="header__title">наша продукция</h1>
      <div className="header__basket">
        <p className="header__basket-text"><span>{basketCounter} товара</span><span>на сумму {basketSum} ₽</span></p>
        <Link className="header__basket-img" to='/basket'>
          <img src="./images/basket.svg" alt="basket" />
        </Link>
      </div>
    </header>
  )
}

export default Header