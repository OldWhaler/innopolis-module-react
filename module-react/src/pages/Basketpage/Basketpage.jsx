import CardInBasketList from '../../components/CardInBasketList/CardInBasketList';
import Header from "../../components/Header/Header";
import BasketFooter from '../../components/Footer/BasketFooter';
import './Basketpage.scss'

function Basketpage() {

  const data = {
    headlingText: 'Корзина с выбранными товарами',
    needBasketInfo: false,
    needBackArrowButton: true
  }

  return (
    <div className="container">
      <div className="basket">
        <Header {...data} />
        <CardInBasketList />
        <BasketFooter />
      </div>
    </div>
  );
}

export default Basketpage;