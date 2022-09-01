import CardInBasket from "../CardInBasket/CardInBasket";

import './CardInBasketList.scss'

function CardInBasketList({ prodInBasetIdList, setProdInBasetIdList, setbasketSum, basketSum }) {
  return (
    <div className="cardInBasketList">
      {prodInBasetIdList.map(id =>
        <CardInBasket
          key={id}
          prodId={id}
          prodInBasetIdList={prodInBasetIdList}
          setProdInBasetIdList={setProdInBasetIdList}
          basketSum={basketSum}
          setbasketSum={setbasketSum}
        />)}
    </div>
  );
}

export default CardInBasketList;