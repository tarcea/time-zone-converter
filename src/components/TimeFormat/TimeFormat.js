import React, {useState} from 'react'
import styles from './TimeFormat.module.css';

export default function TimeFormat(props) {
    const [twelveHour, setTwelveHour] = useState({
        backgroundColor: "#cc4747",
        color: "white",
    });
    const [twentyFourHour, setTwentyFourHour] = useState({
        backgroundColor: "white",
        color: "#cc4747",
    })

    const {onTimeChange} = props

    const changeColor = (timeFormat) => {
        if (timeFormat === 12) {
            onTimeChange(12)
            if (twelveHour.color === "#cc4747"){
                setTwelveHour({
                    backgroundColor: "#cc4747",
                    color: "white",
                })
                setTwentyFourHour({
                    backgroundColor: "white",
                    color: "#cc4747",
                })
            }
        } else if( timeFormat === 24 ){
            onTimeChange(24)
            if( twentyFourHour.color === "#cc4747"){
                setTwentyFourHour({
                    backgroundColor: "#cc4747",
                    color: "white",
                })
                setTwelveHour({
                    backgroundColor: "white",
                    color: "#cc4747",
                })

            }
        }
    }


    return (
        <div>
            <button style={twelveHour} className={styles.TimeButton} onClick={(()=> {changeColor(12)})}>12</button>
            <button style={twentyFourHour} className={styles.TimeButton} onClick={(()=> {changeColor(24)})}>24</button>
        </div>
    )
}
