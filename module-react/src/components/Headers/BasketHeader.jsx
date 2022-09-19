import BackArrowButton from '../Buttons/BackArrowButton';
import AuthenticationButton from '../Buttons/AuthenticationButton';

import './BasketHeader.scss'

function BasketHeader() {
  return (
    <header className="basket__header">
      <BackArrowButton />
      <h1 className='basket__headling'>Корзина с выбранными товарами</h1>
      <AuthenticationButton />
    </header>
  );
}

export default BasketHeader;