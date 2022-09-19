import Header from '../../components/Header/Header';
import CardsList from '../../components/CardsList/CardsList';

function Productspage() {
  const data = {
    headlingText: 'наша продукция',
    needBasketInfo: true,
    needBackArrowButton: false
  }

  return (
    <div className="container">
      <Header {...data} />
      <CardsList />
    </div>
  );
}

export default Productspage;