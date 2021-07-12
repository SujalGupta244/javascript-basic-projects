const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday"
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021,06,21,8,30,0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10,11,30,0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
// month = months[month];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
// day = weekdays[day];

giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year}, ${hour}:${minutes}am`;
//////////////////////////////////////////////////////////////////////////////////////////////////
const futureTime = futureDate.getTime();
// console.log(futureTime)

function getRemainingTime(){
    const todayTime = new Date().getTime();
    const t = futureTime - todayTime;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = t / oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    // console.log(t)
    // console.log(days,hours)

    const values = [days, hours, minutes, seconds]

    function format(item){
        if(item < 10){
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach((item,index) =>{
        item.innerHTML = format(values[index]);
    })

    if(t < 0){
        clearInterval(countDown);
        deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired.</h4>`
    }

}

let countDown = setInterval(getRemainingTime,1000)

getRemainingTime()












