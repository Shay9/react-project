import React, {useState} from "react";
import WeatherForecastDisplay from "./WeatherForecastDisplay";
import axios from "axios";



export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

function handleForecast(response){
    setForecast(response.data);
    setLoaded(true);
}
if (loaded && props.city === forecast.city.name){
    return (
        <div className="weatherForecast row">
                <WeatherForecastDisplay data={forecast.list[0]} />
                <WeatherForecastDisplay data={forecast.list[1]} />
                <WeatherForecastDisplay data={forecast.list[2]} />
                <WeatherForecastDisplay data={forecast.list[3]} />
                <WeatherForecastDisplay data={forecast.list[4]} />
                
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