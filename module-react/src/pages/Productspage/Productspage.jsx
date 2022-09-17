import Header from '../../components/Headers/ProductHeader';
import CardsList from '../../components/CardsList/CardsList';

function Productspage() {
  return (
    <div className="container">
      <Header text={'наша продукция'} />
      <CardsList />
    </div>
  );
}

export default Productspage;