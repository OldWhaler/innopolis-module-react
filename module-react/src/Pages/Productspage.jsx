import Header from '../components/Header/Header';
import Cards from '../components/CardsList/CardsList';

function Productspage({ basketCounter,
  setBasketCounter,
  basketSum,
  setbasketSum,
  prodInBasetIdList,
  setProdInBasetIdList }) {

  return (
    <div className="container">
      <Header basketCounter={basketCounter} basketSum={basketSum} />
      <Cards
        basketCounter={basketCounter}
        setBasketCounter={setBasketCounter}
        basketSum={basketSum}
        setbasketSum={setbasketSum}
        prodInBasetIdList={prodInBasetIdList}
        setProdInBasetIdList={setProdInBasetIdList}
      />
    </div>
  );
}

export default Productspage;