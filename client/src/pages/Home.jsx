import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
return (
  <div className = 'home-page'>
    
      <h1 className='welcome'>Welcome To Invasion!</h1>
      <Link to="/about">
        <h3 className='maybe'>🗡 Maybe Saylor: Hair Slayer 🗡</h3>
      </Link>
      <p className='hours'>Hours:<br></br>Tuesday-Saturday<br></br> 10:00 AM-7:00PM</p>
      <img className='logo__img' src="https://i.imgur.com/bQ0vbOn.png" alt="logo" />
      
  </div>
)
}
export default Home 