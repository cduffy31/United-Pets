 
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ContainerFoot } from './components/Footer/FooterContainer';

function App() {
  return (
    <BrowserRouter>
      <ContainerFoot/>
    </BrowserRouter>

  );
}

export default App;
