import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function SearchForm(props) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Search a Location</Form.Label>
                <Form.Control onChange={props.handleInputChange} value={props.value} type="text" placeholder="City or Zip Code" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={props.handleFormSubmit}>
                Submit
            </Button>
        </Form>

    );
}

export default SearchForm