import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from "../../components/Headers/ProductHeader";
import AddInBasket from "../../components/Handlers/AddInBasket";

import { products } from '../../products-list';

import './Cardpage.scss';

function Cardpage() {
  const { dishId } = useParams()
  const dispatch = useDispatch();

  const { img, name, description, price, weight, id } = products.filter(({ id }) => id === dishId)[0];

  return (
    <>
      <div className="container">
        <Header />
        <div className="description-card">
          <div className="description-card__wrapper">
            <img src={`images/${img}`} alt="" className="description-card__img" />
            <div className="description-card__info">
              <h2 className="description-card__headling">{name}</h2>
              <p className="description-card__desc">{description}</p>
              <p className="description-card___dish-info">
                <span className='description-card____dish-price'>{price}&#8381;</span>
                <sub className="description-card____dish-weight">/{weight}</sub>
                <button className="button button_colored" onClick={(e) => AddInBasket(e, dispatch)} data-dish-id={id}>В корзину</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cardpage;