import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';
import WeatherDetails from './details';
import SearchForm from '../../pages/Search';

const WeatherAPI = () => {
    // Set state for the search result and the search query
    const [result, setResult] = useState({});
    const [search, setSearch] = useState('');

    const searchCity = (query) =>
        API.search(query)
            .then((res) => setResult(res.data))
            .catch((err) => console.log(err));


    const handleInputChange = (e) => setSearch(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        searchCity(search);
    };

    const {
        Temp = '',
        Humidity = '',
        Wind = '',
        Description = '',
        ID = ''
    } = result;

    return (
        <Container>
            <Row>
                <Col>
                    <div>Search for a City</div>
                    <div>
                        {Temp ? (<WeatherDetails
                            temp={Temp}
                            humidity={Humidity}
                            wind={Wind}
                            description={Description}
                            id={ID}
                        />) : (<h3>No Results to display.</h3>)}
                    </div>
                </Col>
                <Col>
                    <SearchForm
                        value={search}
                        handleInputChange={handleInputChange}
                        handleFormSubmit={handleFormSubmit} />
                </Col>
            </Row>
        </Container >
    );
};

export default WeatherAPI;