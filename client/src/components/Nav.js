import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <br />
      <Link to="/hair-service-menu">Hair Services</Link>
      <br />
      <Link to="esthetic-service-menu">Esthetic Services</Link>
      <br />
      <Link to="/stylists/appointments">Appointments</Link>
      <br />
    </nav>
  );
};
export default Nav;
