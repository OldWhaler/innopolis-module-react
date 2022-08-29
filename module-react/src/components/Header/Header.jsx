import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">наша продукция</h1>
      <div className="basket">
        <p className="basket__text"><span>3 товара</span><span>на сумму 3 500 ₽</span></p>
        <div className="basket__img">
          <img src="./images/basket.svg" alt="basket" />
        </div>
      </div>
    </header>
  )
}

export default Header