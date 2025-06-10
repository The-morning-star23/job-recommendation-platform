import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Dashboard - Job Platform';

    const token = localStorage.getItem('token');
    if (!token) return navigate('/login');

    const fetchData = async () => {
      try {
        const resUser = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const resJobs = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(resUser.data);
        setJobs(resJobs.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user data');
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      <button className="logout-btn" onClick={handleLogout}>Logout</button>

      <h3>Your Jobs</h3>
      {jobs.length > 0 ? (
        <ul className="job-list">
          {jobs.map((job) => (
            <li key={job._id} className="job-item">
              <h4>{job.title}</h4>
              <p>{job.description}</p>
              <p><strong>Company:</strong> {job.company}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No job postings available.</p>
      )}
    </div>
  );
};

export default Dashboard;
