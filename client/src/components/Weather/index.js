import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';

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
        id = ''
    } = result;

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={handleInputChange} value={city} type="text" placeholder="City or Zip Code" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default WeatherAPI;