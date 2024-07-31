// src/components/Admissions.js
import React from 'react';

const Admissions = () => {
  return (
    <div className="p-8 relative top-[60px] bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-8">Admissions</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-green-900 mb-4">Admission Process</h2>
          <p className="text-gray-800 leading-relaxed">
            Admission forms are available for download. Submit the completed form along with required documents at the school office. Entrance tests may be conducted for certain grades.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-green-900 mb-4">Admission Criteria</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Admission is based on merit and availability of seats.</li>
            <li>Entrance tests may be conducted for certain grades.</li>
            <li>Documentation and proof of previous education are required.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-green-900 mb-4">Important Dates</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span className="font-semibold">Admission Form Availability:</span> 
                <span>March 1st</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Last Date for Submission:</span> 
                <span>March 31st</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Entrance Test:</span> 
                <span>April 15th</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Announcement of Results:</span> 
                <span>April 30th</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-green-900 mb-4">Downloadable Forms</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <a href="/path/to/admission-form.pdf" className="text-green-900 hover:underline">
              Download Admission Form
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
