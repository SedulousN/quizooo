import React from 'react';
import './Home.css';

const Home = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="home-container">
      {/* Left Panel */}
      <div className="left-panel">
        <h3>Upcoming Contests</h3>
        <ul>
          <li>
            <strong>Weekly Contest 1</strong> <br /> Date: 2024-11-20
          </li>
          <li>
            <strong>Bi-Daily Contest 1</strong> <br /> Date: 2024-11-15
          </li>
          <li>
            <strong>Special Quiz</strong> <br /> Date: 2024-11-25
          </li>
        </ul>
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
