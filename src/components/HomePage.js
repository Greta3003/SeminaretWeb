import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/contact">
        <button>Go to Contact Us</button>
      </Link>
    </div>
  );
}

export default HomePage; 