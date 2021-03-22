import React, { useState } from 'react'
import styles from './TimeZoneConverterCard.module.css';
import Clock from "../Clock/Clock";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import * as moment from 'moment';
import PlacesAutocomplete from '../AutoCompleteCombobox/AutoCompleteCombobx'
import { DateTime } from "luxon";
import TimeFormat from '../TimeFormat/TimeFormat'

export default function TimeZoneConverterCard() {
    const [startDate, setStartDate] = useState(new Date());
    const [localTime, setlocalTime] = useState(DateTime.fromObject({zone: "Europe/Stockholm"}).setLocale('en-US').toLocaleString(DateTime.TIME_SIMPLE))
    const [destinationTime, setDestinationTime] = useState(DateTime.fromObject({zone: "Europe/Stockholm"}).setLocale('en-US').toLocaleString(DateTime.TIME_SIMPLE))
    const [startDate2, setStartDate2] = useState(new Date());
    const [week, setWeek] = useState(`w. ${parseInt(moment(new Date()).format("W")) + 1}`);
    const [week2, setWeek2] = useState(`w. ${parseInt(moment(new Date()).format("W")) + 1}`);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setlocalTime(e.target.value)
    }

    const handleInput = (e) => {
        setlocalTime(e.target.value)
    }
    

    const handleDoubleClick = (e) => {
        setlocalTime("0:0 AM")
    }

    const handleDoubleClick2 = (e) => {
        setDestinationTime("0:0 AM")
    }

    const convertTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
            return `${hours}:${minutes}`;
        }

    const convertTime24to12= (time12h) => {
        let hourEnd = time12h.indexOf(":");
        let H = +time12h.substr(0, hourEnd);
        let h = H % 12 || 12;
        let ampm = (H < 12 || H === 24) ? "AM" : "PM";
        return `${h + time12h.substr(hourEnd, 3)} ${ampm}`;
    }
    
    const changeDefaultTime = (timeFormat) => {
        if(timeFormat === 12){
            setlocalTime(convertTime24to12(localTime))
            setDestinationTime(convertTime24to12(destinationTime))
        }else if(timeFormat === 24){
            setlocalTime(convertTime12to24(localTime))
            setDestinationTime(convertTime12to24(destinationTime))
        }
    }

    const changeToLocalTime = (offset, inputBox) => {
        if(inputBox === "local"){
            setlocalTime((DateTime.utc().plus({minutes: offset}).setLocale('en-US').toLocaleString(DateTime.TIME_SIMPLE)))
        }
        if (inputBox === "destination"){
            setDestinationTime((DateTime.utc().plus({minutes: offset}).setLocale('en-US').toLocaleString(DateTime.TIME_SIMPLE)))
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
                            <PlacesAutocomplete placeholder={"Your location ..."} defaultValue={"Stockholm"} changeTime={changeToLocalTime} inputBox={"local"} />
                        </form>
                        <div className={styles.DateWeekTimeDiv}>
                            <div className={styles.leftInput}>
                                <DatePicker  selected={startDate} onChange={date => getData(date)}
                                    dateFormat="yyyy-MM-dd"
                                    showWeekNumbers
                                    className={styles.DatePicker}
                                    placeholderText="yyyy-mm-dd"
                                     />
                                
                            </div>
                            <div className="middleInput">
                                <input type="text" readOnly placeholder={week} />
                            </div>
                            <div className="rightInput">


                            <form onSubmit={handleSubmit}>
                                <input type="text" 
                                    placeholder="MM:HH" 
                                    value={localTime} 
                                    onChange={handleInput}
                                    className={styles.TimeInput}
                                    onDoubleClick={handleDoubleClick}
                                    >
                                </input>
                            </form>

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
                            <PlacesAutocomplete placeholder={"Remote location..."} defaultValue={"Stockholm, Sweden, Globuzzer"} changeTime={changeToLocalTime} inputBox={"destination"} />
                        </form>
                        <div className={styles.DateWeekTimeDiv}>
                            <div className={styles.leftInput}>
                                <DatePicker className={styles.DatePicker} selected={startDate2} onChange={date => getData2(date)} 
                                    dateFormat="yyyy-MM-dd"
                                    showWeekNumbers
                                    placeholderText="yyyy-mm-dd"
                                />
                            </div>
                            <div className="middleInput">
                                <input type="text" readOnly placeholder={week2} className={styles.TimeInput}/>
                            </div>
                            <div className="rightInput">
                            
                            <form onSubmit={handleSubmit}>
                                <input type="text" 
                                    placeholder="MM:HH" 
                                    value={destinationTime} 
                                    onChange={handleInput}
                                    className={styles.TimeInput}
                                    onDoubleClick={handleDoubleClick2}
                                    >
                                </input>
                            </form>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
            </div>

            <div className={styles.CardFooter}>
                {/* <FontAwesomeIcon icon={faCalendarAlt} className={styles.CalendarIcon} /> */}
                <div className={styles.timeButtonsDiv}>
                    <TimeFormat onTimeChange={changeDefaultTime}/>
                </div>
            </div>
        </div>
    )
}