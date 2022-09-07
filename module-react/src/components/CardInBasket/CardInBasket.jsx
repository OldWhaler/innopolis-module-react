import { products } from '../../products-list';

import './CardInBasket.scss'

function CardInBasket({
  prodId,
  setProdInBasetIdList,
  setbasketSum,
  setBasketCounter }) {

  const product = products.filter(item => item.id === prodId)[0];

  function buttonClickHandler() {
    setProdInBasetIdList(currentProdInBasetIdList => currentProdInBasetIdList.filter(item => item !== prodId));
    setbasketSum(currentBasketSum => currentBasketSum - product.price)
    setBasketCounter(currentBusketCounter => currentBusketCounter - 1)
  }

  return (
    <div className="card-in-basket" >
      <img src={`images/${product.img}`} alt="" className="card-in-basket__img" />
      <p className="card-in-basket__name">{product.name}</p>
      <p className="card-in-basket__price">{product.price} &#8381;</p>
      <button className="card-in-basket__button" data-prod-id={prodId} onClick={buttonClickHandler}></button>
    </div>
  );
}

export default CardInBasket;