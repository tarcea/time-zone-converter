import React from 'react'
import styles from './AutoCompleteCombobox.module.css'
import usePlacesAutocomplete, { getDetails } from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const PlacesAutocomplete = (props) => {
    
    const { placeholder, defaultValue, changeTime, inputBox } = props;
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
    } = usePlacesAutocomplete({ defaultValue: defaultValue });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = (val) => {
        setValue(val, false);
    };
    
      const handleDoubleClick = (e) => {
        e.target.value = '';
    }

    const handleComboboxOptionClick = () => {
        if (data.length > 0 ) {
            const parameter = {
                placeId: data[0].place_id,
                fields: ["utc_offset_minutes"],
            };
            getDetails(parameter)
                .then((details) => {
                    changeTime(details.utc_offset_minutes, inputBox)
               
                })
                .catch((error) => {
                    console.log("Error: ", error);
                })
        }
    };

    return (
        <Combobox onSelect={handleSelect} aria-labelledby="demo"  className='cityInput'>
            <ComboboxInput
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder={placeholder}
                className={styles.inputStyle}
                onDoubleClick={handleDoubleClick}
            />

            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} onClick={handleComboboxOptionClick} style={{ overflow: "hidden", height: "15px", paddingTop: "5px", paddingBottom: "5px", borderBottom: "1px solid #CDCDCD", }}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#CDCDCD", paddingRight: "5px" }} />  <ComboboxOptionText />
                            </ComboboxOption>
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};

export default PlacesAutocomplete;

        // if (e.target.value !== "") {
        //     e.target.value = "";
        //     }