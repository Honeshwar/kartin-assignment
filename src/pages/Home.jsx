// Home.js

import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/joy-2483926_640.jpg"; // Import your image

const Home = () => {
  return (
    <div className="w-full h-full md:px-40 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        Elderly Wellness Tracker
      </h1>
      <p className="text-sm text-gray-700 mb-4">
        Welcome to the Elderly Wellness Tracker, designed to promote the health
        and well-being of individuals like Sunita Sharma. Explore the various
        features to support physical activity, mental well-being, and social
        connections.
      </p>
      <h2 className="text-1xl font-bold mb-6 text-indigo-600">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/activity"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
        >
          Activity Tracker
        </Link>
        <Link
          to="/journal"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
        >
          Well-being Journal
        </Link>
        <Link
          to="/medication"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
        >
          Medication Reminder
        </Link>
        <Link
          to="/social"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
        >
          Social Connection Hub
        </Link>
        <Link
          to="/health-tips"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
        >
          Health Tips and Resources
        </Link>
      </div>
    </div>
  );
};

export default Home;
