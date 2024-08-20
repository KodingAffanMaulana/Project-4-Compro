import React from 'react';

const logos = [
  "/assets/team1.svg",
  "/assets/team2.svg",
  "/assets/team3.svg",
  "/assets/team4.svg",
  "/assets/team5.svg",
  "/assets/team5.svg",
  "/assets/team4.svg",
  "/assets/team3.svg",
  "/assets/team2.svg",
  "/assets/team1.svg",
  "/assets/team2.svg",
  "/assets/team5.svg",
  "/assets/team3.svg",
  "/assets/team4.svg",
  "/assets/team1.svg",
];

const OurCustomers: React.FC = () => {
  return (
    <div className="container mx-auto pb-10  max-w-7xl bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Customers</h2>
      <p className="text-xl text-gray-600 mb-10">are our biggest fans</p>
      <div className="flex-wrap justify-center items-center gap-3 grid col-span-5 grid-cols-5">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Customer logo ${index + 1}`}
            className="h-28 w-full object-contain rounded-md shadow-md"
          />
        ))}
      </div>
      <a href="#" className="text-gray-600 hover:underline">
        see more
      </a>
    </div>
  );
};

export default OurCustomers;
