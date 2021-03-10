import React, { useState, useEffect } from 'react'
import styles from './Background.module.css';

export default function Background(props) {
    const { citiesArray } = props;
    const [cityIndex, setCityIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            changeBackgroundImageIndex()
        }, 8000);
        return () => clearInterval(interval);
    });

    //refactor into modulo 12
    const changeBackgroundImageIndex = () => {
        if (cityIndex <= 11) {
            setCityIndex(cityIndex + 1)
        } if (cityIndex === 12) {
            setCityIndex(0);
        }
    }

    const displayBackgroundImageAndBtn = (array) => {
        return (
            <>
                <img src={array[cityIndex].image} className={styles.BackgroundImages} alt={array[cityIndex].name}/>
                <a className={styles.cityLink} href={array[cityIndex].cityUrl} target="_blank" rel="noopener noreferrer"><button className={`${styles.cityButton} ${styles.Btn}`} >Discover {array[cityIndex].name}</button></a>
            </>
        )
    }

    return (
        <div className={styles.HomeBackgroundDiv}>
            {displayBackgroundImageAndBtn(citiesArray)}
        </div>
    )
}
