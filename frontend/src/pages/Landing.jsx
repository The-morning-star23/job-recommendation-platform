import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <header className="landing-header">
        <h1 className="title">Find Your Dream Job</h1>
        <p className="subtitle">Thousands of opportunities await you.</p>
        <button className="login-btn" onClick={() => navigate('/login')}>
          Get Started
        </button>
      </header>

      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-list">
          <div className="category-card">IT & Software</div>
          <div className="category-card">Sales & Marketing</div>
          <div className="category-card">Finance</div>
          <div className="category-card">Healthcare</div>
          <div className="category-card">Remote Jobs</div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Sign Up or Login</li>
          <li>Get Personalized Job Recommendations</li>
          <li>Apply in One Click</li>
        </ol>
      </section>

      <footer className="footer">
        <p>© 2025 JobPlatform | <a href="/">Privacy</a> | <a href="/">Terms</a></p>
      </footer>
    </div>
  );
};

export default Landing;
