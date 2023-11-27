import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = ({ onLogout }) => {
  const { user } = useAuth();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link
          to="/"
          className="text-white text-3xl font-bold flex items-center"
        >
          <span className="mr-2">
            <FaHome />
          </span>{" "}
          Chat Nest
        </Link>

        {/* Responsive Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-xl lg:hidden focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Options */}
        <div
          className={`lg:flex items-center absolute top-full left-0 bg-white lg:bg-transparent lg:relative lg:items-center ${
            isMenuOpen ? "block" : "hidden"
          } lg:inline-block lg:w-auto lg:mt-0 mt-4 rounded-lg  shadow-lg `}
        >
          <Link
            to="/"
            className="text-gray-800 lg:text-white block px-4 py-2 lg:py-0 lg:hover:bg-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/membership"
            className="text-gray-800 lg:text-white block px-4 py-2 lg:py-0 lg:hover:bg-gray-300 transition duration-300"
          >
            Membership
          </Link>
          {user && (
            <div className="relative m-2 flex justify-center">
              {/* Notification Icon */}

              {/* User Profile Dropdown */}
              <div onClick={toggleProfileDropdown} className="cursor-pointer">
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-800 cursor-pointer transform hover:scale-110 transition-transform"
                />
                {isProfileDropdownOpen && (
                  <ProfileDropdown onLogout={onLogout} />
                )}
              </div>
            </div>
          )}
          {!user && (
            <Link
              to="/sign-in"
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
