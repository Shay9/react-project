import React from "react";
import "./Weather.css";


export default function WeatherIcon(props) {
  return <img className="weather-image" src={props.code} alt={props.alt} />;
}