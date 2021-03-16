import React, {useState} from 'react'
import {
    Combobox, ComboboxInput, ComboboxPopover, ComboboxList
} from "@reach/combobox"


export default function TimePicker(props) {
    const {dropDownTimes, defaultValue} = props
    const [value, setValue] = useState(defaultValue)


    const handleDropdownClick = (e) => {
        console.log("hello")
        setValue(e.target.value)
    }

    return (
        <div>
            <Combobox aria-labelledby="demo" openOnFocus={true}>
                <ComboboxInput
                    value={value}
                    style={{color: "white", backgroundColor:"rgba(204, 71, 71, 0.9)", fontSize: "17px", fontWeight: "700", width: "80px", border:"none", background:"transparent",}}
                    placeholder="MM: HH"
                    
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
