import { React, useState } from 'react';
import { Routes, Route } from 'react-router';
import Productspage from './pages/Productspage';
import Basketpage from './pages/Basketpage';
import './App.css';

function App() {
  //States
  let [basketCounter, setBasketCounter] = useState(0);
  let [basketSum, setbasketSum] = useState(0);
  let [prodInBasetIdList, setProdInBasetIdList] = useState([]);

  return (
    <div className="container">
      <Routes>
        <Route index path='/' element={
          <Productspage
            basketCounter={basketCounter}
            setBasketCounter={setBasketCounter}
            basketSum={basketSum}
            setbasketSum={setbasketSum}
            prodInBasetIdList={prodInBasetIdList}
            setProdInBasetIdList={setProdInBasetIdList} />
        } />
        <Route path='basket' element={
          <Basketpage
            basketSum={basketSum}
            setbasketSum={setbasketSum}
            prodInBasetIdList={prodInBasetIdList}
            setProdInBasetIdList={setProdInBasetIdList}
            setBasketCounter={setBasketCounter} />
        } />
      </Routes>
    </div>
  );
}

export default App;
