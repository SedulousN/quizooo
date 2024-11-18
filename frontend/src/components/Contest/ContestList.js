import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContestList = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contests`);
        setContests(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contests', error);
        setLoading(false);
      }
    };
    fetchContests();
  }, []);

  if (loading) return <p>Loading contests...</p>;

  return (
    <div>
      <h2>Contests</h2>
      <ul>
        {contests.map((contest) => (
          <li key={contest._id}>
            <Link to={`/contests/${contest._id}`}>{contest.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContestList;
