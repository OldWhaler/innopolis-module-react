import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import BackArrowButton from '../Buttons/BackArrowButton';
import ExitButton from '../Buttons/ExitButton';

import './ProductHeader.scss';

function Header(props = '') {
  const basketCounter = useSelector(store => store.basketReducer.counter);
  const basketSum = useSelector(store => store.basketReducer.sum);

  return (
    <header className="header">
      <BackArrowButton />
      <h1 className="header__title">{props.text}</h1>
      <div className="header__basket">
        <p className="header__basket-text"><span>{basketCounter} товара</span><span>на сумму {basketSum} &#8381;</span></p>
        <Link className="header__basket-img" to='/basket' />
      </div>
      <ExitButton />
    </header>
  )
}

export default Header