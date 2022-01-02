import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentCard = (props) => {
  console.log(props);
  return (
    <div className="appointment-card">
      <h1>{props.customer_name}</h1>
      <h2>{props.service_name}</h2>
      <h3>{props.date}</h3>
      <h4>{props.time}</h4>
    </div>
  );
};
export default AppointmentCard;
