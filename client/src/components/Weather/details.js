import React from 'react';

function WeatherDetails(props) {
    return (
        <div>
            <h3>{props.temp}</h3>
            <h3>{props.humidity}</h3>
            <h3>{props.wind}</h3>
            <h3>{props.description}</h3>
        </div>
    );
}

export default WeatherDetails;