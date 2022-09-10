import { useSelector } from 'react-redux';

import uniqid from 'uniqid';
import CardInBasket from "../CardInBasket/CardInBasket";

import './CardInBasketList.scss'

function CardInBasketList() {
  const idList = useSelector(store => store.basketReducer.idList);
  return (
    <ul className="cardInBasketList">
      {idList.map(id => <CardInBasket key={uniqid()} prodId={id} />)}
    </ul>
  );
}

export default CardInBasketList;