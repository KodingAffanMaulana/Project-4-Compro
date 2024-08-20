import React from 'react';

// Define the type for the service data
type Service = {
  icon: string;
  title: string;
  description: string;
};

// Sample data array
const services: Service[] = [
  {
    icon: '📱',
    title: 'Mobile Application',
    description: `Building mobile applications is never easy. P2P lending app? Logistic App? E-Commerce App? We have done them all. Done them all well Done them all fast.`,
  },
  {
    icon: '💻',
    title: 'Web Application',
    description: `We can build any web applications you need. A personal blog? Company Profile? E-commerce? or any specific functionalities? We got you covered! We have a strong team of web developers that can follow your stack and needs.`,
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: `All things are designed. A few things are designed well. We try to elevate your ideas with great UI/UX design, suited to your taste, addressing the right pain points.`,
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center p-5 md:p-8 container mx-auto md:mt-10 max-w-7xl">
        <div className="flex-1 text-center">
          <img
            src="/assets/bg-what.svg"
            alt="What we do"
            className="rounded-lg max-w-full h-52 md:h-auto shadow-sm"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 py-5 md:py-0 text-center md:text-left">What We Do?</h2>
          {services.map((service, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-4">{service.icon}</span>
                <h3 className="md:text-2xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center py-8 bg-white">
        <div className="relative flex items-center justify-center">
          <img
            src="/assets/bg-work.svg"
            alt="How We Work"
            className="rounded-lg max-w-full w-[4000px] h-[300px] md:h-[400px] object-cover shadow-lg"
          />
          <div className="absolute bg-white p-8 shadow-xl md:-translate-x-1/4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">How We Work?</h2>
            <p className="text-gray-600 mb-6">Let's discuss what projects you have in mind</p>
            <button className="bg-gray-800 text-white py-2 px-6 rounded-full">
              Let's Have a Coffee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
