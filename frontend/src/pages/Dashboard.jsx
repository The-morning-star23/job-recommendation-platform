import { useEffect, useState } from 'react';
import API from '../services/api';
import JobCard from '../components/JobCard';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const { data } = await API.get('/recommendations');
        setJobs(data);
      } catch (err) {
        console.error('Error fetching recommendations', err);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Recommended Jobs</h2>
      {jobs.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        jobs.map((job) => <JobCard key={job._id} job={job} />)
      )}
    </div>
  );
};

export default Dashboard;
