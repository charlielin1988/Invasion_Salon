import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Appointments from '../components/Appointments'
import AppointmentForm from '../components/AppointmentForm'
import axios from 'axios'

const StylistAppointment = (props) => {
  const [appointments, setAppointments] = useState([])
  const [stylist, setStylist] = useState([])
  const { id } =useParams()

  const [form, setForm] =useState({
    customerName: "",
    stylistName: "",
    month: "",
    day: "",
    time: ""
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    console.log({...form, [e.target.name]: e.target.value})
  } 
  useEffect(() => {
    getStylists()
  }, [])
  const createAppointment = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/appointments', form)
    console.log('create appointments here')
  }
  const getStylists = async() => {
    const response = await axios.get(`http://localhost:3001/api/stylists/id/${id}`)
  
  setStylist(response.data.stylist) 
  const res = await axios.get('http://localhost:3001/api/stylists')
  let currentAppointments = res.data.appointments.filter(
    (stylistAppointment) => stylistAppointment.name === response.data.stylist.name
  ) 
  setAppointments(currentAppointments)
  }
  return (
    <div className ="stylist-card">
      <div className="info-wrapper">
        <h2>{customer.name}</h2>
        <h2>{stylist.name}</h2>
      </div>
      <div className="appointment-card">
        <section>
          <AppointmentForm onChange={handleChange} onSubmit={createAppointment} />
        </section>

        <section className="appointment-grid">
          {appointments.map((appointment) => {
            <Appointments
            customerName={appointment.customerName}
            stylistName={appointment.stylistName}
            month={appointment.month}
            day={appointment.day}
            time={appointment.time}
            key={appointment.id}
            {...appointments}
            />
          })}
        </section>
      </div>


    </div>
  )
  
  }

export default StylistAppointment