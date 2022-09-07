import CardInBasketList from '../components/CardInBasketList/CardInBasketList';
import { Link } from 'react-router-dom'

import './Basketpage.scss'

function Basketpage({ basketSum, prodInBasetIdList, setProdInBasetIdList, setbasketSum, setBasketCounter }) {
  return (
    <div className="basket-container">
      <div className="basket">
        <h1 className="basket__header">Корзина с выбранными товарами</h1>
        <CardInBasketList
          prodInBasetIdList={prodInBasetIdList}
          setProdInBasetIdList={setProdInBasetIdList}
          setBasketCounter={setBasketCounter}
          setbasketSum={setbasketSum}
          basketSum={basketSum}
        />
        <footer className="basket__footer">
          <p className="basket__sum">Заказ на сумму: <span>{basketSum} &#8381;</span></p>
          <Link to='/' >
            <button className="basket__button">Продолжить покупки</button>
          </Link>
          <button className="basket__button">Оформить заказ</button>
        </footer>
      </div>

    </div>
  );
}

export default Basketpage;