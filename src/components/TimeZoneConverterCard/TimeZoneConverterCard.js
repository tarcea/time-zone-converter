import React, { useState } from 'react'
import styles from './TimeZoneConverterCard.module.css';
import Clock from "../Clock/Clock";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


export default function TimeZoneConverterCard() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className={styles.CardBackground}>
            <div className={styles.CardHeader}>
                <p className={styles.TitleText}>TIME ZONE CONVERTER</p>
                <Clock />
            </div>
            <div className="form">
                <div className={styles.CurrentTimeZone}>
                    <div className="formGroup">
                        <div className="leftInput">
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        </div>
                        <div className="middleInput"></div>
                        <div className="rightInput">
                        </div>
                    </div>
                </div>

                
            </div>
            <div className={styles.CardFooter}></div>
        </div>
    )
}

/*
                    <div className={styles.MeetingTimeZone}>
                    <div className="formGroup">
                        <div className="leftInput">
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        </div>
                        <div className="middleInput"></div>
                        <div className="rightInput">
                        </div>
                    </div>
                </div>
*/