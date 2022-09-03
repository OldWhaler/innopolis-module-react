import Header from '../components/Header/Header';
import CardsList from '../components/CardsList/CardsList';

function Productspage({ basketCounter,
  setBasketCounter,
  basketSum,
  setbasketSum,
  setProdInBasetIdList }) {

  return (
    <div className="container">
      <Header basketCounter={basketCounter} basketSum={basketSum} />
      <CardsList
        setBasketCounter={setBasketCounter}
        setbasketSum={setbasketSum}
        setProdInBasetIdList={setProdInBasetIdList}
      />
    </div>
  );
}

export default Productspage;