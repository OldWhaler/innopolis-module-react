import uniqid from 'uniqid';
import Card from "../Card/Card";
import { products } from '../../products-list';

import './CardsList.scss'

function CardsList() {
  return (
    <ul className="cards-list" >
      {products.map(prod => <Card key={uniqid()} data={prod} />)}
    </ul>
  )
}

export default CardsList