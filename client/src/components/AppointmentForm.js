// import React, { useState } from 'react';
// import axios from 'axios';

// const AppointmentForm = (props) => {
//   const [newAppointment, setNewAppointment] = useState({
//     customer_name: '',
//     service_name: '',
//     appointment_date: '',
//     time: '',
//     stylist_id: props.match.params.stylistId
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(addAppointment.customer_name);
//     axios.post(`http://localhost:3001/api/stylists/appointments`, {
//       customer_name: newAppointment.customer_name,
//       service_name: newAppointment.service_name,
//       appointment_date: newAppointment.appointment_date,
//       time: newAppointment.time,
//       stylist_id: newAppointment.stylist_id
//     });
//     let differentAppointment = {
//       customer_name: '',
//       service_name: '',
//       appointment_date: '',
//       time: ''
//     };
//     setNewAppointment(differentAppointment);
//     window.location.reload;
//   };
//   const handleChange = (e) => {
//     const newestAppointment = { ...newAppointment };
//     newestAppointment[e.target.id] = e.target.value;
//     setNewAppointment(newestAppointment);
//     console.log(newestAppointment);
//   };
//   return (
//     <div className="add-appointment">
//       <h1 className="appointment-header">Book New Appointment</h1>
//       <form onSubmit={(e) => handleSubmit(e)}></form>
//     </div>
//   );
// };

// export default AppointmentForm;
