import React from "react";
import "./WeatherForecastDisplay.css";

export default function WeatherForecastDisplay(props){
    function hours(){ 
       let date = new Date(props.data.dt*1000);
       let hours = date.getHours();
       return `${hours}:00`;
    }

    function temperature(){
        let temperature = Math.round(props.data.main.temp)
        return `${temperature}°C`

    }
    return(
        <div className="WeatherForecastDisplay col">
            <div className="forecastTime">
            {hours()}  
            </div> 
            {temperature()}
            </div>
    )
}