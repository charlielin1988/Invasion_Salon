import React, { useState, useEffect } from 'react';

const Appointments = (props) => {
  return (
    <div className="appointment-fields">
      <h1>{props.customer_name}</h1>
      <h2>{props.service_name}</h2>
      <h3>{props.month}</h3>
      <h3>{props.day}</h3>
      <h3>{props.time}</h3>
      {/* <h3>{props.stylist}</h3> */}
    </div>
  );
};
export default Appointments;
