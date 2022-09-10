import uniqid from 'uniqid';

import { useDispatch } from 'react-redux';
import { changeCounter, changeSum, addToIdList } from '../../store/basketSlice';

import Card from "../Card/Card";

import { products } from '../../products-list';

import './CardsList.scss'

function CardsList() {
  const dispatch = useDispatch();

  function cardsListClickHandler(event) {
    const target = event.target;
    if (!target.classList.contains('card__button')) return;

    const dishId = target.dataset.dishId;
    const dish = products.filter(item => item.id === dishId)[0];

    dispatch(changeCounter(1));
    dispatch(changeSum(+dish.price));
    dispatch(addToIdList(dishId))
  }

  return (
    <ul className="cards-list" onClick={cardsListClickHandler}>
      {products.map(prod => <Card key={uniqid()} data={prod} />)}
    </ul>
  )
}

export default CardsList