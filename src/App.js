import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./media/01d-vid.mp4";
import './App.css';

function App() {

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
