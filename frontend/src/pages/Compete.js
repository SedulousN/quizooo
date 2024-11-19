import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Compete.css';

const Compete = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contests`);
        const sortedContests = response.data
          .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by closest date
          .slice(0, 5); // Limit to 5 contests
        setContests(sortedContests);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching contests:', err);
        setError('Failed to load contests.');
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  return (
    <div className="compete-container">
      <h1>Compete in Coding Challenges</h1>
      <p>Test your coding skills by participating in a variety of exciting challenges and contests!</p>
      
      {loading ? (
        <p>Loading contests...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : contests.length === 0 ? (
        <p>No upcoming contests available.</p>
      ) : (
        <ul className="contest-list">
          {contests.map((contest) => (
            <li key={contest._id}>
              <strong>{contest.name}</strong> - <em>Closes on: {new Date(contest.date).toLocaleDateString()}</em>
              <a href={`/contest/${contest._id}`} className="contest-link">View Contest</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Compete;
