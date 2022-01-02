import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = (props) => {
  const [newAppointment, setNewAppointment] = useState({
    customer_name: '',
    service_name: '',
    date: '',
    time: '',
    service_id: props.match.params.serviceId
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newAppointment.customer_name);
    axios.post(`http://localhost:3001/api/appointments`, {
      customer_name: newAppointment.customer_name,
      service_name: newAppointment.service_name,
      date: newAppointment.date,
      time: newAppointment.time,
      service_id: newAppointment.service_id
    });
    let differentAppointment = {
      customer_name: '',
      service_name: '',
      date: '',
      time: '',
      service_id: props.match.params.serviceId
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
          <select
            name={'service_name'}
            onChange={(e) => handleChange(e)}
            value={newAppointment.service_name}
            id="service_name"
          >
            <option value="1">Single Process Color</option>
            <option value="2">Dimensional Blonde</option>
            <option value="3">Global Blonde</option>
            <option value="4">Galaxy Hair</option>
            <option value="5">Dark Side of the Moon</option>
            <option value="6">Sparkles in the Sky</option>
            <option value="7">Color Corrections</option>
            <option value="8">Long Layered Cut</option>
            <option value="9">Short Cut</option>
            <option value="10">Kid's Cut</option>
            <option value="11">Olaplex Treatment</option>
          </select>
        </section>

        <section className="appointment-date-input">
          Date:
          <input
            type="date"
            appointment_date="date"
            value={newAppointment.date}
            id="appointment_date"
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
