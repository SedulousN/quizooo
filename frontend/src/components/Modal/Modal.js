import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';

const Modal = ({ closeModal, type, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setIsLoading(true); // Show loading state
  
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const endpoint = type === 'login' ? `${apiUrl}/api/auth/login` : `${apiUrl}/api/auth/register`;
  
      const response = await axios.post(endpoint, { email, password });
      console.log("Response from server:", response); // Log the response to see if the token is being returned
  
      localStorage.setItem('token', response.data.token);
      onLogin();
      closeModal();
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'An error occurred');
      } else {
        setError('Network error or unexpected issue');
      }
    } finally {
      setIsLoading(false); // Hide loading state after the request
    }
  };
  

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : type === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
