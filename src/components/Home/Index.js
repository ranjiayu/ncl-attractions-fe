import React from 'react';
import { Link } from 'react-router-dom';

function HomeIndex() {
  return (
    <div className="Home">
      <header>
        <p>Home</p>
        <p><Link to="/result">To result page</Link></p>
        <p><Link to="/place">To place detail page</Link></p>
      </header>
    </div>
  );
}

export default HomeIndex;
