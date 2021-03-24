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
    const [oldValue, setOldValue] = useState(localTime)
    // var formatTime = function (time) {
    //     var hours = Number(time.substring(0,2));
    //     var minutes = Number(time.substring(3,5));
    //     var amPm = time.substring(6,8).toLowerCase();

    //     if(amPm === "pm" && hours < 12) {
    //         hours = hours+12;
    //     } else if(amPm === "am" && hours === 12) {
    //         hours = hours-12;
    //     }

    //     if(hours<10) { hours = "0" + hours; }
    //     if(minutes<10) { minutes = "0" + minutes; }

    //     return hours + ":" + minutes;
    // };


    const handleClick = (e) => {
        //    console.log(e.target.value, "input value")
        if (e.target.value) {
            setOldValue(e.target.value)
        }
        //    console.log(oldTime, "oldTime before change")
        //    setOldTime(e.target.value)
        //    console.log(oldTime, "oldTime after change")
    
        }

        const _handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                console.log(getHours(getMinutes(oldValue)))
                setDestinationTime(e.target.value)
            }
        }
    
    
    
        const _handleKeyDown2 = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                destinationTime(e.target.value)
            }
        }
    function getMinutes (string) {
        if (string) {
            let timeString =  string.split(':');
            let h = Number(timeString[0]);
            let m = Number(timeString[1].split(' ')[0]);
            let minutes = (h * 60) + m;
            return minutes;
        }
       
    }

    function getHours (minutes) {
        let h = minutes % 24;
        let m = minutes % 60;
        return `${h}:${m}`;
    }

    var recalculateLocal = function (value) {
        let remoteM = getMinutes(destinationTime);
        let localM = getMinutes(localTime);
        let oldVal = getMinutes(value);
        let result = ((oldVal - remoteM) + localM) 
        
        console.log(remoteM)
        console.log(localM)
        console.log(oldVal)   
        console.log(result)

    };
    
    recalculateLocal();

    // var recalculateRemote = function () {
    //     timeFormat = formatTime($("#localTimeInput").val());
    //     $input = $("#localDateInput").val() + " " + timeFormat;
    //     localTime = moment.tz($input, $localTimezone);
    //     remoteTime = localTime.clone().tz($remoteTimezone);

    //     $("#remoteDateInput").val(remoteTime.format($dateFormat));
    //     $("#remoteWeekOutput").val("w. " + remoteTime.week());
    //     $("#localWeekOutput").val("w. " + localTime.week());

    //     if (format12) {
    //         $("#remoteTimeInput").val(remoteTime.format($timeFormat12));
    //     } else {
    //         $("#remoteTimeInput").val(remoteTime.format($timeFormat24));
    //     }
    // };

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
    
    
    const handleInput2 = (e) => {
        setDestinationTime(e.target.value)
    }

    const handleDoubleClick = (e) => {
        setlocalTime("")
    }
  


    const handleDoubleClick2 = (e) => {
        setDestinationTime("")
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
                                    onKeyDown={_handleKeyDown}
                                    onClick={handleClick}
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
                                    onChange={handleInput2}
                                    className={styles.TimeInput}
                                    onDoubleClick={handleDoubleClick2}
                                    onKeyDown={_handleKeyDown2}
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