 
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBasket from './components/NavBar/NavBasket/NavBasket';

function App() {
  return (
    <BrowserRouter>
      <NavBasket/>
    </BrowserRouter>

  );
}

export default App;
