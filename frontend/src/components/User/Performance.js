import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Performance = () => {
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    const fetchPerformance = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/performance', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPerformance(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPerformance();
  }, []);

  return (
    <div>
      <h2>Your Performance</h2>
      <ul>
        {performance.map((entry) => (
          <li key={entry._id}>
            Contest: {entry.contestTitle}, Score: {entry.score}, Rank: {entry.rank}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Performance;
