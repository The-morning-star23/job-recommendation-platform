import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          CareerMatch
        </Link>
      </div>
      <nav className="nav-links">
        {location.pathname !== '/' && (
          <Link to="/">Home</Link>
        )}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
