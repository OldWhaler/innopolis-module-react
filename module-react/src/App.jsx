import React from 'react';
import { Routes, Route } from 'react-router';

import Productspage from './pages/Productspage';
import Basketpage from './pages/Basketpage';
import Cardpage from './pages/Cardpage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Productspage />} />
      <Route path='basket' element={<Basketpage />} />
      <Route path='/:dishId' element={<Cardpage />} />
    </Routes>
  );
}

export default App;
