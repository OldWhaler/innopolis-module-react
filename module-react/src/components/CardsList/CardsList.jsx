import Card from "../Card/Card";
import { products } from '../../products-list';

import './CardsList.scss'

function Cards({ setBasketCounter,
  basketCounter,
  basketSum,
  setbasketSum,
  prodInBasetIdList,
  setProdInBasetIdList }) {

  function cardsClickHandler(event) {
    const target = event.target;
    const dishId = target.dataset.dishId;
    if (!target.classList.contains('card__button')) return;

    const dish = products.filter(item => item.id === dishId)[0];

    setProdInBasetIdList([...prodInBasetIdList, dishId])
    setbasketSum(basketSum + +dish.price)
    setBasketCounter(++basketCounter);
  }

  return (
    <main className="cards-list" onClick={cardsClickHandler}>
      {products.map(prod => <Card key={prod.id} data={prod} />)}
    </main>
  )
}

export default Cards