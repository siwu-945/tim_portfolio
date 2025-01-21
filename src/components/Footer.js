import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-700 pt-4" >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">About</h4>
          <p className="text-gray-400">
            My name is Tim. Xddddddddddddd

          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/photograph" className="hover:text-blue-400 transition">
                Photography
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: your.email@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Location: Your City, Country</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 ">
        &copy; {new Date().getFullYear()} Tim Figueroa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
