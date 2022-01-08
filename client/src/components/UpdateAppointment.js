import React from 'react';

const UpdateAppointment = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <h3>Change Appointment Date</h3>
        <input type="date" onChange={props.onChange} name="date" />
        <button className="update-date-button">Change Date</button>
        <h4>Change Appointment Time</h4>
        <input type="time" onChange={props.onChange} name="time" />
        <button className="update-time-button">Change Time</button>
      </form>
    </div>
  );
};

export default UpdateAppointment;
