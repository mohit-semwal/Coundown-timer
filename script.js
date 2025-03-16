let Days = document.querySelector("#Days")
let Hours = document.querySelector("#Hours")
let Minutes = document.querySelector("#Minutes")
let Seconds = document.querySelector("#Seconds")
let Miliseconds = document.querySelector("#Miliseconds")

setInterval(()=>{
    let setDate = new Date("2024,8,15 12:00:00").getTime();
let currentDate = new Date().getTime();

let differece = setDate - currentDate;

let myDays = Math.floor(differece / (24 * 60 * 60 * 1000))
let myHour = Math.floor(differece % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))
let myMinutes = Math.floor(differece % (60 * 60 * 1000) / (60 * 1000))
let mySec = Math.floor(differece % (60 * 1000) / 1000);
let myMiliSec = Math.floor(differece % 1000)

Days.textContent = myDays
Hours.textContent = myHour
Minutes.textContent = myMinutes
Seconds.textContent = mySec
Miliseconds.textContent = myMiliSec

},10)






