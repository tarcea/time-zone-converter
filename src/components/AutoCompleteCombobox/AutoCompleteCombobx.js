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

    const { placeholder, defaultValue } = props;
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
        // window.localStorage.selectedCity = val.split(",")[0];

    };

    const handleComboboxOptionClick = (e) => {
        // if (e.target.value !== "") {
        //     e.target.value = "";
        //     }
        if (data.length > 0 ) {
            const parameter = {
                placeId: data[0].place_id,
                fields: ["utc_offset_minutes"],
            };

            getDetails(parameter)
                .then((details) => {
                    console.log("Details: ", details)
                })
                .catch((error) => {
                    console.log("Error: ", error);
                })
        }
    };

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