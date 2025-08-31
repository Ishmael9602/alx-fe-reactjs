import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <Link to="/profile" className="text-blue-500 hover:underline">Go to Profile</Link>
    </div>
  );
}

export default Home;
