import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StylistCard from '../components/StylistCard'
import { useHistory } from 'react-router-dom'


const Home = (props) => {
  let history = useHistory()
  const [stylists, setStylists] = useState ([])
  
  useEffect(()=> {
    const getStylists= async () => {
      const res = await axios.get(
        `http://localhost:3001/api/stylists`
      )
      setStylists(res.data.stylists)
      console.log(res.data)
    }
    getStylists()
  }, [])

  
  
  return(
  <div className="home">
  <h1>Welcome To Invasion!</h1>
  <h2>Our Beauty Baelians</h2>
  <section className = "stylists-section">
    <div className = "stylist-grid">
      {stylists.map((stylist) => {
        {
        return (
          <StylistCard
          key={stylist._id}
          onClick={() => history.push(`/stylists/${stylist._id}`)}
          name={stylist.name}
          service_type={stylist.service_type}
          availability={stylist.availability}
          />
        )
      }
      })}
    </div>
    
  </section>
        
      
    
  </div>
  )
}
export default Home 