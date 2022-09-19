import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCounter, changeSum, removeFromIdList } from '../../store/appSlice';

import { products } from '../../products-list';
import ShowDishCard from '../Handlers/ShowDishCard';

import './CardInBasket.scss'

function CardInBasket({ prodId, amount }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { price, img, name, id } = products.filter(item => item.id === prodId)[0];

  function buttonClickHandler() {
    dispatch(changeCounter(-1));
    dispatch(changeSum(-price));
    dispatch(removeFromIdList(prodId))
  }

  return (
    <li className="card-in-basket" onClick={(e) => ShowDishCard(e, id, navigate)}>
      <img src={`images/${img}`} alt="" className="card-in-basket__img" />
      <p className="card-in-basket__name">{name}</p>
      <p className="card-in-basket__price"><span>{amount} шт.</span><span>X</span><span>{price} &#8381;</span></p>
      <button className="card-in-basket__button" data-prod-id={id} onClick={buttonClickHandler}></button>
    </li>
  );
}

export default CardInBasket;