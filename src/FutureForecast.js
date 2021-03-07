import React from "react";
import {Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


export default function FutureForecast(props) {

    //<h1>Entry point {props.locationType} button</h1>
    //{props.locationType === "city" && props.searchVal.length > 0 &&
    //<h1>Searched value was {props.searchVal}</h1>}

    return(
        <div className="card-group">
            <Card style={{ width: '18rem' }} className="card day1">
                <Card.Body>
                    <Card.Title>Monday</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">4°C/7°C</Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="card day2">
                <Card.Body>
                    <Card.Title>Tuesday</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">4°C/7°C</Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="card day3">
                <Card.Body>
                    <Card.Title>Wednesday</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">4°C/7°C</Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="card day4">
                <Card.Body>
                    <Card.Title>Thursday</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">4°C/7°C</Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="card day5">
                <Card.Body>
                    <Card.Title>Friday</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">4°C/7°C</Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}




