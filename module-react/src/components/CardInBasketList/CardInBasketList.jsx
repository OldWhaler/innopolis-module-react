import CardInBasket from "../CardInBasket/CardInBasket";

import './CardInBasketList.scss'

function CardInBasketList({ prodInBasetIdList, setProdInBasetIdList, setbasketSum }) {
  return (
    <div className="cardInBasketList">
      {prodInBasetIdList.map(id =>
        <CardInBasket
          key={id}
          prodId={id}
          setProdInBasetIdList={setProdInBasetIdList}
          setbasketSum={setbasketSum}
        />)}
    </div>
  );
}

export default CardInBasketList;