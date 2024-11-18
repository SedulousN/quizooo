import React from 'react';
import './Leaderboard.css'; // You can create a separate CSS file for styling

const Leaderboard = () => {
  // Hardcoded leaderboard data
  const leaderboardData = [
    { rank: 1, name: "Alice", score: 1500 },
    { rank: 2, name: "Bob", score: 1425 },
    { rank: 3, name: "Charlie", score: 1350 },
    { rank: 4, name: "David", score: 1285 },
    { rank: 5, name: "Eve", score: 1200 },
    { rank: 6, name: "Frank", score: 1150 },
    { rank: 7, name: "Grace", score: 1100 },
    { rank: 8, name: "Hank", score: 1050 },
    { rank: 9, name: "Ivy", score: 1000 },
    { rank: 10, name: "Jack", score: 950 },
  ];

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player) => (
            <tr key={player.rank}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
