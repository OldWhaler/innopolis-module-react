import { useSelector } from 'react-redux';

import CardInBasketList from '../components/CardInBasketList/CardInBasketList';
import { Link } from 'react-router-dom'

import './Basketpage.scss'

function Basketpage() {
  const basketSum = useSelector(store => store.basketReducer.sum);

  return (
    <div className="basket-container">
      <div className="basket">
        <header className="basket__header">
          <Link to='/' >
            <button className='basket__header-btn'></button>
          </Link>
          <h1 className='basket__headling'>Корзина с выбранными товарами</h1>
        </header>

        <CardInBasketList />

        <footer className="basket__footer">
          <p className="basket__sum">Заказ на сумму: <span>{basketSum} &#8381;</span></p>
          <button className="basket__button">Оформить заказ</button>
        </footer>
      </div>

    </div>
  );
}

export default Basketpage;