import React from 'react';
import { Routes, Route } from 'react-router';

import Productspage from './pages/Productspage/Productspage';
import Basketpage from './pages/Basketpage/Basketpage';
import Cardpage from './pages/Cardpage/Cardpage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Productspage />} />
      <Route path='basket' element={<Basketpage />} />
      <Route path='/:dishId' element={<Cardpage />} />
      {/* <Route path='login' element={<Loginpage />} /> */}
    </Routes>
  );
}

export default App;
