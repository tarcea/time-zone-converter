import React, { Component } from "react";
import './App.css';
import NavBar from "./components/navbar"
import Clock from "./components/Clock/Clock.js"

class App extends Component {

  state = {
   secondRatio: 0,
   minuteRatio: 0,
   hourRatio: 0
 }
 
componentDidMount () {
  setInterval(() => {
    this.setClock()
  }, 1000);
}

  setClock = () =>{
    let currentDate = new Date;
    let secondRatio = currentDate.getSeconds() * 60;
    let minuteRatio = currentDate.getMinutes() * 60;
    let hourRatio = currentDate.getHours() * 12 + currentDate.getMinutes() * (60 / 12);
    this.setState({secondRatio: secondRatio = currentDate.getSeconds() / 60}) 
    this.setState({minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60}) 
    this.setState({hourRatio:hourRatio = (minuteRatio + currentDate.getHours()) / 12});
  }    

 render(){
   const {secondRatio, minuteRatio, hourRatio} = this.state
   return (
     <div>
      <NavBar />
     <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
     </div>
   );
 }

}

export default App;
