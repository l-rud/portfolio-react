import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to my Portfolio!</h1>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
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