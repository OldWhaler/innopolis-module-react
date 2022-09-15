import CardInBasketList from '../components/CardInBasketList/CardInBasketList';
import BasketHeader from '../components/Headers/BasketHeader';
import BasketFooter from '../components/Footers/BasketFooter';
import './Basketpage.scss'

function Basketpage() {


  return (
    <div className="basket-container">
      <div className="basket">
        <BasketHeader />

        <CardInBasketList />

        <BasketFooter />

      </div>

    </div>
  );
}

export default Basketpage;