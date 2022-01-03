import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const DateTimer = () => {
    // date picker https://www.npmjs.com/package/react-datepicker https://date-fns.org/docs/Getting-Started https://reactdatepicker.com/#example-configure-popper-properties
    const [startDate, setStartDate] = useState(new Date());
    const [location, setLocation] = useState("");
    const [LSDate, setLSDate] = useState(localStorage.getItem('date'));
    const [LSLocation, setLSLocation] = useState(localStorage.getItem('location'));
    // updates input state for location 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        return setLocation(value);
    };
    // on click, set local storage to location and date, and empty values in input field/date picker
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        localStorage.setItem('location', location);
        localStorage.setItem('date', startDate); // stores in this format: Sat Dec 11 2021 16:40:15 GMT-0500 (Eastern Standard Time)
        setLocation('');
        setStartDate('');
        setLSLocation(localStorage.getItem('location'));
        setLSDate(localStorage.getItem('date'));
    };

    return (
        <div>
            <h2>Your next trip to {LSLocation} is in: {LSDate}</h2>
            <Form>
                <Form.Label>Date of Next Trip</Form.Label>
                <DatePicker selected={startDate} name="startDate" value={startDate} onChange={(date) => setStartDate(date)} />
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control onChange={handleInputChange} type="textbox" placeholder="Enter location" name="location" value={location} />
                </Form.Group>
                <Button type="submit" onClick={handleFormSubmit}>Set Countdown</Button>
            </Form>
        </div>
    );
};

export default DateTimer;
