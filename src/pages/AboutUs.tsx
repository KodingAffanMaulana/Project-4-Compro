import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className="container max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">CompanyName is dedicated to providing top-notch products and services.</p>
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="border p-2 w-full" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="border p-2 w-full"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
      <div className="h-[400px] pt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3542560816677!2d105.23070961056233!3d-5.362808294593502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c551cf06c189%3A0x2674968790625649!2sRaffles%20Residence!5e0!3m2!1sid!2sid!4v1724146403752!5m2!1sid!2sid"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
