import React, { useState } from 'react'
import './App.css';


function App() {
  let [inp, setInp] = useState('');
  let [weather, setWeather] = useState(null);

  function handleInp(e){
    setInp(e.target.value);
  }

  async function fetchData(){
    const APIkey = '1a802b639b1009d59f38009fd28d9a4e';
    const url = `https://api.openweathermap.org/data/2.5/weather?&q=${inp}&appid=${APIkey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
  }

  return (
    <div className='app-container'>
      <h1>Weather App using React</h1>
      <div className='input-group'>
        <input onChange={handleInp} type="text" placeholder='Enter a city...' value={inp}/>
        <button onClick={fetchData}>Search</button>
      </div>
      <hr />
      <div>
        {
          weather && weather.main ? (
            <div className='weather-card'>
              <h2>{weather.name}, {weather.sys.country}</h2>
              <h3>{Math.round(weather.main.temp)}°C</h3>
              <p>Min: {Math.round(weather.main.temp_min)}°C | Max: {Math.round(weather.main.temp_max)}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Condition: {weather.weather[0].main}</p>
            </div>
          ) : (
            weather && weather.message ? (
              <div className='weather-card'>
                <p>{weather.message}</p>
              </div>
            ) : (
              <div className='weather-card'>
                <p>No data available. Please search for a city.</p>
              </div>
              
            )
          )
        }
      </div>
    </div>
  )
}

export default App
