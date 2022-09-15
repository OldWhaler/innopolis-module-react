import { useDispatch } from 'react-redux';
import AddInBasket from '../Handlers/AddInBasket';

import './Card.scss';

function Card(props) {
  const { id, name, description, price, weight, img } = props.data;
  const dispatch = useDispatch();
  return (
    <li id={id} className="card">
      <div>
        <img className='card__img' src={`images/${img}`} alt="dish" />
        <h2 className="card__title">{name}</h2>
        <p className="card__desc">{description}</p>
      </div>

      <div className="card__info">
        <p className="card__dish-info">
          <span className='card__dish-price'>{price}&#8381;</span>
          <sub className="card__dish-weight">/{weight}</sub>
        </p>
        <button className='card__button' data-dish-id={id} onClick={(e) => AddInBasket(e, dispatch)}></button>
      </div>
    </li>
  )
}

export default Card