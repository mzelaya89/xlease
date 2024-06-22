// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Trip Planner</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trip-details">Trip Details</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/host-dashboard">Host Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
