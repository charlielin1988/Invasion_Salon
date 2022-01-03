import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/"> 👽 Home 👽 </Link>
      <Link to="/about"> 🪐 About 🪐 </Link>
      <Link to="/services"> 🚀 Services 🚀 </Link>
      <Link to="appointments"> 🛸 Appointments 🛸 </Link>
    </nav>
  );
};
export default Nav;
