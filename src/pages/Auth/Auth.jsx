import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const message = "Welcome! Please authenticate yourself to access your account. Choose an option below to get started.";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-16">
        <p className="text-2xl text-gray-700 mb-10">{message}</p>
        <h1 className="text-6xl font-bold text-green-700 mb-14">Authentication</h1>
        <p className="text-lg text-gray-600 mb-14">
          Secure your data and protect your account by signing in or creating a new account. 
          Your security is our top priority.
        </p>
        <div className="space-x-8">
          <Link to="signin">
            <button className="bg-green-600 text-white py-4 px-12 rounded-full font-semibold text-lg hover:bg-green-500 transition-transform transform hover:scale-110 duration-300">
              Sign In
            </button>
          </Link>

          <Link to="signup">
            <button className="bg-green-600 text-white py-4 px-12 rounded-full font-semibold text-lg hover:bg-green-500 transition-transform transform hover:scale-110 duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
