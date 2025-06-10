import { useEffect, useState } from 'react';
import axios from 'axios';
import './Recommendations.css';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/recommendations`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRecommendations(res.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to fetch recommendations.');
      }
    };

    fetchRecommendations();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="recommendations-container">
      <h2>Recommended Jobs for You</h2>
      {error && <p className="error">{error}</p>}
      {recommendations.length === 0 ? (
        <p>No recommendations found.</p>
      ) : (
        <ul className="recommendation-list">
          {recommendations.map((job) => (
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

export default Recommendations;
