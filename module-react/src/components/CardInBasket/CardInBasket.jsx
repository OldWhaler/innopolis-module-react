import { products } from '../../products-list';

import './CardInBasket.scss'

function CardInBasket({ prodId,
  prodInBasetIdList,
  setProdInBasetIdList,
  basketSum,
  setbasketSum }) {
  const product = products.filter(item => item.id === prodId)[0];

  function buttonClickHandler() {
    const newProdList = prodInBasetIdList.filter(item => item !== prodId);
    setProdInBasetIdList(newProdList);
    setbasketSum(basketSum - product.price)
  }
  return (
    <div className="card-in-basket" >
      <img src={`images/${product.img}`} alt="" className="card-in-basket__img" />
      <p className="card-in-basket__name">{product.name}</p>
      <p className="card-in-basket__price">{product.price} ₽</p>
      <button className="card-in-basket__button" data-prod-id={prodId} onClick={buttonClickHandler}></button>
    </div>
  );
}

export default CardInBasket;