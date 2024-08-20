import { useEffect, useState } from 'react';
import TopSection from './component/TopSection'
import MiddleSection from './component/MiddleSection'
import EndSection from './component/EndSection'
import './App.css'

function App() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [dayIndex, setDayIndex] = useState(0);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      fetchAndUpdateWeather(dayIndex);
    }
  }, [latitude, longitude, dayIndex]);

  const successCallback = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
  };

  const errorCallback = (error) => {
    console.error(`Error: ${error.message}`);
  };

  const getData = async () => {
    if (latitude === null || longitude === null) {
      console.error("Latitude or Longitude is not defined.");
      return null;
    }

    const url = `https://api.weatherapi.com/v1/forecast.json?key=eda8d98890214bab926190059241708&q=${latitude},${longitude}&days=3`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(response);
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };

  const fetchAndUpdateWeather = async (index) => {
    const data = await getData();
    if (data) {
      setWeatherData(data);
    }
  };

  const handleDayChange = (index) => {
    setDayIndex(index);
  };

  if (!weatherData) return <div>Loading...</div>;

  const date = new Date();
  date.setDate(date.getDate() + dayIndex);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = daysOfWeek[date.getDay()];

  const forecastData = weatherData.forecast.forecastday[Math.max(0, Math.min(dayIndex, 2))];
  let currentHour = date.getHours();
  const period = currentHour >= 12 ? 'PM' : 'AM';
  currentHour = currentHour % 12 || 12;

  return (
    <div className="container">
      <TopSection date={formattedDate} location={`${weatherData.location.name}, ${weatherData.location.country}`} temperature={`${Math.round(forecastData.day.avgtemp_c)}°C`} />
      <MiddleSection day={dayName} condition={forecastData.day.condition.text} />
      <EndSection dayChange={handleDayChange} currentHour={`${currentHour} ${period}`} temperature={`${Math.round(forecastData.day.avgtemp_c)}°C`} />
    </div>
  )
}

export default App
