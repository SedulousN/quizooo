import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About CPP Coding Club</h1>
      <p className="about-description">
        Welcome to the CPP Coding Club! Our mission is to foster a community of passionate coders and problem-solvers. 
        We organize weekly and bi-daily contests to sharpen your coding skills and help you excel in competitive programming. 
        Join us to connect, learn, and grow together!
      </p>
      <div className="about-features">
        <div className="feature">
          <h3>📚 Learning</h3>
          <p>Enhance your coding knowledge with structured contests and tutorials.</p>
        </div>
        <div className="feature">
          <h3>🏆 Competitions</h3>
          <p>Participate in exciting contests to test and showcase your skills.</p>
        </div>
        <div className="feature">
          <h3>🤝 Community</h3>
          <p>Be a part of a vibrant community of coders and share your journey.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
