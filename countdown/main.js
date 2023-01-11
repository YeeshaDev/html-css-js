//setting the date to the countdown date
const countDownDate = new Date ("June 14,2022 15:17:25").getTime();

//for the time to update every one second.

let x = setInterval(function(){
    // this is to get today's date and time.
let today = new Date().getTime();

//now let's find the distance between today and the countdown date.

let distance = countDownDate - today;

// now let us calculate the days,hours,minutes and seconds.
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//This is to add zero behind every digits that is less than 10.

if(days < 10){
    days = "0" + days;
}
if(hours < 10){
    hours = "0" + hours;
}
if(minutes < 10){
    minutes = "0" + minutes;
}

if(seconds < 10){
    seconds = "0" + seconds;
}

//display the result in the elments of the days,hours,minutes seconds.
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
}, 1000);



