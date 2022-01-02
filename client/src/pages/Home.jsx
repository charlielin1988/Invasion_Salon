import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ServiceCard from '../components/ServiceCard'
import { useHistory } from 'react-router-dom'


const Home = (props) => {
  let history = useHistory()
  const [services, setServices] = useState([])
  
  useEffect(()=> {
    getServices()
  }, [])
    const getServices= async () => {
      const res = await axios.get(
        `http://localhost:3001/api/services`
      )
      setServices(res.data.services)
     
    }
   

  
  
  return(
  <div className="home">
  <h1>Welcome To Invasion!</h1>
  <h2>Hours:</h2>
  <p>Tuesday-Saturday, 10AM-7PM</p>
  <h3>Services:</h3>
  <div className= "service-grid">
      {services.map((service) => {
        
        return (
          <ServiceCard
          key={service._id}
          onClick={() => history.push(`/services/details/${service._id}`)}
          service_name={service.service_name}
          price={service.price}
          image={service.url}
          description={service.description}

          /> 
      
        )
      
    })}
    
    </div>
    
    </div>
        
      
    

  )
}
export default Home 