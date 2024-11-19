import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = ({ isLoggedIn, onLogout }) => {
  const [contests, setContests] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contests`);
        const sortedContests = response.data
          .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date
          .slice(0, 3); // Take the top 3 closest contests
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
    <div className="home-container">
      {/* Left Panel */}
      <div className="left-panel">
        <h3>Upcoming Contests</h3>
        {loading ? (
          <p>Loading contests...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : contests.length === 0 ? (
          <p>No upcoming contests available.</p>
        ) : (
          <ul>
            {contests.map((contest) => (
              <li key={contest._id}>
                <strong>{contest.name}</strong> <br />
                Date: {new Date(contest.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="home-header">
          <h1>Welcome to Quizoo!</h1>
          <p>Your go-to platform for coding contests and quizzes.</p>
          <p>Join our coding club and enhance your skills with regular contests and fun activities.</p>
        </header>

        {/* Quote Section */}
        <div className="quote-container">
          <p className="quote">"Coding the future, One function at a time."</p>
        </div>

        {/* Contest Cards Section */}
        <div className="contest-cards">
          {/* Compete Card */}
          <div className="contest-card">
            <h3>Compete</h3>
            <p>Participate in exciting coding contests to challenge your skills and win rewards!</p>
            <a href="/compete" className="card-link">Start Competing</a>
          </div>

          {/* Practice Card */}
          <div className="contest-card">
            <h3>Practice</h3>
            <p>Work on a wide range of problems and improve your coding abilities at your own pace.</p>
            <a href="/practice" className="card-link">Start Practicing</a>
          </div>

          {/* Updates Card */}
          <div className="contest-card">
            <h3>Updates</h3>
            <p>Stay updated with the latest coding challenges, new contests, and platform improvements.</p>
            <a href="/updates" className="card-link">View Updates</a>
          </div>

          {/* Resources Card */}
          <div className="contest-card">
            <h3>Resources</h3>
            <p>Access coding tutorials, articles, and other helpful resources to enhance your skills.</p>
            <a href="/resources" className="card-link">Explore Resources</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
