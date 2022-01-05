import React from 'react';
import axios from 'axios';

const AppointmentCard = (props) => {
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
        Cancel Appointment
      </button>
    </div>
  );
};
export default AppointmentCard;
