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
                 className="btn btn-primary"
                 />
            </div>
            </div>
       </form>
       <h1> Toronto</h1>
       <div>12:00 PM</div>
       <ul>
       <li> Description: Snowing</li>
       <li> Humidity: 25%</li>
       <li> Wind: 12km/h</li>
       </ul>
       <h1> 23° C</h1>
       <div> image on left</div>
       
       </div> 
    )
}
