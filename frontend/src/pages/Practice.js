import React from 'react';
import './Practice.css';

const Practice = () => {
  return (
    <div className="practice-container">
      <h1>Practice Coding Problems</h1>
      <p>Hone your coding skills with problems ranging from beginner to advanced levels.</p>
      <ul className="practice-list">
        <li>
          <strong>Problem 1:</strong> Reverse a Linked List
          <a href="/practice/reverse-linked-list" className="practice-link">Solve Now</a>
        </li>
        <li>
          <strong>Problem 2:</strong> Longest Common Subsequence
          <a href="/practice/lcs" className="practice-link">Solve Now</a>
        </li>
        <li>
          <strong>Problem 3:</strong> Dijkstra's Algorithm
          <a href="/practice/dijkstra" className="practice-link">Solve Now</a>
        </li>
      </ul>
    </div>
  );
};

export default Practice;
