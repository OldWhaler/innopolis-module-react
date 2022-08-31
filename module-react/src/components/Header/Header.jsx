import './Header.scss'

function Header({ basketCounter, basketSum }) {
  return (
    <header className="header">
      <h1 className="header__title">наша продукция</h1>
      <div className="basket">
        <p className="basket__text"><span>{basketCounter} товара</span><span>на сумму {basketSum} ₽</span></p>
        <div className="basket__img">
          <img src="./images/basket.svg" alt="basket" />
        </div>
      </div>
    </header>
  )
}

export default Header