import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Row, Col} from 'react-bootstrap';
import background from "./media/01d-vid.mp4";
import './App.css';
import WeatherDetails from "./WeatherDetails.js";

function App() {

  let [readyToDisplay, setReadyToDisplay] = useState(false);
  let [searchType, setSearchType] = useState("start");
  let [defaultCity, setDefaultCity] = useState("");
  
  
 function cityWeatherForecast(event) {
    event.preventDefault();
    setSearchType("city-forecast-view");
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
      <Form>
      <Row className="forecast-header">
          <Col xs={12} sm={12} className="forecast-header-search">
              <Form.Control
                className="input"
                id="forecast-searchbox"
                placeholder="Enter City..."
                onChange={cityCapture}
              />
              <Button type="submit" className="mb-2" id="forecast-search-but" onClick={cityWeatherForecast} >Submit</Button>
              <Button type="submit" className="mb-2" id="forecast-location-but" >📌</Button>
          </Col>
      </Row>
  </Form>}
      {readyToDisplay===true && <WeatherDetails userInput={defaultCity} type={searchType} />}
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
