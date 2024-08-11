import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Success = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <div className="flex justify-center items-center w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full">
          <svg
            className="w-16 h-16 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Transaction Successful</h1>
        <p className="text-gray-600">Your transaction was completed successfully.</p>
        <div>
        <Link to="/dashboard">
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Go to dashboard</button>
        </Link>
           
        </div>
      </div>
    </div>
  );
};
