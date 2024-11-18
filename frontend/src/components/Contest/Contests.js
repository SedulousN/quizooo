import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Contests.css'; 

const Contests = () => {
  const [contests, setContests] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contests`);
        setContests(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching contests:', err);
        setError('Failed to load contests.');
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  if (loading) return <p>Loading contests...</p>;

  return (
    <div className="contests-container">
      <h2>Contests</h2>

      {error && <p className="error">{error}</p>}

      <div className="contest-cards">
        {contests.length === 0 ? (
          <p>No contests available.</p>
        ) : (
          contests.map((contest) => (
            <div className="contest-card" key={contest._id}>
              <h4>{contest.name}</h4>
              <p>{contest.description}</p>
              <p>{contest.type} - {new Date(contest.date).toLocaleDateString()} at {contest.time}</p>
              <button onClick={() => navigate(`/contests/${contest._id}`)}>View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Contests;
