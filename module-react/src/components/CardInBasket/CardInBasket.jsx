import { useDispatch } from 'react-redux';
import { changeCounter, changeSum, removeFromIdList } from '../../store/basketSlice';

import { products } from '../../products-list';

import './CardInBasket.scss'

function CardInBasket({ prodId, amount }) {
  const dispatch = useDispatch();

  const product = products.filter(item => item.id === prodId)[0];

  function buttonClickHandler() {
    dispatch(changeCounter(-1));
    dispatch(changeSum(-product.price));
    dispatch(removeFromIdList(prodId))
  }

  return (
    <li className="card-in-basket" >
      <img src={`images/${product.img}`} alt="" className="card-in-basket__img" />
      <p className="card-in-basket__name">{product.name}</p>
      <p className="card-in-basket__price"><span>{amount} шт.</span><span>X</span><span>{product.price} &#8381;</span></p>
      <button className="card-in-basket__button" data-prod-id={prodId} onClick={buttonClickHandler}></button>
    </li>
  );
}

export default CardInBasket;