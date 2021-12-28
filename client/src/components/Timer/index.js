import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Timer = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
};

export default Timer;

// get trip location & date to store in local storage
// date picker https://www.npmjs.com/package/react-datepicker