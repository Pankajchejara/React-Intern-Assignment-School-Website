// src/pages/Home.jsx
import React from 'react';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import Academics from './Academics';
import Admissions from './Admissions';
import Students from './Students';
import Faculty from './Faculty';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className='relative top-[60px]'>
      <header className="bg-gray-100 text-green-900  text-center py-10 ">
        <h1 className="text-[50px] font-bold">Welcome to Springdale Public School</h1>
        <p className="mt-2">Nurturing young minds for a brighter future.</p>
      </header>
      <Carousel />
  <Academics/>
  <Students/>
  <Faculty/>
  <Admissions/>
      {/* Quick Links */}
      <div className="py-12 relative top-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/about-us">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">About Us</h3>
                <p className="text-gray-600">Learn more about our history, vision, and mission.</p>
              </div>
            </Link>
            <Link to="/academics">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Academics</h3>
                <p className="text-gray-600">Explore our curriculum and teaching methods.</p>
              </div>
            </Link>
            <Link to="/admissions">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Admissions</h3>
                <p className="text-gray-600">Find out how to apply and important dates.</p>
              </div>
            </Link>
            <Link to="/faculty">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Faculty</h3>
                <p className="text-gray-600">Meet our dedicated team of educators.</p>
              </div>
            </Link>
            <Link to="/students">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Students</h3>
                <p className="text-gray-600">Discover student life and achievements.</p>
              </div>
            </Link>
            <Link to="/gallery">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
                <p className="text-gray-600">View photos and videos of our school events.</p>
              </div>
            </Link>
            <Link to="/contact-us">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
                <p className="text-gray-600">Get in touch with us for any queries.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
