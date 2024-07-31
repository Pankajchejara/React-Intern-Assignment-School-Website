// src/components/Faculty.js
import React from 'react';

// Dummy data for faculty
const facultyData = [
  {
    name: 'John Doe',
    position: 'Principal',
    qualifications: 'M.Ed',
    experience: '20 years of experience in educational administration',
  },
  {
    name: 'Jane Smith',
    position: 'Vice Principal',
    qualifications: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
  },
  {
    name: 'Emily Johnson',
    position: 'English Teacher',
    qualifications: 'M.A. in English',
    experience: '10 years of teaching experience',
  },
  {
    name: 'Michael Brown',
    position: 'Mathematics Teacher',
    qualifications: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
  },
  {
    name: 'Sophia Davis',
    position: 'Science Teacher',
    qualifications: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
  },
  {
    name: 'David Wilson',
    position: 'Computer Science Teacher',
    qualifications: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
  },
];

const Faculty = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen  relative top-[60px]">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Faculty</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {facultyData.map((faculty, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">{faculty.name}</h2>
            <p className="text-gray-700 mb-1">{faculty.position}</p>
            <p className="text-gray-600 mb-2">{faculty.qualifications}</p>
            <p className="text-gray-500">{faculty.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
