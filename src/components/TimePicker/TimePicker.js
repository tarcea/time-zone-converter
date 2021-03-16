import React, {useState} from 'react'
import {
    Combobox, ComboboxInput, ComboboxPopover, ComboboxList
} from "@reach/combobox"


export default function TimePicker(props) {
    const {dropDownTimes, defaultValue} = props
    const [value, setValue] = useState(defaultValue)
    const [dropDown, setDropdown] = useState(0) 


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
        else { setValue(e.target.value)
            console.log(value)
        }
        
    };

    const handleKeyPress = (e) => {
        console.log(e.key)
        if(e.key === "Enter") {
            console.log(e.target.value)
            setValue(e.target.value)
        }
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
                        {dropDownTimes}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}
