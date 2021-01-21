import React, { useState } from "react";
import FormatDate from "./FormatDate"
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/cloudy.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000)
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a City..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary mycustombtn"
              />
            </div>
          </div>
        </form>
        <h1 className="city"> {weatherData.city}</h1>
        <div className="time">  <FormatDate date={weatherData.date} />PM </div>
        <ul className="Weather-description">
          <li className="text-capitalize">
            {" "}
            Description: {weatherData.description}
          </li>
          <li> Humidity: {weatherData.humidity}%</li>
          <li> Wind: {weatherData.wind}</li>
        </ul>
        <h2 className="temperature">
          {" "}
          {Math.round(weatherData.temperature)}°{" "}
        </h2>
        <span className="conversion"> C | F </span>
        <img
          src={weatherData.iconUrl}
          alt={weatherData.description}
          className="weather-image"
        />
      </div>
    );
  } else {
    const apiKey = "a35a6fc9aa256480d5ede5662dad54ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}