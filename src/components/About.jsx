import React from 'react';
import img1 from '../assets/img1.jpg';

const About = () => {
  return (
    <div
      className="flex flex-col items-center container mx-auto py-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      {/* Title Section */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        About <span className="underline underline-offset-4 decoration-orange-500">Our Brand</span>
      </h1>
      <p className="text-gray-500 max-w-2xl text-center mb-8">
        Kezi ensures fast, secure, and reliable deliveries worldwide.
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16">
        {/* Image Section */}
        <img
          src={img1}
          alt="Kezi Delivery Service"
          className="w-2/3 md:w-1/2 max-w-xs rounded-lg shadow-md"
        />

        {/* Info Section */}
        <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-600">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full">
            <div>
              <p className="text-4xl font-semibold text-gray-800">5+</p>
              <p>Years of Reliable Service</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">500k+</p>
              <p>Parcels Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">98%</p>
              <p>Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">150+</p>
              <p>Cities Covered Nationwide</p>
            </div>
          </div>

          {/* Description */}
          <p className="my-10 max-w-lg text-center md:text-left">
            At Kezi, we provide reliable and fast courier services with a focus on customer satisfaction.
            With over 5+ years of experience, we ensure your parcels are delivered safely and on time,
            whether locally or internationally. Our team uses the latest technology to offer a seamless
            delivery experience, tailored to meet your needs. Trust us to be your reliable courier partner,
            always evolving to serve you better.
          </p>

          {/* Call-to-Action Button */}
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
