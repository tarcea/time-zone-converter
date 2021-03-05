import React from 'react'

export default function Background() {

    const shuffleArray = array => {
        for (let i= array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
      console.log(shuffleArray(["a","b","c"]))

    return (
        <div>
           {shuffleArray([1,2,3])}
        </div>
    )
}
