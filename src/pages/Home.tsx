import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto my-10 max-w-7xl min-h-[72.5vh]">
      <div className='flex w-full justify-between'>
        <div className='w-1/2 flex flex-col items-center'>
          <div>
            <div>
              <h1 className='text-[64px] font-semibold w-[345px] text-wrap font leading-[60px]'>
                We Code
                We Deliver
              </h1>
              <hr className="border-black border-2 w-20 mt-5" />
            </div>

            <div className='w-[245px] xl:pt-40'>
              Twiscode specializes in developing
              high-performing mobile and
              web applications.
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <img src="/assets/Rectangle 2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
