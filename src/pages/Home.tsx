import React from 'react';
import Header from '../components/Header';
import WhyChooseUs from '../components/WhyChooseUs';
import WhatWeDo from '../components/What We Do';
import OurCustomers from '../components/OurCustomers';
import TeamSlider from '../components/Teams';

const Home: React.FC = () => {
  return (
    <main>
      <div className="container mx-auto my-10 max-w-7xl min-h-[72.5vh]">
        <Header />
      </div>
      <WhatWeDo />
      <WhyChooseUs />
      <OurCustomers />
      <TeamSlider />
    </main>
  );
};

export default Home;
