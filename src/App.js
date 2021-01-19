import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather"
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container"> 

      <h1>
      Weather App
      </h1>
      <Weather />
      <footer>
        This project was coded by <a 
        href="https://adoring-meninsky-e54200.netlify.app/"
        target="_blank"
        rel="noreferrer">
           Shadea Nance  </a> and is
      <a href="https://github.com/Shay9/react-project"
      target="_blank"
      rel="noreferrer"
      >
          {" "} open-sourced on GitHib
      </a>
      </footer>
      </div>
    </div>
  );
}


