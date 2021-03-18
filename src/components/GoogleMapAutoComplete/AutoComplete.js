import React, { useState } from 'react'
import PlacesAutocomplete, {getGeocode, getLatLng} from 'react-places-autocomplete';

function AutoComplete() {
    const [address, setAddress] = useState("")

    const handleChange = (value) => {
        setAddress(value);
    }

    const handleSelect = (value) => {
        setAddress(value)
    }
    

        return <div>
            <PlacesAutocomplete value={address} onchange={handleChange} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                            })}
                        />
                        <div>
                            {suggestions.map((suggestion) => {
                                const style = suggestion.active ?
                                    { backgroundColor: "#a83232", cursor: "pointer" } :
                                    { backgroundColor: "#ffffff", cursor: "pointer" }

                                return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

            </PlacesAutocomplete>
        </div>
}

export default AutoComplete;
