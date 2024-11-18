import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout, openModal }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <h1 className="logo">CPP Coding Club</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav ref={menuRef} className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/contests" onClick={() => setMenuOpen(false)}>Contests</Link>
              </li>
              <li>
                <Link to="/leaderboard" onClick={() => setMenuOpen(false)}>Leaderboard</Link>
              </li>
              <li>
                <Link to="/create-contest" onClick={() => setMenuOpen(false)}>Create Contest</Link>
              </li>
            </>
          )}

          {isLoggedIn ? (
            <li>
              <button className="logout-btn" onClick={() => { onLogout(); setMenuOpen(false); }}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <button className="login-btn" onClick={() => { openModal('login'); setMenuOpen(false); }}>
                  Login
                </button>
              </li>
              <li>
                <button className="register-btn" onClick={() => { openModal('register'); setMenuOpen(false); }}>
                  Register
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
