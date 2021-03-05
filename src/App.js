import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/NavBar/navbar";
import Clock from "./components/Clock/Clock.js";
import data from './dataJson';
import Background from './components/Background/Background'

function App() {


const citiesArray = data.cities.slice();

   return (
     <div>
      <NavBar />
      <Clock />
      <Background citiesArray={citiesArray} />
     </div>
   );
}

export default App;
