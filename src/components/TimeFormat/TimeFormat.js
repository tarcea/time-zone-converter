import React, {useState} from 'react'
import styles from './TimeFormat.module.css';

export default function TimeFormat() {
    const [twelveHour, setTwelveHour] = useState({
        backgroundColor: "#cc4747",
        color: "white",
        active: true,
    });
    const [twentyFourHour, setTwentyFourHour] = useState({
        backgroundColor: "white",
        color: "#cc4747",
        active: false,
    })


    const changeColor = (timeFormat) => {
        if (timeFormat === 12) {
            console.log(twelveHour.backgrounPlacesAutocompletedColor)
            console.log(twentyFourHour.backgroundColor.typeof)
            if (twelveHour.color === "#cc4747"){
                setTwelveHour({
                    backgroundColor: "#cc4747",
                    color: "white",
                    active: true,
                })
                setTwentyFourHour({
                    backgroundColor: "white",
                    color: "#cc4747",
                    active: false,
                })
            }
        } else if( timeFormat === 24 ){
            if( twentyFourHour.color === "#cc4747"){
                setTwentyFourHour({
                    backgroundColor: "#cc4747",
                    color: "white",
                    active: true,
                })
                setTwelveHour({
                    backgroundColor: "white",
                    color: "#cc4747",
                    active: false,
                })

            }
        }
    }


    return (
        <div>
            <button style={twelveHour} className={styles.TimeButton} onClick={(()=> {changeColor(12)})} active={twelveHour.active}>12</button>
            <button style={twentyFourHour} className={styles.TimeButton} onClick={(()=> {changeColor(24)})}>24</button>
        </div>
    )
}
