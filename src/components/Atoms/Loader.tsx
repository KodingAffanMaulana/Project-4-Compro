import React from 'react';

const Loader = () => {
  return (
    <div className='fixed inset-0 min-h-screen flex justify-center items-center bg-gray-900 bg-opacity-50'>
      <div className='relative'>
        <div className='w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin'></div>
      </div>
    </div>
  );
};

export default Loader;
