import React from 'react'
import {
    Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, ComboboxOptionText
} from "@reach/combobox"


export default function TimePicker(props) {

    const {dropDownTimes, defaultValue} = props

    return (
        <div>
            <Combobox aria-labelledby="demo" openOnFocus={true}>
                <ComboboxInput
                    value={defaultValue}
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
