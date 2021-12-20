import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/"></Link>
      <br />
      <Link to="/service-menu"></Link>
    </nav>
  );
};
export default Nav;
