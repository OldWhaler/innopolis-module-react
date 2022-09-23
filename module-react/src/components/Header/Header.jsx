import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import BackArrowButton from '../Buttons/BackArrowButton/BackArrowButton';
import AuthenticationButton from '../Buttons/AuthenticationButton/AuthenticationButton';

import './Header.scss';

function Header({ headlingText, needBasketInfo, needBackArrowButton }) {
  const basketCounter = useSelector(store => store.appReducer.counter);
  const basketSum = useSelector(store => store.appReducer.sum);

  function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }

  const basketInfo =
    <div className="header__basket">
      <p className="header__basket-text">
        <span>{basketCounter} {getNoun(basketCounter, 'товар', 'товара', 'товаров')}</span>
        <span>на сумму {basketSum} &#8381;</span>
      </p>
      <Link className="header__basket-img" to='/basket' />
    </div>

  return (
    <header className="header">
      {needBackArrowButton && <BackArrowButton />}
      <h1 className="header__title">{headlingText}</h1>
      {needBasketInfo && basketInfo}
      <AuthenticationButton />
    </header>
  )
}

export default Header