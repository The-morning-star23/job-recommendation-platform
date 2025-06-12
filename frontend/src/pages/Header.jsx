import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    }
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleHomeClick}>CareerMatch</Link>
      </div>
      <nav className="nav-links">
        <Link to="/" onClick={handleHomeClick}>Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
