import React from "react";
import WeatherInfo from "./WeatherInfo";

export default function WeatherIcon(props){
return(
    <img 
          src="`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`"
          
          alt={props.alt} />
    
);

}