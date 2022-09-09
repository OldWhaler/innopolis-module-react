import uniqid from 'uniqid';
import CardInBasket from "../CardInBasket/CardInBasket";

import './CardInBasketList.scss'

function CardInBasketList({ prodInBasetIdList, setProdInBasetIdList, setbasketSum, setBasketCounter }) {
  return (
    <div className="cardInBasketList">
      {prodInBasetIdList.map(id =>
        <CardInBasket
          key={uniqid()}
          prodId={id}
          setProdInBasetIdList={setProdInBasetIdList}
          setbasketSum={setbasketSum}
          setBasketCounter={setBasketCounter}
        />)}
    </div>
  );
}

export default CardInBasketList;