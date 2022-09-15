import React from 'react';
import { Routes, Route } from 'react-router';

import Productspage from './pages/Productspage';
import Basketpage from './pages/Basketpage';

import './App.css';

//удалить!!!
import Cardpage from './pages/Cardpage';
//удалить!!!

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Productspage />} />
      <Route path='basket' element={<Basketpage />} />
    </Routes>
    // <Cardpage prodId={'5'} />
  );
}

export default App;
