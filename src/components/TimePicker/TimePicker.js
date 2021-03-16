import React, {useState} from 'react'
import {
    Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption
} from "@reach/combobox"
import { DateTime } from "luxon";


export default function TimePicker(props) {
    const {dropDownTimes, defaultValue} = props
    const [value, setValue] = useState(defaultValue)
    const [dropDown, setDropdown] = useState(0) 
    const [times, setTimes] = useState(DateTime.fromObject({zone: "Europe/Stockholm"}).setLocale('en-US').toLocaleString(DateTime.TIME_SIMPLE))


    const handleDropdownClick = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const handleClick = (e) => {
        if(dropDown === 0){
            setValue(e.target.value)
            setDropdown(1)
        }
        if(dropDown === 1)
        setValue("")
    }

    const handleInput = (e) => {
        
        if(e.key === "Enter") {
            setValue(e.target.value)
        }
        else { 
            setValue(e.target.value)
        }
        
    };

    const handleKeyPress = (e) => {
        console.log(e.key)
        if(e.key === "Enter") {
            console.log(e.target.value)
            setValue(e.target.value)
        }
    }

    const hoursArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

    const timeDropDown = () => { 
       const dropDownOptions = hoursArray.map((nextHour, index)=> {
             const nextTime = (DateTime.fromObject({zone: "Europe/Stockholm"}).plus({hours: nextHour }).setLocale('en-US').toLocaleString(DateTime.TIME_SIMPLE))
             return (
                <ComboboxOption value={nextTime} key={index} />
             )
        })
        return dropDownOptions
    }

    
    return (
        <div>
            <Combobox aria-labelledby="demo" openOnFocus={true}>
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    style={{color: "white", backgroundColor:"rgba(204, 71, 71, 0.9)", fontSize: "17px", fontWeight: "700", width: "80px", border:"none", background:"transparent",}}
                    placeholder="MM: HH"
                    onClick={handleClick}
                    onKeyPress={handleKeyPress}
                    
                    
                     />
                <ComboboxPopover>
                    <ComboboxList
                     onClick={(e)=> handleDropdownClick(e)}
                      >
                        {timeDropDown()}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}
