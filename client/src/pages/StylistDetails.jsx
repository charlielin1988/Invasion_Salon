import React, { useEffect, useState } from 'react'
import AppointmentCard from '../components/AppointmentCard'
import AppointmentForm from '../components/AppointmentForm'
import axios from 'axios'

const StylistDetails = (props) => {
  const [selectedStylist, setSelectedStylist] = useState(null)
  const [appointments, setAppointments] = useState([])

  const getStylist = async () => {
    const res = await axios.get(
      `http://localhost:3001/api/stylists/${props.match.params.stylistId}`
    ) 
    setSelectedStylist(res.data.stylist)
  }
  const getAppointments = async () => {
    const res = await axios.get(`http://localhost:3001/api/stylists/appointments`)
    setAppointments(res.data)
    console.log(res.data)
  }

  useEffect(()=> {
    getStylist()
    getAppointments()
  }, [])
  
  return selectedStylist ?  (
    <div>
      <section className= "stylist-info">
      <h1>{selectedStylist.name}</h1>
      <h2>{selectedStylist.service_type}</h2>
      <h3>{selectedStylist.availability}</h3>
      </section>
      <AppointmentForm {...props} />
        {appointments.map((appointment)=> {
          if (appointment.stylist_id === props.match.params.stylistId) {
            return (
              <AppointmentCard
              key={appointment._id}
              customer_name={appointment.customer_name}
              service_name={appointment.service_name}
              date={appointment.appointment_date}
              time={appointment.time}
              />
            ); 
          } else {
            console.log('appointment doesn/t match this stylist')
          }
        })}
        

      
    </div>
  ): null 
}
export default StylistDetails