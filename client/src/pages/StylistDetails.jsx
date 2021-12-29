import React, { useEffect, useState } from 'react'
import StylistCard from '../components/StylistCard'
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
    const res = await axios.get(`http://localhost:3001/api/appointments`)
    setAppointments(res.data.appointments)
  }

  useEffect(()=> {
    getStylist()
    getAppointments()
  }, [])
  
  return (
    <div>
      <StylistCard {...props} array={props.array} />
    </div>
  )
}
export default StylistDetails