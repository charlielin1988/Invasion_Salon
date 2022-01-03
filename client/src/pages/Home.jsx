import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
return (
  <div className = 'home-page'>
    <h1>Welcome To Invasion!</h1>
    <h2>Hours:</h2>
    <p>Tuesday-Saturday, 10:00 AM-7:00PM</p>
    <Link to="/about">
     <h2>🗡 Maybe Saylor, Hair Slayer 🗡</h2>
    
    </Link>
    <Link to ='/services'>
    <h3> 👑 View Hair Slayage Menu 👑 </h3>
    </Link>
    <Link to ='/appointments'>
    <h3> ✨ Get Your Dream Hair ✨ </h3>
    </Link>
  </div>
)
}
export default Home 