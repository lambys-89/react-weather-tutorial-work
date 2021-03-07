import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import InfoApi from "./InfoApi.js";
import axios from "axios";
import FutureForecast from "./FutureForecast.js";


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
        const apiKey = "0cdc6d259e17cc7da434cf6b9a723f37";
        
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 
        }

    if(weatherData.ready) {

    return (
        <div className="main-page">
        <Form className="form-main">
            
                    <Form.Control
                      className="input"
                      id="forecast-searchbox-main"
                      placeholder="Enter City..."
                      onChange={handleChange}
                    />
                    <Button type="submit" className="mb-2" id="forecast-search-but" onClick={handleClick} >Search</Button>
        </Form>
        <InfoApi data={weatherData} />
        <h2>Forecast Details</h2>
        <FutureForecast city={weatherData.cityName}/>
        </div>
    );

} else {
        search();
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
        
    }

}