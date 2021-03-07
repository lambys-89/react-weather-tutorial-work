import React, {useState} from "react";
import {Row, Col} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ForecastDetails from "./ForecastDetails.js";
import WeatherIcon from "./WeatherIcon.js";
import Temperature from "./Temperature.js";


export default function FutureForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    function search() {
        const apiKey = "0cdc6d259e17cc7da434cf6b9a723f37";
        let futureApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(futureApiUrl).then(handleFutureResponse);
    }

    function handleFutureResponse(response) {
        console.log(response);
        setForecastData(response.data);
        setLoaded(true);
    }

    if(loaded && props.city === forecastData.city.name ) {
    return(
        <div>
            <Row>
                <ForecastDetails data={forecastData.list[0]} />
                <ForecastDetails data={forecastData.list[1]} />
                <ForecastDetails data={forecastData.list[2]} />
                <ForecastDetails data={forecastData.list[3]} />
                <ForecastDetails data={forecastData.list[4]} />
            </Row>
        </div>
    )
    } else {
        search();
        return null;
    }
}




