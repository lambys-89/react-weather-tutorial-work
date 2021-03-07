import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Row} from 'react-bootstrap';
import background from "./media/01d-vid.mp4";
import './App.css';
import WeatherDetails from "./WeatherDetails.js";

function App() {

  let [readyToDisplay, setReadyToDisplay] = useState(false);
  let [defaultCity, setDefaultCity] = useState("");
  
  
 function cityWeatherForecast(event) {
    event.preventDefault();
    setReadyToDisplay(true);
  }

  function cityCapture(event) {
    setDefaultCity(event.target.value);
  }

  return(
    <div className="App">
      <header className="App-header">
        <h1 id="pageTitle">
          Weather Forecast
        </h1>
      </header>
      <main className="App-main">
      <video id="background-video"
        className="videoTag"
        autoPlay
        muted
        loop
        src={background}
      />
      {readyToDisplay===false && 
      <Form className="entry-form"> 
        <Row>
        <Form.Control
          className="city-input"
          placeholder="Enter City..."
          onChange={cityCapture}
        />
        </Row>
        <Row className="entry-search-but">
        <Button type="submit" className="mb-2 search-button" id="forecast-search-but" onClick={cityWeatherForecast} >Search</Button>
        </Row>
      </Form>}
      {readyToDisplay===true && <WeatherDetails userInput={defaultCity} />}
      </main>
      <footer className="App-footer">
        <p className="open-source-code">
          <a className="App-link" href="https://github.com/lambys-89/react-weather-tutorial-work/">
            Open-source code
          </a>{" "}
          by Sarah Lamb
        </p>
      </footer>
    </div>
  )

}

export default App;
