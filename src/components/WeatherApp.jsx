import { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = () => {
    if (!city) return;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=043c51d5d245a75d77720a6c99b19452&units=metric`)
      .then(res => {
        setWeather(res.data);
        setError('');
      })
      .catch(() => setError('City not found'));
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" className="form-control my-2" />
      <button className="btn btn-primary" onClick={fetchWeather}>Get Weather</button>
      {error && <p className="text-danger mt-2">{error}</p>}
      {weather && (
        <div className="mt-3">
          <h4>{weather.name}</h4>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;