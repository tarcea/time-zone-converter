import React from 'react'
import {
    Combobox, ComboboxInput, ComboboxPopover, ComboboxList
} from "@reach/combobox"


export default function TimePicker(props) {

    const {dropDownTimes, defaultValue} = props

    return (
        <div>
            <Combobox aria-labelledby="demo" openOnFocus={true}>
                <ComboboxInput
                    value={defaultValue}
                    style={{color: "white", backgroundColor:"rgba(204, 71, 71, 0.9)", fontSize: "17px", fontWeight: "700", width: "80px", border:"none", background:"transparent",}}
                     />
                <ComboboxPopover>
                    <ComboboxList
                     
                      >
                        {dropDownTimes}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}
