import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ContestDetails.css'; // Optional: Add styles for this page

const ContestDetails = () => {
  const { id } = useParams(); // Use URL parameter (id) to fetch the specific contest
  const [contest, setContest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/contests/${id}`);
        setContest(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load contest details. Please try again later.');
        setLoading(false);
      }
    };

    fetchContestDetails();
  }, [id]);

  if (loading) return <p>Loading contest details...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="contest-details">
      {contest ? (
        <div>
          <h2>{contest.name}</h2>
          <p><strong>Type:</strong> {contest.type}</p>
          <p><strong>Date:</strong> {new Date(contest.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> {contest.time}</p>
          <p><strong>Description:</strong> {contest.description}</p>
          {contest.file && (
            <div>
              <a href={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/${contest.file}`} target="_blank" rel="noopener noreferrer">
                Download File
              </a>
            </div>
          )}
        </div>
      ) : (
        <p>Contest not found</p>
      )}
    </div>
  );
};

export default ContestDetails;
