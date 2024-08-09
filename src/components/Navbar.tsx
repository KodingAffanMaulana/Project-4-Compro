import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white font-asa font-semibold p-4 border-b-2 border-dashed">
      <div className="container max-w-7xl h-[50px] mx-auto flex justify-between items-center">
        <Link to="/" className="">New <span className='font-asap text-green-600 font-bold'>Insights</span></Link>
        <div className='gap-5 flex items-center'>
          <Link to="/" className="hover:border-b-2">Home</Link>
          <Link to="/products" className="hover:border-b-2">Products</Link>
          <Link to="/about" className="hover:border-b-2">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
