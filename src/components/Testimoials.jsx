import React from 'react'
import p1 from '../assets/person1.jpg'
import p2 from '../assets/person2.jpg'
import p3 from '../assets/person3.jpeg'
import p4 from '../assets/person4.jpg'
import logo from '../assets/logo.png'

function CourierServiceTestimonials() {
  const testimonials = [
    {
      title:
        "The delivery was fast and seamless! My package arrived on time and in perfect condition.",
      client: "Sarah Johnson",
      clientInfo: "E-commerce Business Owner",
      img: p1,
    },
    {
      title:
        "Excellent customer service! They were prompt, reliable, and kept me updated every step of the way.",
      client: "James Smith",
      clientInfo: "Retail Store Owner",
      img: p2,
    },
    {
      title:
        "I trust this courier service for all my urgent shipments. They never let me down!",
      client: "Rachel Green",
      clientInfo: "Event Planner",
      img: p3,
    },
    {
      title:
        "Affordable and quick! I always use this courier service for my business deliveries.",
      client: "Michael Taylor",
      clientInfo: "Startup Founder",
      img: p4,
    },
  ];

  return (
    <section className="px-8 py-10 lg:py-28 bg-white" id='Testimoials'>
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-2xl lg:text-4xl text-gray-800 font-semibold">
          What Our Customers Are Saying
        </h2>
        <p className="max-w-3xl text-gray-600 mb-10 lg:mb-20 mx-auto">
          Our courier service is trusted by businesses and individuals for its speed, reliability, and customer care.
        </p>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((props, key) => (
            <div
              key={key}
              className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out rounded-2xl p-6"
            >
              <div className="mb-4 text-xl font-semibold text-gray-800">
                &quot;{props.title}&quot;
              </div>
              <div className="flex flex-wrap gap-6 justify-center items-center px-4 py-2">
                <div>
                  <h6 className="text-lg text-gray-800 font-medium">{props.client}</h6>
                  <p className="font-normal text-gray-500">{props.clientInfo}</p>
                </div>
                <img
                  src={props.img}
                  className="max-w-[8rem] h-16 w-16 rounded-full border-4 border-gray-100 hover:border-blue-500 transition-all duration-300"
                  alt={props.client}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-white text-center rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
          <div className="mb-4 text-xl lg:text-2xl font-semibold text-gray-800">
            &quot;The best courier service I have ever used! Timely, efficient, and friendly staff.&quot;
          </div>
          <div className="items-center mx-auto py-2">
            <img
              src={logo}
              className="max-w-[8rem] mx-auto grayscale transition-all duration-300 hover:grayscale-0"
              alt="transport company"
            />
            <h6 className="text-gray-800 font-medium">John Doe</h6>
            <p className="font-normal text-gray-500">Logistics Manager @Kezi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourierServiceTestimonials;
