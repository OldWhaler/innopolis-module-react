import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import BackArrowButton from '../Buttons/BackArrowButton';
import AuthenticationButton from '../Buttons/AuthenticationButton';

import './ProductHeader.scss';

function Header(props = '') {
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

  return (
    <header className="header">
      <BackArrowButton />
      <h1 className="header__title">{props.text}</h1>
      <div className="header__basket">
        <p className="header__basket-text">
          <span>{basketCounter} {getNoun(basketCounter, 'товар', 'товара', 'товаров')}</span>
          <span>на сумму {basketSum} &#8381;</span>
        </p>
        <Link className="header__basket-img" to='/basket' />
      </div>
      <AuthenticationButton />
    </header>
  )
}

export default Header