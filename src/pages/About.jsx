// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 relative top-[60px] bg-gradient-to-r from-teal-50 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-teal-900 mb-6">About Us</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-teal-800 mb-3">Our History</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. Over the years, we have evolved to meet the changing needs of education while maintaining our core values and commitment to excellence.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-teal-800 mb-3">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values. We aim to prepare our students to be leaders in their respective fields and to make a positive impact on society.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-teal-800 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world. We are committed to providing a comprehensive education that balances academic rigor with personal development and character building.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-teal-800 mb-3">Message from the Principal</h2>
          <p className="text-gray-700 leading-relaxed">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated staff and innovative programs are designed to support each student’s journey and to help them achieve their fullest potential.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-teal-800 mb-3">Infrastructure and Facilities</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
