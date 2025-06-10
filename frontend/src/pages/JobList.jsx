import { useEffect, useState } from 'react';
import axios from 'axios';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
        setJobs(res.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to load jobs.');
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="job-list-container">
      <h2>Available Jobs</h2>
      {error && <p className="error">{error}</p>}
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul className="job-list">
          {jobs.map(job => (
            <li key={job._id} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
