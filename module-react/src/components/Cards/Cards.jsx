import Card from "../Card/Card";
import { products } from '../../products';

import './Cards.css'

function Cards(props) {
  return (
    <main className="cards-list">
      {products.map(prod => <Card key={prod.id} data={prod} />)}
    </main>
  )
}

export default Cards