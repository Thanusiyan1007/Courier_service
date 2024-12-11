import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import img4 from '../assets/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration.png';
import img5 from '../assets/courier-cut-out-mobile-phone-shipping-pile.jpg';
import img6 from '../assets/online-logistics.jpg';

// Sample data for services
const services = [
  {
    title: "Express Delivery",
    description: "Fast and reliable delivery service for urgent packages.",
    image: img4,
  },
  {
    title: "International Shipping",
    description: "Global shipping solutions to reach destinations worldwide.",
    image: img5,
  },
  {
    title: "E-Commerce Logistics",
    description: "Efficient logistics tailored for online businesses.",
    image: img6,
  },
];

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container mx-auto py-12 px-6 md:px-20 lg:px-32 w-full"
      id="Services"
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-gray-800">
        Our <span className="underline underline-offset-4 decoration-orange-500">Services</span>
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore a range of reliable and efficient delivery solutions tailored to meet your needs.
      </p>

      {/* Service Slider Container */}
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 p-3 bg-gray-100 rounded-full hover:bg-orange-100 transition-all"
          onClick={prevSlide}
          aria-label="Previous service"
        >
          <FaArrowAltCircleLeft className="text-orange-500 text-2xl" />
        </button>

        <div className="w-full md:w-4/5 h-[300px] md:h-[400px] overflow-hidden rounded-lg">
          <img
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          className="absolute right-0 p-3 bg-gray-100 rounded-full hover:bg-orange-100 transition-all"
          onClick={nextSlide}
          aria-label="Next service"
        >
          <FaArrowAltCircleRight className="text-orange-500 text-2xl" />
        </button>
      </div>

      <div className="text-center mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {services[currentIndex].title}
        </h2>
        <p className="text-gray-600 mt-2">{services[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default Service;
