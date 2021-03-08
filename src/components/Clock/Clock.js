import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

const Clock = () => {
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
    setSecondRatio(currentDate.getSeconds() / 60)
    setMinuteRatio(secondRatio + currentDate.getMinutes() / 60);
    setHourRatio(minuteRatio + currentDate.getHours() / 12);
  } 

    return(
      <div className={styles.Clock}>
     <div className="hour-hand" style={{transform: `rotate(${hourRatio * 360}deg)`}}></div>
      <div className="minute-hand"style={{transform: `rotate(${minuteRatio * 360}deg)`}}></div>
      <div className="second-hand"style={{transform: `rotate(${secondRatio * 360}deg)`}}></div>
      <div className="pin"></div>
  </div>
  )   
};

Clock.propTypes = {};

Clock.defaultProps = {};

export default Clock;
