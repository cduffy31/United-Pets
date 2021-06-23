 
import './App.css';
import React from 'react';
import Carousel from './components/Carousels/Carousel.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Carousel/>
    </BrowserRouter>

  );
}

export default App;
