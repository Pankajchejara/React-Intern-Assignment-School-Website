// src/components/Academics.js
import React from 'react';

// Dummy data for academics
const curriculumData = {
  primary: [
    'English',
    'Mathematics',
    'Science',
    'Social Studies',
    'Art',
    'Physical Education',
  ],
  secondary: [
    'English',
    'Mathematics',
    'Science (Physics, Chemistry, Biology)',
    'Social Studies',
    'Computer Science',
    'Physical Education',
    'Art',
  ],
  seniorSecondaryScience: [
    'Physics',
    'Chemistry',
    'Biology',
    'Mathematics',
    'Computer Science',
    'English',
  ],
  seniorSecondaryCommerce: [
    'Accountancy',
    'Business Studies',
    'Economics',
    'Mathematics',
    'English',
  ],
};

const Academics = () => {
  return (
    <div className="p-8 relative top-[60px] bg-gradient-to-r from-yellow-50 to-green-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-8">Our Academic Curriculum</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Primary Curriculum</h2>
          <ul className="list-disc list-inside text-gray-800">
            {curriculumData.primary.map((subject, index) => (
              <li key={index} className="mb-2">{subject}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Secondary Curriculum</h2>
          <ul className="list-disc list-inside text-gray-800">
            {curriculumData.secondary.map((subject, index) => (
              <li key={index} className="mb-2">{subject}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Senior Secondary - Science Stream</h2>
          <ul className="list-disc list-inside text-gray-800">
            {curriculumData.seniorSecondaryScience.map((subject, index) => (
              <li key={index} className="mb-2">{subject}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Senior Secondary - Commerce Stream</h2>
          <ul className="list-disc list-inside text-gray-800">
            {curriculumData.seniorSecondaryCommerce.map((subject, index) => (
              <li key={index} className="mb-2">{subject}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Academics;
