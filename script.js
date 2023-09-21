let days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];
let date = new Date();
let day = days[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();
let currentTime = `${day} ${hours}:${minutes}`;
let li= document.querySelector("#date");
li.innerHTML = currentTime;


function showCity(event){
    event.preventDefault();
    let cityName = document.querySelector("#cityName").value;
let heading = document.querySelector("h1");
heading.textContent = cityName;
}
let form = document.querySelector("#searchForm");
form.addEventListener("submit", showCity);

