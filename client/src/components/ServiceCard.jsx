import React from 'react'

const ServiceCard = (props) => {
  
  return (
    <div className= 'service-card' onClick={props.onClick}>
      <section className= 'service-info'>
        <h2>{props.service_name}</h2>
        <h4>${props.price}</h4>
        <img src={props.image} alt={props.service_name} />
        <p className='services'>{props.description}</p>
      </section>
    </div>
  )
}
export default ServiceCard