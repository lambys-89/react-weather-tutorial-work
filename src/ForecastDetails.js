import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDetails(props) {

return(
            <div xs={12} sm={3} className="weather-forecast-sections col">
                <h2 className="forecast">{new Date(props.data.dt * 1000).getHours()}:00</h2>
                <WeatherIcon iconCode = {props.data.weather[0].icon} />
                <h2 className="forecast">{Math.round(props.data.main.temp_min)}°C/{Math.round(props.data.main.temp_max)}°C</h2>
            </div>
);

}