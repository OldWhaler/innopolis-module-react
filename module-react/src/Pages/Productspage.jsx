import { React, useState } from 'react';
import Header from '../components/Header/Header';
import Cards from '../components/Cards/Cards';

function Productspage() {
  let [basketCounter, setBasketCounter] = useState(0);
  let [basketSum, setbasketSum] = useState(0);

  return (
    <div className="container">
      <Header basketCounter={basketCounter} basketSum={basketSum} />
      <Cards
        basketCounter={basketCounter}
        setBasketCounter={setBasketCounter}
        basketSum={basketSum}
        setbasketSum={setbasketSum}
      />
    </div>
  );
}

export default Productspage;