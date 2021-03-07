import React, {useState} from "react";

export default function Temperature(props) {

    let [units, setUnits] = useState("celsius");
    let [currentTemp, setCurrentTemp] = useState(props.temp);

    function changeToFar(event) {
        event.preventDefault();
        setUnits("farenheit");
        setCurrentTemp(Math.round((props.temp * 1.8)+32));
    }

    function changeToCel(event) {
        event.preventDefault();
        setUnits("celsius");
        setCurrentTemp(props.temp);
    }

    if(units === "celsius") {
    return (
        <div>
        <h2 className="current-header">Current Details °C|<a href="/" onClick={changeToFar}>°F</a></h2>
        <h3>Temperature: {Math.round(currentTemp)}°</h3>
        </div>
    );
    } else {
    return (
        <div>
        <h2 className="current-header">Current Details <a href="/" onClick={changeToCel}>°C</a>|°F</h2>
        <h3>Temperature: {currentTemp}°</h3>
        </div>
    );
    }
}
