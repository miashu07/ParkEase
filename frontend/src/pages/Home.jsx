import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">ParkEase</h1>
        <p className="text-gray-600 mb-8">Smart Parking Management System</p>
        <div className="space-x-4">
          <Link 
            to="/login" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;