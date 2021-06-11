 
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import StaticBanner from './components/Banners/StaticBanner/StaticBanner';

function App() {
  return (
    <BrowserRouter>
      <StaticBanner/>
    </BrowserRouter>

  );
}

export default App;
