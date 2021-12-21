import React from 'react'
import services from '../data/services'
import ServiceItem from '../components/ServiceItem'
import ServiceList from '../components/ServiceList'


const ServiceMenu = (props) => {
 

  return(
    
    <div className = 'service-list'>
      <h1>Services</h1>
      <ServiceList>
      {
      props.services.map((service) =>(
        <ServiceItem
        key={service.id}
        name={service.name}
        price={service.price}
        />
      ))}
      </ServiceList>
    </div>
  )
}
console.log(services)

export default ServiceMenu