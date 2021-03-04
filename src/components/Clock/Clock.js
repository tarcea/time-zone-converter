import React from 'react';
import styles from './Clock.module.css';

const Clock = ({hourRatio, minuteRatio, secondRatio}) => (
  <div className={styles.Clock}>
     <div className="hour-hand" style={{transform: `rotate(${hourRatio * 360}deg)`}}></div>
      <div className="minute-hand"style={{transform: `rotate(${minuteRatio * 360}deg)`}}></div>
      <div className="second-hand"style={{transform: `rotate(${secondRatio * 360}deg)`}}></div>
      <div className="pin"></div>
  </div>
);

Clock.propTypes = {};

Clock.defaultProps = {};

export default Clock;
