
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 z-50 fixed top-0 w-full overflow-hidden">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:justify-between lg:items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/"><img src="https://placehold.co/100x30/000000/FFF" alt="" /></Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About Us</Link>
        
          <Link to="/gallery" className="text-white hover:text-gray-400">Gallery</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact Us</Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center z-50">
        <div className="text-white text-xl font-bold">
          <Link to="/">Springdale Public School</Link>
        </div>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? '' : '☰'}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className={`lg:hidden  fixed inset-0 bg-gray-800 text-white p-4 z-50 transition-transform transform ${isOpen ? 'translate-x-0 w-1/3' : 'translate-x-full'}`}>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl float-right"
        >
          ×
        </button>
        <ul className="space-y-4 mt-8">
          <li><Link to="/" onClick={toggleMenu} className="text-white hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="text-white hover:text-gray-400">About Us</Link></li>

          <li><Link to="/gallery" onClick={toggleMenu} className="text-white hover:text-gray-400">Gallery</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="text-white hover:text-gray-400">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
