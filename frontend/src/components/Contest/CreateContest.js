import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateContest.css';

const CreateContest = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !type || !date || !time || !description) {
      setError('Please fill in all fields.');
      return;
    }

    const contestData = new FormData();
    contestData.append('name', name);
    contestData.append('type', type);
    contestData.append('date', date);
    contestData.append('time', time);
    contestData.append('description', description);
    if (file) contestData.append('file', file);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contests`,
        contestData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      setName('');
      setType('');
      setDate('');
      setTime('');
      setDescription('');
      setFile(null);
      setError('');
      setSuccess(true);

      // Redirect after successful creation
      setTimeout(() => {
        navigate('/contests'); // Navigate to contests page
      }, 2000);
    } catch (err) {
      setError('Error creating contest. Please try again later.');
    }
  };

  return (
    <div className="create-contest-container">
      <h2>Create a New Contest</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Contest Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="type">Contest Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Select type</option>
            <option value="weekly">Weekly</option>
            <option value="one-day">One-day</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="date">Contest Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Contest Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Contest Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="file">Upload File:</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {error && <p className="error">{error}</p>}
      {success && <p className="success-message">Contest created successfully!</p>}

        <button type="submit">Create Contest</button>
      </form>
    </div>
  );
};

export default CreateContest;
