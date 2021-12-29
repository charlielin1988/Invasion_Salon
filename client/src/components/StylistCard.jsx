import React from 'react'


const StylistCard = (props) => {
  console.log(props)
  return (
    <div className = 'stylist-card'onClick={props.onClick}>
      <div className = 'info-wrapper' />
       <h2 className ="stylist-name">
        {props.name}
        </h2>
        <h3 className ="stylist-service-type">
        {props.service_type}
        </h3>
        <div className ="stylist-availability">
        {props.availability}
        </div>
      </div>  
    )}
  
    




export default StylistCard