import React from 'react';

function WeatherDetails(props) {
    return (
        <div>
            <h3>{props.main}</h3>
            {/* <h3>{props.humidity}</h3>
            <h3>{props.wind}</h3>
            <h3>{props.description}</h3> */}
        </div>
    );
}

export default WeatherDetails;