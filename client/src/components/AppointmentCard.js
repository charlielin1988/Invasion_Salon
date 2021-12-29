import React, { useState } from 'react';
import axios from 'axios';

const AppointmentCard = (props) => {
  return (
    <div className="appointment-card" onClick={props.onClick}>
      <h1>{props.customer_name}</h1>
      <h2>{props.service_name}</h2>
      <h3>{props.date}</h3>
      <h3>{props.time}</h3>
    </div>
  );
};
export default AppointmentCard;
