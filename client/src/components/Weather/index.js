import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const WeatherAPI = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");

    const urlFront = "https://api.openweathermap.org/data/2.5/weather?q="
    const urlEnd = "&units=imperial&appid=25228def002124465df0a57cc9a5803b"

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        return setCity(value);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    urlFront + city + urlEnd
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            }
            catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, []);

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