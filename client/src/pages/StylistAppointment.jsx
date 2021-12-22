import React, { useState, useEffect } from 'react'
import Appointments from '../components/Appointments'
import AppointmentForm from '../components/AppointmentForm'
import axios from 'axios'


const StylistAppointment = (props) => {
  const [selectedStylist, setSelectedStylist] = useState(null)
  

  // const [form, setForm] =useState({
  //   customer: "",
  //   service: "",
  //   month: "",
  //   day: "",
  //   time: "",
  //   stylist: "",
  // })

  // const handleChange = (e) => {
  //   setForm({...form, [e.target.name]: e.target.value})
  //   console.log({...form, [e.target.name]: e.target.value})
  // } 
  useEffect(() => {
    getStylist()
  }, [])
  const getStylist = async () => {
    const res= await axios.get(
      `http://localhost:3001/api/stylists/${props.match.params._stylistId}`
    )
    setSelectedStylist(res.data.stylist)
  }

  

  
  return selectedStylist ? (
    <div className ="stylist-card">
      <div className="info-wrapper">
        <h2>{selectedStylist.name}</h2>
      </div>
      <div className="appointment-card">
        
          <AppointmentForm {...props} />
          {props.appointments.map((appointment) => {
            if(appointment.stylist._id === props.match.params._stylistId){
              return (
            <Appointments
            key={appointment._id}
            customer_name={appointment.customer_name}
            service_name={appointment.service_name}
            month={appointment.month}
            day={appointment.day}
            time={appointment.time}
            />
              ) 
              } else {
                console.log('appointment does not match this stylist')
              }
          })}

        <section className="appointment-grid">
          
        </section>
      </div>

  
    </div>
  ):null 
  
  }

export default StylistAppointment