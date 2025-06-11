import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-section">
      <header className="navbar">
        <div className="logo">CareerMatch</div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </header>

      <main className="hero">
        <h1>Find the Perfect Job with AI</h1>
        <p>Unlock job opportunities tailored to your skills and goals.</p>
        <Link to="/register" className="cta-button">
          Get Started
        </Link>
      </main>

      <footer className="footer">
        © 2025 CareerMatch. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
