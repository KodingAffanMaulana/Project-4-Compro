import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white font-semibold p-4 border-b-2 border-dashed max-w-7xl mx-auto ">
      <div className="h-[50px] flex justify-between items-center w-full ">
        {/* hamburger menu */}
        <Link to="/" className="text-xl w-full">
          New <span className="font-asap text-green-600 font-bold">Insights</span>
        </Link>
        <div className="w-full md:hidden flex justify-end">
          <button onClick={toggleSidebar} aria-label="Toggle menu">
            <img src="/assets/stack.svg" alt="Menu" className='w-10 h-10' />
          </button>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          <Link to="/" className="hover:border-b-2">Home</Link>
          <Link to="/products" className="hover:border-b-2">Products</Link>
          <Link to="/about" className="hover:border-b-2">About Us</Link>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-white shadow-lg transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        <div className='w-full flex justify-end p-4'>
          <img src="/assets/close.svg" alt="Hamburger close" className='w-10 h-10 cursor-pointer' onClick={toggleSidebar} />
        </div>
        <div className="flex flex-col items-center mt-20">
          <Link to="/" className="p-4 hover:bg-gray-200 w-full text-center">Home</Link>
          <Link to="/products" className="p-4 hover:bg-gray-200 w-full text-center">Products</Link>
          <Link to="/about" className="p-4 hover:bg-gray-200 w-full text-center">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
