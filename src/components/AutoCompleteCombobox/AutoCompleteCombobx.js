import usePlacesAutocomplete from "use-places-autocomplete";
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

    const { placeholder, defaultValue } = props;

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
    } = usePlacesAutocomplete({defaultValue: defaultValue});
    

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = (val) => {
        setValue(val, false);
    };

    const handleClick = (e) => {
        if (e.target.value !== "") {
            e.target.value = "";
        }
    }


    const placeholderStyle = {
        width: "94%", 
        height: "40px", 
        float: "left", 
        padding: "0% 2%", 
        background: "transparent", 
        color: "#797979",
        fontWeight: "bold",
        border: "none",
        fontSize: "17px",
    }

    return (
        <Combobox onSelect={handleSelect} aria-labelledby="demo">
            <ComboboxInput
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder={placeholder}
                style={placeholderStyle} 
                onClick={handleClick}    
                />
                
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} style={{overflow: "hidden", height:"15px", paddingTop: "5px", paddingBottom: "5px", borderBottom: "1px solid #CDCDCD",}}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{color: "#CDCDCD", paddingRight: "5px"}}/>  <ComboboxOptionText />
                            </ComboboxOption>
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};

export default PlacesAutocomplete