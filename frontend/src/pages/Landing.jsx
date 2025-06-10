import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Find Your Dream Job</h1>
        <p>Smart recommendations tailored just for you.</p>
        <div className="landing-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
      </header>
      <section className="landing-features">
        <div className="feature-box">
          <h3>AI Job Matching</h3>
          <p>Get jobs recommended based on your profile and preferences.</p>
        </div>
        <div className="feature-box">
          <h3>Personalized Dashboard</h3>
          <p>Manage applications and track job insights easily.</p>
        </div>
        <div className="feature-box">
          <h3>Secure & Fast</h3>
          <p>Login securely and access your data anytime, anywhere.</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
