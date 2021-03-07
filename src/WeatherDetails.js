import React, {useState} from "react";
import {Form, Button, Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import InfoApi from "./InfoApi.js";
import axios from "axios";


export default function WeatherDetails(props) {

    
    let [weatherData, setWeatherData] = useState({ready: false});
    let [city, setCity] = useState(props.userInput);
  
    
    function handleResponse(response) {        
       
        setWeatherData(
            {
                ready: true,
                temp: Math.round(response.data.main.temp),
                feelsLike: Math.round(response.data.main.feels_like),
                type: response.data.weather[0].description,
                humid: response.data.main.humidity,
                wind: Math.round(response.data.wind.speed),
                cityName: response.data.name,
                country: response.data.sys.country,
                date: response.data.dt,
                timezone: response.data.timezone,
                icon: response.data.weather[0].icon
            }
        )

    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    function handleClick(event) {
        event.preventDefault();
        search();
    }

    function search() {
        console.log("search has been called");
        const apiKey = "d4005dcd287a291e84d25dc6afec0b1c";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse); 
    }

    if(weatherData.ready) {

    return (
        <div>
        <Form>
            <Row className="forecast-header">
                <Col xs={12} sm={10} className="forecast-header-search">
                    <Form.Control
                      className="input"
                      id="forecast-searchbox"
                      placeholder="Enter City..."
                      onChange={handleChange}
                    />
                    <Button type="submit" className="mb-2" id="forecast-search-but" onClick={handleClick} >Submit</Button>
                    <Button type="submit" className="mb-2" id="forecast-location-but" >📌</Button>
                </Col>
            </Row>
        </Form>
        <InfoApi data={weatherData} />
        </div>
    );

} else {
        search();
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
        
    }

}