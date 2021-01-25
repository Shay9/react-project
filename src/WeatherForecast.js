import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";


export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

function handleForecast(response){
    setLoaded(true);
    setForecast(response.data);
}
if (loaded){
    return (
        <div className="weatherForecast">
        {Math.round(forecast.list[0].main.temp)}
         {Math.round(forecast.list[1].main.temp)}
          {Math.round(forecast.list[2].main.temp)}
        </div>
    );
}

else{
    let apiKey = `a35a6fc9aa256480d5ede5662dad54ec`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}`;
    axios.get(url).then(handleForecast);
    return null;
}
    
}