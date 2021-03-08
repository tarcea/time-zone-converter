import React from 'react'
import styles from './TimeZoneConverterCard.module.css';
import Clock from "../Clock/Clock";

export default function TimeZoneConverterCard() {
    return (
        <div className={styles.CardBackground}>
            <div className={styles.CardHeader}>
                <p className={styles.TitleText}>TIME ZONE CONVERTER</p>
                <Clock />
            </div>
            <div className={styles.CurrentTimeZone}></div>
            <div className={styles.MeetingTimeZone}></div>
            <div className={styles.CardFooter}></div>
        </div>
    )
}