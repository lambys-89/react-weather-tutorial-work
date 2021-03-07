import React, {useState} from "react";

export default function Temperature(props) {

    let [units, setUnits] = useState("celsius");
    let [currentTemp, setCurrentTemp] = useState(props.temp);
    let [feelsTemp, setFeelsTemp] = useState(props.feels);

    function changeToFar(event) {
        event.preventDefault();
        setUnits("farenheit");
        setCurrentTemp((props.temp * 1.8)+32);
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
        <h3>Currently: {Math.round(currentTemp)}°C|<a href="/" onClick={changeToFar}>°F</a></h3>
        <h3>Feels like: {Math.round(feelsTemp)}°C|<a href="/" onClick={changeToFar}>°F</a></h3>
        </div>
    );
    } else {
    return (
        <div>
        <h3>Currently: {currentTemp}<a href="/" onClick={changeToCel}>°C</a>|°F</h3>
        <h3>Feels like: {feelsTemp}<a href="/" onClick={changeToCel}>°C</a>|°F</h3>
        </div>
    );
    }
}
