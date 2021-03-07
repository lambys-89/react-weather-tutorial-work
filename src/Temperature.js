import React, {useState} from "react";

export default function Temperature(props) {

    let [units, setUnits] = useState("celsius");
    let [currentTemp, setCurrentTemp] = useState(props.temp);
    let [feelsTemp, setFeelsTemp] = useState(props.feels);

    function changeToFar(event) {
        event.preventDefault();
        setUnits("farenheit");
        setCurrentTemp(Math.round((props.temp * 1.8)+32));
        setFeelsTemp((props.feels * 1.8)+32);
    }

    function changeToCel(event) {
        event.preventDefault();
        setUnits("celsius");
        setCurrentTemp(props.temp);
        setFeelsTemp(props.feels);
    }

    if(units === "celsius") {
    return (
        <div>
        <h2 className="current-header">Current Details °C|<a href="/" onClick={changeToFar}>°F</a></h2>
        <h3>Temperature: {Math.round(currentTemp)}°</h3>
        {/*<h3>Feels like: {Math.round(feelsTemp)}°C|<a href="/" onClick={changeToFar}>°F</a></h3>*/}
        </div>
    );
    } else {
    return (
        <div>
        <h2 className="current-header">Current Details <a href="/" onClick={changeToCel}>°C</a>|°F</h2>
        <h3>Temperature: {currentTemp}°</h3>
        {/*<h3>Feels like: {feelsTemp}<a href="/" onClick={changeToCel}>°C</a>|°F</h3>*/}
        </div>
    );
    }
}
