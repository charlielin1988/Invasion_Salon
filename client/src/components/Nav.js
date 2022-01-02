import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
    </nav>
  );
};
export default Nav;
