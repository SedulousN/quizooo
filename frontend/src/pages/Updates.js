import React from 'react';
import './Updates.css';

const Updates = () => {
  return (
    <div className="updates-container">
      <h1>Latest Updates</h1>
      <p>Stay informed about upcoming contests, new features, and platform improvements.</p>
      <ul className="updates-list">
        <li>
          <strong>New Weekly Contest Added:</strong> Join now to challenge yourself with new problems!
        </li>
        <li>
          <strong>Feature Update:</strong> Enhanced leaderboard with detailed performance analytics.
        </li>
        <li>
          <strong>Platform Maintenance:</strong> Scheduled downtime on 2024-11-22 for upgrades.
        </li>
      </ul>
    </div>
  );
};

export default Updates;
