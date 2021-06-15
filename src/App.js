 
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ContainerFoot } from './components/Footer/FooterContainer';
import NavigationBar from './components/NavBar/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar class='Nav'/>
      <h4>HELLO</h4>
      <ContainerFoot class='Footer'/>
    </BrowserRouter>

  );
}

export default App;
