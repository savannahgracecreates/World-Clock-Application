function updateTime(){
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

//Mexico City
let mexicoCityElement = document.querySelector("#mexico-city");
let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
let mexicoCityTime = moment().tz("America/Mexico_City");

mexicoCityDateElement.innerHTML = mexicoCityTime.format("MMMM	Do YYYY");
mexicoCityTimeElement.innerHTML = mexicoCityTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
