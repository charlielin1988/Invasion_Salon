import React from 'react'
const ServiceItem = (props) => {
  return (
    <li className = "service-item">
      <h3>{props.name}</h3>
      <h5>Price: ${props.price}</h5>
    </li>
  )
}
export default ServiceItem