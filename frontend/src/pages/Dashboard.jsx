import { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/recommendations`
        );
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Recommended Jobs</h1>
      {loading ? (
        <p className="dashboard-loading">Loading...</p>
      ) : jobs.length === 0 ? (
        <p className="dashboard-empty">No job recommendations found.</p>
      ) : (
        <div className="job-list">
          {jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p className="location">{job.location}</p>
              <p className="description">{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
