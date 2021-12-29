import React from 'react'
import HairServices from '../data/HairServices'
import ServiceItem from '../components/ServiceItem'
import ServiceList from '../components/ServiceList'


const HairServiceMenu = (props) => {
 

  return(
    
    <div className = 'service-list'>
      <h1> Hair Services</h1>
      <ServiceList>
      {
      HairServices.map((service) =>(
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
console.log(HairServices)

export default HairServiceMenu