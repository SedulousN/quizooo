import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ContestList from './components/Contest/ContestList';
import ContestDetails from './components/Contest/ContestDetails';
import CreateContest from './components/Contest/CreateContest';
import Riddle from './components/Contest/Riddle';
import Leaderboard from './components/Contest/Leaderboard';
import Performance from './components/User/Performance';
import AdminDashboard from './components/Admin/AdminDashboard';
import Modal from './components/Modal/Modal'; // We'll create this component for pop-up modals.
import Compete from './pages/Compete'; // Import Compete page
import Practice from './pages/Practice'; // Import Practice page
import Updates from './pages/Updates'; // Import Updates page
import Resources from './pages/Resources'; // Import Resources page
import './App.css';
import Contests from './components/Contest/Contests';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'login' or 'register'

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Clear the token on logout
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setModalType(null); // Close modal by setting modalType to null
  };

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        openModal={openModal}
      />
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} onLogout={handleLogout} openModal={openModal} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contests" element={<Contests />} />
        <Route path="/contestslist" element={<ContestList />} />
        <Route path="/contests/:id" element={<ContestDetails />} />
        <Route path="/create-contest" element={<CreateContest />} />
        <Route path="/riddle/:id" element={<Riddle />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* New Routes */}
        <Route path="/compete" element={<Compete />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)} type={modalType} onLogin={handleLogin} />
      )}
    </Router>
  );
};

export default App;
