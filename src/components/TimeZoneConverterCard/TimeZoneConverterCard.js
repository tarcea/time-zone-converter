import React, { useState } from 'react'
import styles from './TimeZoneConverterCard.module.css';
import Clock from "../Clock/Clock";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import * as moment from 'moment';
import PlacesAutocomplete from '../AutoCompleteCombobox/AutoCompleteCombobx'

export default function TimeZoneConverterCard() {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [week, setWeek] = useState(`w. ${parseInt(moment(new Date()).format("W")) + 1}`);
    const [week2, setWeek2] = useState(`w. ${parseInt(moment(new Date()).format("W")) + 1}`);

    function getData (data) {
        const w = moment(data).format("W");
        setWeek(`w. ${parseInt(w) + 1}`);
        setStartDate(data);
    }
    
    function getData2 (data) {
        const w = moment(data).format("W");
        setWeek2(`w. ${parseInt(w) + 1}`);
        setStartDate2(data);
    }

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
                            <PlacesAutocomplete placeholder={"Your location ..."} />
                        </form>
                        <div className={styles.DateWeekTimeDiv}>
                            <div className={styles.leftInput}>
                                <DatePicker className={styles.DatePicker} selected={startDate} onChange={date => getData(date)}/>
                            </div>
                            <div className="middleInput">
                                <input type="text" readOnly placeholder={week}/>
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
                            <PlacesAutocomplete placeholder={"Remote location..."}/>
                        </form>
                        <div className={styles.DateWeekTimeDiv}>
                            <div className={styles.leftInput}>
                                <DatePicker className={styles.DatePicker} selected={startDate2} onChange={date => getData2(date)} />
                            </div>
                            <div className="middleInput">
                                <input type="text" readOnly placeholder={week2}/>
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