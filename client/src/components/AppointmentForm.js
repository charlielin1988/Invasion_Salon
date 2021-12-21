import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = (props) => {
  const [customerName, setCustomerName] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (async = () => {
    const res = await axios.post('localhost:3001/api/appointments');
    console.log(customerName, serviceName, day, time);
    console.log(res);
  });
  return (
    <div className="appointment-form">
      <h1>Book An Appointment</h1>

      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          customerName={props.customerName}
          onChange={props.onChange}
          name="customerName"
          placeholder={'Guest Name'}
        />

        <input
          type="text"
          stylistName={props.stylistName}
          onChange={props.onChange}
          name="stylistName"
          placholder={'Stylist Name'}
        />

        <input
          type="text"
          month={props.month}
          onChange={props.onChange}
          name="month"
          placeholder={'Month'}
        />

        <input
          type="integer"
          day={props.day}
          onChange={props.onChange}
          name="day"
          placeholder={'Day'}
        />

        <input
          type="integer"
          time={props.time}
          onChange={props.onChange}
          name="time"
          placehodler={'Time'}
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};
export default AppointmentForm;
