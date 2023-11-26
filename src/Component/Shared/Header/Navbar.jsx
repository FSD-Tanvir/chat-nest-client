/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes,  FaUser, FaSignOutAlt } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';

const Navbar = ({ isLoggedIn, profilePicture, onLogout }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link to="/" className="text-white text-3xl font-bold flex items-center">
          <span className="mr-2">🌐</span> Chat Nest
        </Link>

        {/* Responsive Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-xl lg:hidden focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Options */}
        <div className={`lg:flex items-center absolute top-full left-0 bg-white lg:bg-transparent lg:relative lg:items-center ${isMenuOpen ? 'block' : 'hidden'} lg:inline-block lg:w-auto lg:mt-0 mt-4 rounded-lg overflow-hidden shadow-lg`}>
          <Link to="/" className="text-gray-800 lg:text-white block px-4 py-2 lg:py-0 lg:hover:bg-gray-300 transition duration-300">
            Home
          </Link>
          <Link to="/membership" className="text-gray-800 lg:text-white block px-4 py-2 lg:py-0 lg:hover:bg-gray-300 transition duration-300">
            Membership
          </Link>
          {isLoggedIn && (
            <div className="flex items-center">
              {/* Notification Icon */}
              <div className="mr-4">
                <MdNotifications size={24} className="text-gray-800 hover:text-indigo-500 transition duration-300" />
              </div>

              {/* User Profile Dropdown */}
              <div className="flex items-center">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2 border-2 border-gray-800 cursor-pointer transform hover:scale-110 transition-transform"
                  onClick={toggleMenu}
                />
                <div className="text-gray-800 cursor-pointer">
                  <span className="mr-2">User Name</span>
                  <div className="flex items-center">
                    <button
                      className="px-4 py-2 block lg:py-0 lg:hover:bg-gray-300 transition duration-300"
                      onClick={() => console.log("Dashboard Clicked")}
                    >
                      <FaUser className="mr-2" />
                      Dashboard
                    </button>
                    <button
                      onClick={onLogout}
                      className="px-4 py-2 block lg:py-0 lg:hover:bg-gray-300 transition duration-300"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!isLoggedIn && (
            <Link
              to="/join"
              className="text-gray-800 lg:hover:bg-gray-300 px-4 py-2 block lg:py-0 transform transition-transform duration-300"
            >
              Join Us
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


