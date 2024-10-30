import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
           
            target="_blank"
            rel="noopener noreferrer"
          >
            Lungelo Jonas
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ljonasstu/react-weather-app-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
