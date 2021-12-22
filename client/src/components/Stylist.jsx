import React, {useState, useEffect} from 'react'


const Stylist = (props) => {
  console.log(props.id)
  return (
    <div className = 'stylist-card' onClick={props.onClick}>
      <div className = 'info-wrapper'>
        <h2>{props.name}</h2>
        <h3>{props.service_type}</h3>
        <h3>{props.availability}</h3>
       </div>
    </div>
  )
}

export default Stylist