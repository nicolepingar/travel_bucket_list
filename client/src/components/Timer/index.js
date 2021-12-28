import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const DateTimer = () => {
    // date picker https://www.npmjs.com/package/react-datepicker
    const [startDate, setStartDate] = useState(new Date());
    const [location, setLocation] = useState("");
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
        localStorage.setItem('date', startDate);
        setLocation('');
        setStartDate('');
    };

    return (
        <div>
            <Form>
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

// get trip location & date to store in local storage
