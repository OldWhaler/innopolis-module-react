import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import uniqid from 'uniqid';
import CardInBasket from "../CardInBasket/CardInBasket";

import './CardInBasketList.scss'

function CardInBasketList() {
  const idList = useSelector(store => store.appReducer.idList);
  const elements = idList.map(({ id, amount }) =>
    <CardInBasket key={uniqid()} prodId={id} amount={amount} />);
  return (
    <ul className="card-in-basket-list">
      {elements.length === 0 ?
        <li className="empty-basket">
          Сложите в корзину нужные товары
          <p>А чтобы их найти, загляните в <Link to='/products'>каталог</Link></p>
        </li> : elements}
    </ul>
  );
}

export default CardInBasketList;