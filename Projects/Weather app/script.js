let temp = document.getElementById('temp');
let weather1 = document.getElementById('weather');
let picture = document.getElementById('pic')
let locationIcon = document.querySelector('.weather-icon');


function query() {
    temp.innerText = "";
    weather1.innerText = "";
    var searchbox = document.getElementById("input").value;
    getWeather(searchbox);
}

function getWeather(input) {
    
    console.log(input)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=25bc4be7dd264668bb44de353c450b2d`)
    .then(weather => {return weather.json();}).then(displayResults);
}

function displayResults (weather) {
  console.log(weather);
  country.innerText = weather.sys.country;
  temp.innerText = `${Math.round(weather.main.temp)}°c`;
  feel.innerText = `Feels like ${weather.main.feels_like}°c`;
  weather1.innerText = weather.weather[0].description;
  
  if ((weather.weather[0].main) == "Clouds") {
    document.body.style.backgroundColor = "DimGrey";
    document.getElementById("result").style.background = "grey";
    document.getElementById("button").style.background = "darkgrey";
  } 
  else if ((weather.weather[0].main) == "Clear") {
    document.body.style.backgroundColor = "#488AC7";
    document.getElementById("result").style.background = "skyblue";
    document.getElementById("button").style.background = "#5CB3FF";
  } 
  else if ((weather.weather[0].main) == "Rain") {
    document.body.style.backgroundColor = "#15317E";
    document.getElementById("result").style.background = "#2B65EC";
    document.getElementById("button").style.background = "#2B60DE";
  }
  else if ((weather.weather[0].main) == "Drizzle") {
    document.body.style.backgroundColor = "#646D7E";
    document.getElementById("result").style.background = "#98AFC7";
    document.getElementById("button").style.background = "#BCC6CC";
  }
  else if ((weather.weather[0].main) == "Snow") {
    document.body.style.backgroundColor = "#A6CBE7";
    document.getElementById("result").style.background = "#C3D2E2";
    document.getElementById("button").style.background = "#D1D0CE";
  }
  else if ((weather.weather[0].main) == "Atmosphere") {
    document.body.style.backgroundColor = "#C2B280";
    document.getElementById("result").style.background = "#B7D0E3";
    document.getElementById("button").style.background = "#FFEBCD";
  }
  else if ((weather.weather[0].main) == "Thunderstorm") {
    document.body.style.backgroundColor = "#2B3856";
    document.getElementById("result").style.background = "#FBB117";
    document.getElementById("button").style.background = "#2C3539";
  }
  
  
  const {icon} = weather.weather[0];
  locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
}
