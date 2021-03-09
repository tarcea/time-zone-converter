import React, { useState } from 'react'
import styles from './TimeZoneConverterCard.module.css';
import Clock from "../Clock/Clock";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


export default function TimeZoneConverterCard() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={styles.CardBackground}>
            <div className={styles.CardHeader}>
                <p className={styles.TitleText}>TIME ZONE CONVERTER</p>
                <Clock />
            </div>
            <div className={styles.formDiv}>
                <div>
                    <p className={styles.TimeZoneText}> My location time zone</p>
                </div>
                <div className={styles.CurrentTimeZone}>
                    <div className="formGroup">
                        <form className={styles.UserLocation}>
                            <input className={styles.LocationInput} type="text" name="userLocation" placeholder="Your location..." required></input>
                        </form>
                        <div className={styles.DateWeekTimeDiv}>
                            <div className={styles.leftInput}>
                                <DatePicker className={styles.DatePicker} selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                            <div className="middleInput">
                                <p>w. 11</p>
                            </div>
                            <div className="rightInput">
                                {new Date().toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                    
                <div>
                    <p className={styles.TimeZoneText}> Meeting location time zone</p>
                </div>
                <div className={styles.CurrentTimeZone}>
                    <div className="formGroup">
                        <form className={styles.UserLocation}>
                            <input className={styles.LocationInput} type="text" name="meetingLocation" placeholder="Remote location..." required></input>
                        </form>
                        <div className={styles.DateWeekTimeDiv}>
                            <div className={styles.leftInput}>
                                <DatePicker className={styles.DatePicker} selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                            <div className="middleInput">
                                <p>w. 11</p>
                            </div>
                            <div className="rightInput">
                                {new Date().toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
            </div>

            <div className={styles.CardFooter}>
                <FontAwesomeIcon icon={faCalendarAlt} className={styles.CalendarIcon} />
                <div>12</div>
                <div>24</div>


            </div>
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