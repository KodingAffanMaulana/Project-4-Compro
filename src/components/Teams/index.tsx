import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const teamMembers = [
  {
    name: 'Elisabeth Be',
    title: 'CEO',
    image: '/assets/pp3.png', // Replace with actual image URL
  },
  {
    name: 'Andree Wijaya',
    title: 'CEO/CTO',
    image: '/assets/pp2.png', // Replace with actual image URL
  },
  {
    name: 'Sanjaya Wahono',
    title: 'CFO',
    image: '/assets/pp1.png', // Replace with actual image URL
  },
  {
    name: 'Another Member',
    title: 'CTO',
    image: '/assets/pp2.png', // Replace with actual image URL
  },
];

const TeamSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Team</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="max-w-4xl"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex flex-col justify-center items-center transition-transform duration-300">
            <img
              src={member.image}
              alt={member.name}
              className={`rounded-full mb-4 object-cover flex items-center transition-transform duration-300 ${index === activeIndex ? 'w-64 h-64' : 'w-52 h-52'
                }`}
            />
            <h3 className={`text-xl font-semibold ${index === activeIndex ? 'text-gray-800' : 'text-gray-500'}`}>
              {member.name}
            </h3>
            <p className={`transition-all duration-300 ${index === activeIndex ? 'text-gray-500' : 'text-gray-400'}`}>
              {member.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
