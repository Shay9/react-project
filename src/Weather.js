import React from "react";
import "./Weather.css"

export default function Weather(){
    return (
       <div className="Weather"> 
       
       <form>
           <div className="row">
            <div className="col-9">
                <input 
                type="Search" 
                Placeholder="Enter a City..." 
                className="form-control"
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
       <h1 className="city"> Toronto</h1>
       <div className="time">12:00 PM</div>
       <ul className="Weather-description">
       <li> Description: Snowing</li>
       <li> Humidity: 25%</li>
       <li> Wind: 12km/h</li>
       </ul>
       <h2 className="temperature"> 23° </h2> 
       <span className="conversion"> C | F </span>
       <div className="weather-image">  image on left</div>
       
       </div> 
    )
}
