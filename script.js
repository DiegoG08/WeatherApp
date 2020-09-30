

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response)=> {
    console.log(response);
    return response.json();
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((response) => {
    console.log(response);
    showWeatherData(response);
  }).catch((error) => {
    console.log(error);
  })

}

showWeatherData = (weatherData) => {
  console.log(weatherData.name);
  document.getElementById('city-name').innerHTML=weatherData.name;
  document.getElementById('weather-type').innerHTML=weatherData.weather[0].main;
  document.getElementById('temp').innerHTML=weatherData.main.temp;
  document.getElementById('min-temp').innerHTML=weatherData.main.temp_min;
  document.getElementById('max-temp').innerHTML=weatherData.main.temp_max;


  
}

