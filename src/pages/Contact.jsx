// src/components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-8 relative top-[60px] bg-gradient-to-r from-green-50 to-teal-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-semibold text-teal-800 mb-4">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-semibold text-teal-800 mb-4">Our Location</h2>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <iframe
                title="Google Maps Location"
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.085381131679!2d77.6101!3d28.5605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6d6cda3f4d15%3A0x2c6d5f2f53e0a7f0!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1678883586332!5m2!1sen!2sin"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="text-center text-gray-800">
              <p className="text-lg font-semibold">Springdale Public School</p>
              <p>123 Education Lane, Cityville, State, ZIP Code</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Email: <a href="mailto:info@springdale.edu" className="text-teal-600 hover:underline">info@springdale.edu</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
