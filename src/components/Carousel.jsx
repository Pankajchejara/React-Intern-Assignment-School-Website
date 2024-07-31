// src/components/Carousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import firstimg from '../images/science_exhibition.jpg'
import secondimg from '../images/cultural_fest.jpg'
import thirdimg from '../images/sports_day.jpg'

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop >
      <div>
        <img src={firstimg} alt=" Science Exhibition" />
        <p className="legend"> Science Exhibition - Showcasing Student Innovations</p>
      </div>
      <div>
        <img src={secondimg} alt=" Cultural Fest" />
        <p className="legend"> Cultural Fest - Embracing Diversity and Creativity </p>
      </div>
      <div>
        <img src={thirdimg} alt=" Annual Sports Day" />
        <p className="legend">Annual Sports Day - Celebrating Excellence in Sports</p>
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
