import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo(props){
    return (
        <div className="Weatherinfo">
     <h1 className="city"> {props.data.city}</h1>
        <div className="time">  <FormatDate date={props.data.date} /> </div>
        <ul className="Weather-description">
          <li className="text-capitalize">
            {" "}
            Description: {props.data.description}
          </li>
          <li> Humidity: {props.data.humidity}%</li>
          <li> Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
        <WeatherTemperature celcius={props.data.temperature} />
        <WeatherIcon code={props.data.icon} alt={props.data.description} />       
        
          </div>
    );
}