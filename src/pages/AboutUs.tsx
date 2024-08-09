import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container max-w-7xl mx-auto my-10">
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
      <h2 className="text-xl font-bold mt-6 mb-2">Our Location</h2>
      <div className="h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.075639257789!2d-122.41941868468143!3d37.77492927975884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809b1b4c0b71%3A0x78edb6bbf393fa8d!2sCompany%20Location!5e0!3m2!1sen!2sus!4v1612206869293!5m2!1sen!2sus"
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
