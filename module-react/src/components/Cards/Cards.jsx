import Card from "../Card/Card";
import { products } from '../../products-list';

import './Cards.scss'

function Cards({ setBasketCounter, basketCounter, basketSum, setbasketSum }) {

  function cardsClickHandler(event) {
    const target = event.target;
    if (!target.classList.contains('card__button')) return;

    const dish = products.filter(item => item.id === target.dataset.dishId)[0];
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