import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <br />
      <Link to="/service-menu">View Our Service Menu</Link>
      <br />
      <Link to="/appointments">Book An Appointment</Link>
    </nav>
  );
};
export default Nav;
