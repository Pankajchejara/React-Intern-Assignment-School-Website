import React, { useState } from 'react';
import sports_day from '../images/sports_day.jpg';
import science_exhibition from '../images/science_exhibition.jpg';
import cultural_fest from '../images/cultural_fest.jpg';
import classroom from '../images/classroom.jpg';
import library from '../images/library.jpg';
import school_tour from '../images/school_tour.mp4';
import annual_function from '../images/school_tour.mp4';

// Dummy data for gallery
const galleryData = {
  images: [
    { src: sports_day, alt: 'Sports Day', type: 'image' },
    { src: science_exhibition, alt: 'Science Exhibition', type: 'image' },
    { src: cultural_fest, alt: 'Cultural Fest', type: 'image' },
    { src: classroom, alt: 'Classroom', type: 'image' },
    { src: library, alt: 'Library', type: 'image' },
  ],
  videos: [
    { src: school_tour, title: 'School Tour', type: 'video' },
    { src: annual_function, title: 'Annual Function Highlights', type: 'video' },
  ],
};

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? [...galleryData.images, ...galleryData.videos]
    : filter === 'images'
    ? galleryData.images
    : galleryData.videos;

  return (
    <div className="p-8 relative top-[60px] bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Gallery</h1>

        <div className="flex justify-center mb-8 space-x-4">
          <button
            className={`px-4 py-2 font-semibold rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-700 hover:text-white`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-lg ${filter === 'images' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-700 hover:text-white`}
            onClick={() => setFilter('images')}
          >
            Images
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-lg ${filter === 'videos' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-700 hover:text-white`}
            onClick={() => setFilter('videos')}
          >
            Videos
          </button>
        </div>

        <div className="flex flex-wrap -mx-2">
          {filteredItems.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                {item.type === 'video' ? (
                  <div className="relative w-full h-48">
                    <video className="w-full h-full object-cover" controls>
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xl font-bold">{item.title}</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-48">
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xl font-bold">{item.alt}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
