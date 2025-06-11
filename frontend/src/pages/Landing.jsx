import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="landing-logo">CareerMatch</h1>
        <nav>
          <Link className="landing-link" to="/login">Login</Link>
          <Link className="landing-link" to="/register">Register</Link>
        </nav>
      </header>

      <main className="landing-main">
        <h2 className="landing-title">Find the Perfect Job with AI</h2>
        <p className="landing-subtitle">
          Unlock job opportunities tailored to your skills and goals.
        </p>
        <Link to="/dashboard" className="landing-cta">Get Started</Link>
      </main>

      <footer className="landing-footer">
        <p>© 2025 CareerMatch. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
