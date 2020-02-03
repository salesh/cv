import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navbar from './components/Navbar';

/*
  BrowserRouter parent component that holds all routes <Router>
  className attribute access the CSS class 
*/
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
    </Router>
  )
}


export default App;
