import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ServiceCard from '../components/ServiceCard'

const Services = (props) => {
  return (
    <div className = "services-page">
      <h1>Celestial Services: Give Your Hair The Star Treatment!</h1>
      <div className ="services-grid">
        {props.services.map((service)=> (
          <ServiceCard key={service._id} {...service} />
        ))}
      </div>

    </div>
  )
}
export default Services 