import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to my Portfolio!</h1>

      <div className="button-group">
        <Link to="/about" className="pop-button">
          About Me
        </Link>
        <Link to="/projects" className="pop-button">
          View Projects
        </Link>
      </div>
    </div>
  );
}