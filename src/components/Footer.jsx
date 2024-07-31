// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="max-w-6xl mx-auto px-4 py-11">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Springdale Public School</h2>
            <p className="text-gray-400">123 Education Lane, Cityville, State, ZIP Code</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400">Email: <a href="mailto:info@springdale.edu" className="text-teal-400 hover:underline">info@springdale.edu</a></p>
          </div>

          {/* <div className="mt-6 md:mt-[80px]">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/about-us" className="text-teal-400 hover:underline">About Us</Link></li>
              <li><Link to="/academics" className="text-teal-400 hover:underline">Academics</Link></li>
              <li><Link to="/admissions" className="text-teal-400 hover:underline">Admissions</Link></li>
              <li><Link to="/faculty" className="text-teal-400 hover:underline">Faculty</Link></li>
              <li><Link to="/students" className="text-teal-400 hover:underline">Students</Link></li>
              <li><Link to="/gallery" className="text-teal-400 hover:underline">Gallery</Link></li>
              <li><Link to="/contact-us" className="text-teal-400 hover:underline">Contact Us</Link></li>
            </ul>
          </div> */}

          <div className="mt-6 md:mt-0   ">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 md:flex-row flex-col">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
