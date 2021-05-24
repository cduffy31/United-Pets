 
import './App.css';
import React from 'react';
import NavigationBar from './components/NavBar/NavigationBar.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
    </BrowserRouter>

  );
}

export default App;
