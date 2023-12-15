// AsideNav.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AsideNav = () => {
  // Use the useLocation hook to get the current path
  const location = useLocation();
  // Access the path from the location object
  const currentPath = location.pathname; // Use the useLocation hook to get the current path

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="px-1 pb-1 md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none focus:text-gray text-2xl "
        >
          {isMenuOpen ? "✕" : "☰"} {/* Hamburger icon , &#9776;&#10060;*/}
        </button>
      </div>
      <aside
        className={`bg-gray-800 text-white h-screen w-full p-4 ${
          isMenuOpen ? "block" : "hidden"
        } md:block md:w-1/4 mb-4`}
      >
        <Link to="/" className="flex items-center mb-8">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt="icon"
          />
          <h1>Healthy Life</h1>
        </Link>
        <nav className=" md:block">
          <ul className="flex flex-col gap-3 h-[calc(100vh-150px)]">
            <hr />
            <Link
              to="/"
              className={`${
                currentPath === "/" && "bg-gray-400"
              } hover:bg-gray-400`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-6 h-6 rounded-full mr-4 bg-blue-400"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Home
              </li>
            </Link>
            <Link
              to="/activity-tracker"
              className={`${
                currentPath === "/activity-tracker" && "bg-gray-400"
              } hover:bg-gray-400`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-6 h-6 rounded-full mr-4"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Activity Tracker
              </li>
            </Link>
            <Link
              to="/journal"
              className={`${
                currentPath === "/journal" && "bg-gray-400"
              } hover:bg-gray-400`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-6 h-6 rounded-full mr-4"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Well-being Journal
              </li>
            </Link>
            <Link
              to="/medication"
              className={`${
                currentPath === "/medication" && "bg-gray-400"
              } hover:bg-gray-400`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-6 h-6 rounded-full mr-4"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Medication Reminder
              </li>
            </Link>
            <Link
              to="/social"
              className={`${
                currentPath === "/social" && "bg-gray-400"
              } hover:bg-gray-400`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-6 h-6 rounded-full mr-4"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Social Hub
              </li>
            </Link>
            <Link
              to="/health-tips"
              className={`${
                currentPath === "/health-tips" && "bg-gray-400"
              } hover:bg-gray-400`}
              onClick={() => setIsMenuOpen(false)}
            >
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-6 h-6 rounded-full mr-4"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Health Tips
              </li>
            </Link>
            <hr />
            <Link to="" className="" onClick={() => setIsMenuOpen(false)}>
              <li className="p-5 px-3 flex items-center">
                <img
                  className="w-6 h-6 rounded-full mr-4"
                  src="https://via.placeholder.com/150"
                  alt="icon"
                />
                Settings
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default AsideNav;
