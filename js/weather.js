const weather = document.querySelector(".js-weather");
const API_key = "bf5d181c91ff391846ee49458b697889"
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&appid=${API_key}&units=metric`)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    const temperature = json.list[0].main.temp;
    console.log(temperature);
    const place = json.list[0].name;
    weather.innerText = `${temperature + '℃'} @ ${place}`;
  });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log(Error);
}

function askForCords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null) { 
    askForCords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();