import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentForm = (props) => {
  const [newAppointment, setNewAppointment] = useState({
    customer_name: '',
    service_name: '',
    month: '',
    day: '',
    time: '',
    stylist_id: props.match.params.stylistId
  });

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/appointments', {
      customer_name: newAppointment.customer_name,
      service_name: newAppointment.service_name,
      month: newAppointment.month,
      day: newAppointment.day,
      time: newAppointment.time,
      stylist_id: newAppointment.stylist_id
      //   console.log(res);
    });
    let diffAppointment = {
      customer_name: '',
      service_name: '',
      month: '',
      day: '',
      time: ''
    };
    setNewAppointment(diffAppointment);
    window.location.reload();
  };
  const handleChange = (e) => {
    const newestAppointment = { ...newAppointment };
    newestAppointment[e.target.id] = e.target.value;
    setNewAppointment(newestAppointment);
    console.log(newestAppointment);
  };

  return (
    <div className="appointment-form">
      <h1>Book An Appointment</h1>

      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          value={newAppointment.customer_name}
          onChange={(e) => handleChange(e)}
          name="customer-name"
          placeholder={'Guest Name'}
          id="customer_name"
        />

        <input
          type="text"
          value={newAppointment.service_name}
          onChange={(e) => handleChange(e)}
          name="service-name"
          placholder={'Service Name'}
          id="service_name"
        />

        <input
          type="text"
          value={newAppointment.month}
          onChange={(e) => handleChange(e)}
          name="month"
          placeholder={'Month'}
          id="month"
        />

        <input
          type="integer"
          value={newAppointment.day}
          onChange={(e) => handleChange(e)}
          name="day"
          placeholder={'Day'}
          id="day"
        />

        <input
          type="integer"
          value={newAppointment.time}
          onChange={(e) => handleChange(e)}
          name="time"
          placeholder={'Time'}
          id="time"
        />
        {/* <input
          type="text"
          value={newAppointment.stylist}
          onChange={(e) => handleChange(e)}
          name="stylist"
          placeholder={'Stylist Name'}
          id="stylist"
        /> */}

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};
export default AppointmentForm;
