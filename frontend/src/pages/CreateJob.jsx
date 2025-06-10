import { useState } from 'react';
import axios from 'axios';
import './CreateJob.css';

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/jobs`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Job posted successfully!');
      setError('');
      setFormData({ title: '', description: '', company: '' });
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Failed to post job. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="create-job-container">
      <h2>Create New Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          name="company"
          type="text"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <button type="submit">Post Job</button>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CreateJob;
