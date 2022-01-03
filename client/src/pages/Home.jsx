import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
return (
  <div className = 'home-page'>
    <h1>Welcome To Invasion!</h1>
    <h2>Hours:</h2>
    <p>Tuesday-Saturday, 10:00 AM-7:00PM</p>
    <Link to="/about">
      <button className="about-button"></button>
    <h2>Maybe Saylor, Hair Extraordinnaire</h2>
    </Link>
    <Link to ='/services'>
    <h2>View Services</h2>
    <button className="services-button"></button>
    </Link>
    <Link to ='/appointments'>
      <button className='appointments-button'></button>
      <h2>Appointments</h2>
    </Link>
  </div>
)
}
export default Home 