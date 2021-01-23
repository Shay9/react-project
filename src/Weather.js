import React, { useState } from "react";
import Weatherinfo from "./Weatherinfo"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
   const[city, setCity] = useState(props.defaultCity)
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

    function search(){
    const apiKey = "a35a6fc9aa256480d5ede5662dad54ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event){
        event.preventDefault();
        search();

    }

    function handleCityChange(event){
    setCity(event.target.value);
    

    }


  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a City..."
                className="form-control"
                onChange={handleCityChange}
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
        <Weatherinfo data={weatherData} />
       
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}