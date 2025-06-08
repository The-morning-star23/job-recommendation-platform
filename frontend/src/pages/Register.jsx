import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/register', form);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input name="name" placeholder="Name" value={form.name}
        onChange={handleChange} required className="w-full p-2 mb-4 border" />
      <input name="email" type="email" placeholder="Email" value={form.email}
        onChange={handleChange} required className="w-full p-2 mb-4 border" />
      <input name="password" type="password" placeholder="Password" value={form.password}
        onChange={handleChange} required className="w-full p-2 mb-4 border" />
      <button className="w-full bg-green-600 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default Register;
