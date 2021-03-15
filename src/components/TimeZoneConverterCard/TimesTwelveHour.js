
// const date = new Date();

// const dates = [];


// const hour = date.getHours()
// const minutes = date.getMinutes()

// console.log(hour);

// const currentTime = `${hour} : ${minutes}`
// console.log(currentTime)

// const returnHour = (format, hour) => {
//     if (format === 12){
//         if (hour < 10) {
//             return `${0}${hour12}`
//         } else if (hour <= 12){
//             return hour;
//         } else if (hour > 12) {
//             return hour - 12
//         }
//     } else if (format === 24 ){
//         return hour;
//     }
// }

// const returnMinute = (minute, format) => {
//     if (minute < 10){
//         return `${0}${minute}`
//     } else if (minute >= 10 ) {
//         return minute;
//     }
// }

// console.log(returnHour(12, hour))
// console.log(returnMinute(minutes))

// const getFormattedTime = (hour, min, format) => {
//     console.log(`${hour}:${min}`)
// }

// console.log(getFormattedTime(returnHour(12, hour), returnMinute(minutes, 12 )))

const stockholmDate = ((new Date).toLocaleString([], {hour:'2-digit', minute:'2-digit', hour12: true, timeZone: "Europe/Stockholm"}))
console.log(stockholmDate)
