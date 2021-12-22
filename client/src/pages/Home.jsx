import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Stylist from '../components/Stylist'
import { useHistory } from 'react-router-dom'

const Home = (props) => {
  let history = useHistory()
  const [stylists, setStylists]=useState([])
  useEffect(() => {
    getStylists()

  }, [])

  const getStylists = async () => {
    const res = await axios.get('http://localhost:3001/api/stylists')
    setStylists(res.data.stylists)
  }
  return(
  <div className="home">
  <h1>
    Welcome To Invasion! 
    <section className="stylist-container">
      {stylists.map((stylist)=> {
        
        return (
        <Stylist
        name={stylist.name}
        service_type={stylist.service_type}
        availability={stylist.availability}
        key={stylist._id}
        onClick={()=> history.push(`/stylists/:id${stylist._id}`)}
        {...stylist}
        />
        )
      }
      )} 
    </section>
  </h1>
  </div>
  )
}
export default Home 