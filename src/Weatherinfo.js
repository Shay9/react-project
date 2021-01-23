import React from "react";
import FormatDate from "./FormatDate"

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
          <li> Wind: {props.data.wind}</li>
        </ul>
        <h2 className="temperature">
          {" "}
          {Math.round(props.data.temperature)}°{" "}
        </h2>
        <span className="conversion"> C | F </span>
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="weather-image"/>
          </div>
    );
}