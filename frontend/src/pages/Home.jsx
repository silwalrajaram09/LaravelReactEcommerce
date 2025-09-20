import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
        Welcome to StyleShop
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Your one-stop shop for fashion, electronics, and more.
      </p>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition"
        >
          Register
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
