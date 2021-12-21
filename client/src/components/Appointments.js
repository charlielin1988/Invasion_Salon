import React from 'react';

const Appointments = (props) => {
  <div className="appointment-fields">
    <h1>{props.customerName}</h1>
    <h2>{props.serviceName}</h2>
    <h3>{props.month}</h3>
    <h3>{props.day}</h3>
    <h3>{props.time}</h3>
  </div>;
};
export default Appointments;
