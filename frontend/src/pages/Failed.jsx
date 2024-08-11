import React from 'react';
import { Link } from 'react-router-dom';

export const Failed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <div className="flex justify-center items-center w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full">
          <svg
            className="w-16 h-16 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-4">Your transaction could not be processed.</p>
        
        <Link to={"/dashboard"}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Try Again
        </button>
        </Link>
      </div>
    </div>
  );
};

