import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition duration-300">
        Tim Figueroa
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none hover:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-gray-800 md:bg-transparent md:w-auto md:top-0 md:flex-row flex-col space-y-4 md:space-y-0 p-4 md:p-0`}
        >
          <li>
            <Link
              to="/about"
              className="hover:text-blue-400 transition duration-300 text-lg block md:inline"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-blue-400 transition duration-300 text-lg block md:inline"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/photograph"
              className="hover:text-blue-400 transition duration-300 text-lg block md:inline"
            >
              Photography
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
