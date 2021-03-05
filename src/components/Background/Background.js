import React, { useState, useEffect } from 'react'

export default function Background(props) {
    const { citiesArray } = props;
    const [ cityIndex, setCityIndex ] = useState(0)

  useEffect(() => {
    setInterval(()=> {
        changeBackgroundImageIndex()
  }, 16000);
}, );
    
    const changeBackgroundImageIndex = () => {
        if ( cityIndex <= 12 ) {
            setCityIndex( cityIndex + 1 )
        } if (cityIndex === 13) {
            setCityIndex(0);
        }
    }

    const displayBackgroundImageAndBtn = (array) => {
        return (
            console.log(array)
                // <img {array[cityIndex].image} />
                // <button>{array[cityIndex].name}</button>
        )
    }

    return (
        <div>
            {displayBackgroundImageAndBtn(citiesArray)}
        </div>
    )
}
