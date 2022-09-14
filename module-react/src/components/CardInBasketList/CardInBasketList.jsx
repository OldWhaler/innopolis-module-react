import { useSelector } from 'react-redux';

import uniqid from 'uniqid';
import CardInBasket from "../CardInBasket/CardInBasket";

import './CardInBasketList.scss'

function CardInBasketList() {
  const idList = useSelector(store => store.basketReducer.idList);
  return (
    <ul className="cardInBasketList">

      {idList.map(({ id, amount }) => <CardInBasket key={uniqid()} prodId={id} amount={amount} />)}
    </ul>
  );
}

export default CardInBasketList;