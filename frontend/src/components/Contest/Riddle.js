import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Riddle = () => {
  const { id } = useParams();
  const [riddle, setRiddle] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRiddle = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/contests/${id}/riddle`);
        setRiddle(response.data.riddle);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRiddle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/contests/${id}/riddle`, { answer });
      if (response.data.correct) {
        navigate(`/contests/${id}`);
      } else {
        setError('Incorrect answer. Try again!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Riddle</h2>
      <p>{riddle}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
};

export default Riddle;
