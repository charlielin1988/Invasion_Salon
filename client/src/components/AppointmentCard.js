import React, { useState } from 'react';
import axios from 'axios';
import UpdateAppointment from './UpdateAppointment';

const AppointmentCard = (props) => {
  const [appointmentDate, setAppointmentDate] = useState(props.date);
  const [appointmentTime, setAppointmentTime] = useState(props.time);

  const handleDateChange = (e) => {
    e.preventDefault();
    setAppointmentDate(e.target.value);
  };

  const handleDateSubmit = async (e) => {
    e.preventDefault();
    let newDate = e.target[0].value;
    const updatedDate = {
      customer_name: props.customer_name,
      service_item: props.service_item,
      date: newDate,
      time: props.time,
      service_id: props.service_id
    };
    await axios.put(
      `http://localhost:3001/api/appointments/update/${props._id}`,
      updatedDate
    );
    setAppointmentDate(newDate);
    window.location.reload();
  };

  const handleTimeChange = (e) => {
    e.preventDefault();
    setAppointmentTime(e.target.value);
  };

  const handleTimeSubmit = async (e) => {
    e.preventDefault();
    let newTime = e.target[0].value;
    const updatedTime = {
      customer_name: props.customer_name,
      service_item: props.service_item,
      date: props.date,
      time: newTime,
      service_id: props.service_id
    };
    await axios.put(
      `http://localhost:3001/api/appointments/update/${props.id}`,
      updatedTime
    );
    setAppointmentTime(newTime);
    window.location.reload();
  };

  return (
    <div className="appointment-card">
      <h1>{props.customer_name}</h1>
      <h2>{props.service_item}</h2>
      <h3>{props.date}</h3>
      <h4>{props.time}</h4>
      <button
        onClick={props.onClick}
        id={props._id}
        {...props}
        className="button"
      >
        {' '}
        Cancel Appointment
      </button>
      <UpdateAppointment
        onChange={handleDateChange}
        onSubmit={handleDateSubmit}
        onTimeChange={handleTimeChange}
        onTimeSubmit={handleTimeSubmit}
        {...props}
      />
    </div>
  );
};
export default AppointmentCard;
