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


    function getData(data) {
        const w = moment(data).format("W");
        setWeek(`w. ${parseInt(w) + 1}`);
        setStartDate(data);
    }

    function getData2(data) {
        const w = moment(data).format("W");
        setWeek2(`w. ${parseInt(w) + 1}`);
        setStartDate2(data);
    }

    const changeColor = (timeFormat) => {
        if (timeFormat === 12) {
            console.log(twelveHour.backgroundColor)
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
                            <PlacesAutocomplete placeholder={"Your location ..."} defaultValue={"Stockholm"}/>
                        </form>
                        <div className={styles.DateWeekTimeDiv}>
                            <div className={styles.leftInput}>
                                <DatePicker  selected={startDate} onChange={date => getData(date)}
                                    dateFormat="yyyy-MM-dd"
                                    showWeekNumbers
                                    className={styles.DatePicker}
                                     />
                                
                            </div>
                            <div className="middleInput">
                                <input type="text" readOnly placeholder={week} />
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
                            <PlacesAutocomplete placeholder={"Remote location..."} defaultValue={"Stockholm, Sweden, Globuzzer"} />
                        </form>
                        <div className={styles.DateWeekTimeDiv}>
                            <div className={styles.leftInput}>
                                <DatePicker className={styles.DatePicker} selected={startDate2} onChange={date => getData2(date)} 
                                    dateFormat="yyyy-MM-dd"
                                    showWeekNumbers
                                />
                            </div>
                            <div className="middleInput">
                                <input type="text" readOnly placeholder={week2} />
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
                <div className={styles.timeButtonsDiv}>
                    <button style={twelveHour} className={styles.TimeButton} onClick={(()=> {changeColor(12)})} active={twelveHour.active}>12</button>
                    <button style={twentyFourHour} className={styles.TimeButton} onClick={(()=> {changeColor(24)})}>24</button>
                </div>


            </div>
        </div>
    )
}

// className={styles.DatePicker}