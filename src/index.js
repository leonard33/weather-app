// css files here
import './style.css';

const appId = '8e08d85c43cbbcb562944120f30fb25d';

// query selectors
const cardconatiner = document.querySelector('.card-container');

// fetch api call
const getweather = async (city) => {
  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${appId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // weather data
      const cityname = data.name;
      const weathername = data.weather[0].main;
      const weathertemperature = data.main.temp;
      const weatherdescription = data.weather[0].description;
      const windspeed = data.wind.speed;
      const weatherhumidity = data.main.humidity;
      const weathervisibility = data.visibility;
      const weathericon = data.weather[0].icon;
      cardconatiner.innerHTML = `  <div class="card-1">
     <span>Weather Now</span>
   <form id="form-1">
   <input type="text" id="search" placeholder="search city">
   <a type="submit" id="submit"><i class="fa fa-search"></i></a>
 </form>
 <div class="city"><span>Weather in  ${cityname}</span></div>
 <div class="temperature"><span>Temperature: ${`${weathertemperature} `}<i class="fa fa-thermometer-empty" aria-hidden="true"></i>c</span></div>
 <div class="city"><span>Visibility ${weathervisibility}</span></div>
 <div class="humidity">Humidity ${weatherhumidity}%</div>
 <div class="description">${weatherdescription}</div>
 <div class="wind-speed">speed:${windspeed} km/hr</div>
</div>
<div class="card-2">
 <span>Weather for the day</span>
</div>`;
    });
};
getweather('tokyo');
