import React, { useEffect, useState} from 'react'
import axios from 'axios'
import AppointmentCard from '../components/AppointmentCard'
import AppointmentForm from '../components/AppointmentForm'

const ServiceDetails = (props) => {
  const [selectedService, setSelectedService] = useState(null)
  const [appointments, setAppointments] = useState([])
  const getService = async () => {
    const res = await axios.get(
      `http://localhost:3001/api/services/details/${props.match.params.serviceId}`
    )
    setSelectedService(res.data.service)
  }
  const getAppointments = async() => {
    const res= await axios.get(
    `http://localhost:3001/api/appointments`
    )
    setAppointments(res.data)
  }
  useEffect(() => {
    getService()
    getAppointments() 
  }, [])
  const handleClick = (e, appointmentId) => {
    e.preventDefault()
    axios.delete(`http://localhost:3001/api/appointments/details/${appointmentId}`)
    window.location.relaod()
  }
  return selectedService ? (
    <div>
      <section className="service-info">
        <h2>{selectedService.service_name}</h2>
        <h4>{selectedService.price}</h4>
        <img src={selectedService.url}  alt ={selectedService.service_name}/>
        <p>{selectedService.description}</p>
      </section>
      <h1>Appointments: </h1>
      <AppointmentForm {...props} /> 
      {appointments.map((appointment, index) => {
        if (appointment.service_id === props.match.params.serviceId) {
          return (
            <AppointmentCard
            key={appointment._id}
            id={appointment._id}
            setAppointments={setAppointments}
            appointments={appointments}
            index={index}
            service_name={appointment.service_name}
            customer_name={appointment.customer_name}
            date={appointment.date}
            time={appointment.time}
            service_id={appointment.service_id}
            onClick={(e) => handleClick(e, appointment._id, index)}
            />
          )
        } else {
        }
      })}
    </div>
  ) : null
}
export default ServiceDetails