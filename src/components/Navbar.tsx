import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl">New Insights</Link>
        <div>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/products" className="text-white px-4">Products</Link>
          <Link to="/about" className="text-white px-4">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
