import CardInBasketList from '../components/CardInBasketList/CardInBasketList';

import './Basketpage.scss'

function Basketpage({ basketSum, prodInBasetIdList, setProdInBasetIdList, setbasketSum }) {
  return (
    <div className="basket-container">
      <div className="basket">
        <h1 className="basket__header">Корзина с выбранными товарами</h1>
        <CardInBasketList prodInBasetIdList={prodInBasetIdList}
          setProdInBasetIdList={setProdInBasetIdList}
          setbasketSum={setbasketSum}
          basketSum={basketSum}
        />
        <footer className="basket__footer">
          <p className="basket__sum">Заказ на сумму: <span>{basketSum} &#8381;</span></p>
          <button className="basket__button">Оформить заказ</button>
        </footer>
      </div>

    </div>
  );
}

export default Basketpage;