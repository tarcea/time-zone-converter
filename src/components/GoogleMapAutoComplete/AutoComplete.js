import React, {useState} from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import scriptLoader from 'react-async-script-loader'

function AutoComplete({ isScriptLoaded, isScriptLoadSucceed}) {
    const [address, setAddress ] = useState("")

    const handleChange = (value) => {
        setAddress(value);
    }

    const handleSelect = (value) => {
        setAddress(value)
    }

    if (isScriptLoaded && isScriptLoadSucceed) {
        return <div>
            <PlacesAutocomplete value={address} onchange={handleChange} onSelect={handleSelect}>
                { ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input 
                                          {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
                        />
                    </div>
                )}

            </PlacesAutocomplete>
        </div>
    }
    return (
        <div>
            
        </div>
    )
}

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&libraries=places&callback=activatePleacesSearch"`])(AutoComplete);
