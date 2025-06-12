import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">CareerMatch</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/career-match">CareerMatch</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
