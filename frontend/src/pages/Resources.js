import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>Coding Resources</h1>
      <p>Explore tutorials, articles, and helpful tools to boost your coding journey.</p>
      <ul className="resources-list">
        <li>
          <strong>Beginner's Guide to Dynamic Programming</strong>
          <a href="https://www.example.com/dp-guide" target="_blank" rel="noopener noreferrer" className="resource-link">Read Article</a>
        </li>
        <li>
          <strong>10 Tips to Ace Competitive Programming</strong>
          <a href="https://www.example.com/cp-tips" target="_blank" rel="noopener noreferrer" className="resource-link">Read Article</a>
        </li>
        <li>
          <strong>Learn React for Frontend Development</strong>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="resource-link">Visit Official Docs</a>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
