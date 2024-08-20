import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 overflow-hidden">
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 w-full md:pt-5'>
          <div className='w-12/12 flex flex-col items-start md:items-center'>
            <h1 className='text-2xl w-full md:text-center font-bold pb-5'>Location</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3542560816677!2d105.23070961056233!3d-5.362808294593502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c551cf06c189%3A0x2674968790625649!2sRaffles%20Residence!5e0!3m2!1sid!2sid!4v1724146403752!5m2!1sid!2sid"
              height="150"
              className='w-full'
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
          <div className='w-/12 flex flex-col items-start md:items-center'>
            <h1 className='text-2xl w-full md:text-center  font-bold pt-5 md:pt-0  pb-5'>Company</h1>
            <ul className='gap-12/12 flex flex-col'>
              <li>- Work</li>
              <li>- Service</li>
              <li>- Team</li>
              <li>- Contact</li>
            </ul>
          </div>
          <div className='w-/12 flex flex-col items-start md:items-center'>
            <h1 className='text-2xl w-full md:text-center  font-bold pt-5 md:pt-0 pb-5'>Product</h1>
            <ul className='gap-12/12 flex flex-col'>
              <li>- Work</li>
              <li>- Service</li>
              <li>- Team</li>
              <li>- Contact</li>
            </ul>
          </div>
          <div className='w-12/12 flex justify-start md:justify-end'>
            <div className='flex flex-col items-start md:items-center'>
              <h1 className='text-2xl w-full font-bold pt-5 md:pt-0 pb-5'>Contact Us</h1>
              <ul className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                  <img src="/assets/fb.svg" alt="fb" className='w-8 h-8' />
                  <p className='text-nowrap'>Affan Maulana</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src="/assets/ig.svg" alt="fb" className='w-8 h-8' />
                  <p className='text-nowrap'>Affan Maulana</p>
                </div>
                <div className='flex items-center gap-2'>
                  <img src="/assets/linkedin.svg" alt="fb" className='w-8 h-8' />
                  <p className='text-nowrap'>Affan Maulana</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto border-t mt-7">
          <p className='pt-3'>&copy; 2024 Pt Affan Maulana. All rights reserved.</p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
