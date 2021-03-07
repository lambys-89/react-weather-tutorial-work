import React from "react";
import WeatherIcon from "./WeatherIcon";
import {Row, Col} from 'react-bootstrap';

export default function ForecastDetails(props) {

return(
    <div>
        <Row>
            <Col xs={6} sm={3} >
                {new Date(props.data.dt * 1000).getHours()}:00
                <WeatherIcon iconCode = {props.data.weather[0].icon} />
                {Math.round(props.data.main.temp_min)}°C/{Math.round(props.data.main.temp_max)}°C
            </Col>
        </Row>
    </div>
);

}