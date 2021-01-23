import React, {useState} from "react";

export default function WeatherTemperature(props){
   const [unit, setUnit] = useState(`celcius`)

   function convertToFarenheit(event){
       event.preventDefault();
       setUnit("farenheit");

   }

   function convertToCelcius(event){
    event.preventDefault();
    setUnit("celcius");
   }

   if (unit === `celcius`){
    return(
   <span className="WeatherTemperature">
    <h2 className="temperature">
          {" "}
          {Math.round(props.celcius)}°{" "}
        </h2>
        <span className="conversion"> 
        C | {" "}
         <a href="/" onClick={convertToFarenheit}> 
        F 
        </a>  
        </span>

    </span>
   );
   }
   else{
       let farenheit = (props.celcius * 9) /5 + 32 

    return(
    <span className="WeatherTemperature">
    <h2 className="temperature">
          {" "}
          {Math.round(farenheit)}°{" "}
        </h2>
        <span className="conversion"> 
        <a href="/" onClick={convertToCelcius}>
        C 
        </a>{" "}
       | F   
        </span>
        </span>
    );
       
   }
  
}