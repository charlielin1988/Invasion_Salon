import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AppointmentCard from '../components/AppointmentCard'
import AppointmentForm from '../components/AppointmentForm'
import '../styles/Appointments.css'
const Appointments = (props) => {
  const [appointments, setAppointments] = useState([])
  const [form, setForm] = useState ({
    customer_name: '',
    date: "",
    time: "",
    service_item: '',
})


useEffect (()=> {
  getAppointments ()
})
const getAppointments = async () => {
  const res = await axios.get(`http://localhost:3001/api/appointments`)
  setAppointments(res.data.appointments)
  
}
const handleChange= async (e) => {
  await setForm({...form, [e.target.date]: e.target.value })
}
const handleAdd = async (e) => {
  e.preventDefault()
  await axios.post(`http://localhost:3001/api//appointments/add`, form)
}
const handleCancel = async (e)=>{
  e.preventDefault() 
  await axios.delete(`http://localhost:3001/api/appointments/details/${e.target.id}`)
}
return (
  <div className = 'appointments-page'>
    <h1>Appointments</h1>
    <AppointmentForm onChange={handleChange} onSubmit={handleAdd} />
    <section className = 'appointment-info'>
      {appointments.map((appointment)=> (
      <AppointmentCard 
      key={appointment._id}
      {...appointment}
      onClick={handleCancel}
      />
      ))}
    </section>
  </div>
)
}
export default Appointments 