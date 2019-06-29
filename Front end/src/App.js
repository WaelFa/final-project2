import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <AboutUs />
    </div>
  );
}

export default App;
