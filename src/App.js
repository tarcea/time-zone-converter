import React from "react";
import './App.css';
import NavBar from "./components/NavBar/navbar";
import data from './dataJson';
import Background from './components/Background/Background'
import TimeZoneConverterCard from './components/TimeZoneConverterCard/TimeZoneConverterCard'

function App() {


const citiesArray = data.cities.slice();
   return (
     <div>
      <NavBar />
      <Background citiesArray={citiesArray} />
      <TimeZoneConverterCard />
     </div>
   );
}

export default App;
