import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ContestsPage.css'; // Add a stylesheet for styling

const ContestsPage = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get(`'http://localhost:5000'}/api/contests`);
        setContests(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load contests. Please try again later.');
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  if (loading) return <p>Loading contests...</p>;

  return (
    <div className="contests-page">
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
              <Link to={`/contests/${contest._id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContestsPage;
