// src/components/Students.js
import React from 'react';

// Dummy data for students
const studentData = [
  {
    name: 'John Smith',
    achievement: 'National Level Math Olympiad Winner',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sarah Lee',
    achievement: 'Gold Medalist in State Swimming Championship',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Tech Innovators Club',
    achievement: 'Winners of Inter-School Robotics Competition',
    image: 'https://via.placeholder.com/150',
  },
];

const Students = () => {
  return (
    <div className="p-8 relative top-[60px] bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Our Outstanding Students</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {studentData.map((student, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col items-center">
            <img
              src={student.image}
              alt={student.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{student.name}</h2>
            <p className="text-gray-700">{student.achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
