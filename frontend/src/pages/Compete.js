import React from 'react';
import './Compete.css';

const Compete = () => {
  return (
    <div className="compete-container">
      <h1>Compete in Coding Challenges</h1>
      <p>Test your coding skills by participating in a variety of exciting challenges and contests!</p>
      <ul className="contest-list">
        <li>
          <strong>Weekly Contest 1</strong> - <em>Closes on: 2024-11-20</em>
          <a href="/contest/weekly1" className="contest-link">View Contest</a>
        </li>
        <li>
          <strong>Bi-Daily Contest 1</strong> - <em>Closes on: 2024-11-15</em>
          <a href="/contest/bidaily1" className="contest-link">View Contest</a>
        </li>
        <li>
          <strong>Special Quiz</strong> - <em>Closes on: 2024-11-25</em>
          <a href="/contest/specialquiz" className="contest-link">View Quiz</a>
        </li>
      </ul>
    </div>
  );
};

export default Compete;
