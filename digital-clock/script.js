// setinterval Repeatedly calls a function at specified intervals,with a time-delay between each calls.
setInterval(() =>{
const time = document.getElementById('time');
const currentTime = new Date();

// This gets the current hour(s),minutes and seconds of the day
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

let timeOfDay = "AM" 

//to set the time to less then 12 digits.it sets the time of the dayto morning(am) or noon/night(pm)
if(hours > 12){
    hours = hours - 12;
    timeOfDay = "PM"
}

// to set hours,minutes and seconds to have a zero behind the number if it is less than 10
if(hours < 10){
hours = "0" + hours;
}

if(minutes < 10){
    minutes = "0" + minutes;
}

if(seconds < 10){
    seconds = "0" + seconds;
}
//this is what should be displayed in the container i.e The current time of the day.
time.textContent = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;

});