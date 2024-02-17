import React, { useState, useEffect } from 'react';
import './bootstrap.min.css'

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '8ac5c4d57ba6a4b3dfcf622700447b1e';

  useEffect(() => {
    if (city !== '') {
      fetchWeatherData();
    }
  }, [city]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
      `);

      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city name.');
      }

      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      setWeatherData(null);
      setError(error.message);
    }
  };

  return (
    <div className='container'>
      <div className='coco row'>
        <div className="col-lg-1"></div>
        <div style={{border:'solid 2px blue '}} className='c col-lg-10 p-3 mt-5'>
          <h1 >Weather App</h1>
          <input className='form-control' style={{ width: '50%' }}
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button style={{ border: 'none', color: 'white', fontWeight: '600' }} className='mt-3 rounded bg-primary p-2 ' onClick={fetchWeatherData}>Get Weather</button>


          {weatherData && (
            <div className='mt-2'>
              <h2>City : {weatherData.name}, </h2>
              <h2>Temperature: {weatherData.main.temp}°C</h2>
              <h2>Description: {weatherData.weather[0].description}</h2>
              <h2>Temperature Feels Like : {weatherData.main.feels_like}°C</h2>
              <h2> Minimum Temperature : {weatherData.main.temp_min}°C</h2>
              <h2>Maximum Temperature : {weatherData.main.temp_max}°C</h2>
              <h2>Country : {weatherData.sys.country}</h2>
              <h2>Wind Speed : {weatherData.wind.speed}</h2>
            </div>
          )}
          {error && <p>{error}</p>}
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default WeatherApp
