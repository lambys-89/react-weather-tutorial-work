import React from "react";
import {Row, Col} from 'react-bootstrap';
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import Temperature from "./Temperature.js";


export default function InfoApi(props) {

    return (
        <div>
            <Row xs={12} sm={10} className="city-time">
                <div className="header-group">
                    <h1>{props.data.cityName}, {props.data.country} </h1>
                    <h2><FormattedDate currentDate = {props.data.date} timezone = {props.data.timezone}/></h2> 
                </div>
            </Row>
            <Row className="list-details">
                <Col xs={12} sm={4} className="weather-icon-current">
                    <WeatherIcon iconCode={props.data.icon} />
                </Col>
                <Col xs={12} sm={8} className="weather-details-current">
                    <div className="list-group">
                        <Temperature temp={props.data.temp} feels={props.data.feelsLike}/>
                        <h3 className="text-capitalize">Type: {props.data.type}</h3>
                        <h3>Humidity: {props.data.humid}%</h3>
                        <h3>Wind speed: {props.data.wind} mph</h3> 
                    </div>
                </Col>
            </Row>
        </div>
    )
}