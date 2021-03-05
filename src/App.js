import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/navbar"
import Clock from "./components/Clock/Clock.js"

function App() {
  const [ secondRatio, setSecondRatio ] = useState(0);
  const [ minuteRatio, setMinuteRatio ] = useState(0);
  const [ hourRatio, setHourRatio ] = useState(0);

useEffect(() => {
  setInterval(()=> {
    setClock()
  }, 1000);
});

  const setClock = () =>{
    let currentDate = new Date();
    let secondRatio = currentDate.getSeconds() * 60;
    let minuteRatio = currentDate.getMinutes() * 60;
    let hourRatio = currentDate.getHours() * 12 + currentDate.getMinutes() * (60 / 12);
    setSecondRatio(currentDate.getSeconds() / 60)
    setMinuteRatio(secondRatio + currentDate.getMinutes() / 60);
    setHourRatio(minuteRatio + currentDate.getHours() / 12);
  }    

   return (
     <div>
      <NavBar />
     <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
     </div>
   );
 

}

export default App;
