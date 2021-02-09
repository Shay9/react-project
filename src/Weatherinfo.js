import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";



export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="row mt-3">
        <div className="col">
          <h1 className="city"> {props.data.city}</h1>
        </div>
        <div className="col">
          <div className="time">
            {" "}
            <FormatDate date={props.data.date} />{" "}
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <ul className="Weather-description">
            <li className="text-capitalize">
              {" "}
              Description: {props.data.description}
            </li>
            <li> Humidity: {props.data.humidity}%</li>
            <li> Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <div className="row no-gutters w-100 text-right">
            <div className="col-8">
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
            <div className="col-4">
              <WeatherIcon
                code={props.data.iconUrl}
                alt={props.data.description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}