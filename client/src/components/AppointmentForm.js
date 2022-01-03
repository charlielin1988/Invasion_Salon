import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = (props) => {
  const [newAppointment, setNewAppointment] = useState({
    customer_name: '',
    service_item: '',
    date: '',
    time: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newAppointment.customer_name);
    axios.post(`http://localhost:3001/api/appointments/add`, {
      customer_name: newAppointment.customer_name,
      service_item: newAppointment.service_item,
      date: newAppointment.date,
      time: newAppointment.time,
      service_id: newAppointment.service_id
    });
    let differentAppointment = {
      customer_name: '',
      service_item: '',
      date: '',
      time: ''
    };
    setNewAppointment(differentAppointment);
    window.location.reload();
  };
  const handleChange = (e) => {
    const newestAppointment = { ...newAppointment };
    newestAppointment[e.target.id] = e.target.value;
    setNewAppointment(newestAppointment);
    console.log(newestAppointment);
  };
  return (
    <div className="add-appointment">
      <h1 className="appointment-header">Book New Appointment</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section className="name-input">
          Name:
          <input
            type="text"
            customer_name="customer_name"
            value={newAppointment.customer_name}
            onChange={(e) => handleChange(e)}
            id="customer_name"
          />
        </section>
        <section className="hair-service-input">
          Hair Service:
          <input
            type="text"
            service_item="service_item"
            onChange={(e) => handleChange(e)}
            value={newAppointment.service_item}
            id="service_item"
          ></input>
        </section>

        <section className="appointment-date-input">
          Date:
          <input
            type="date"
            date="date"
            value={newAppointment.date}
            id="date"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="appointment-time-input">
          Time:
          <input
            type="time"
            time="time"
            value={newAppointment.time}
            onChange={(e) => handleChange(e)}
            id="time"
          />
        </section>
        <button className="button">Book</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
