import React from 'react'
import EstheticServices from '../data/EstheticServices'
import ServiceItem from '../components/ServiceItem'
import ServiceList from '../components/ServiceList'





const EstheticServiceMenu = (props) => {
 

  return(
    
    <div className = 'service-list'>
      <h1>Esthetic Services</h1>
      <ServiceList>
      {
      EstheticServices.map((service) =>(
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
console.log(EstheticServices)

export default EstheticServiceMenu