import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-between'>
      <div className='md:w-1/2 flex flex-col items-center'>
        <div>
          <div>
            <h1 className='text-[32px] md:text-[64px] font-semibold w-[345px] text-wrap font leading-[60px]'>
              We Code
              We Deliver
            </h1>
            <hr className="border-black border-2 w-20 md:mt-5" />
          </div>

          <div className='w-[245px] pt-6 xl:pt-40'>
            Twiscode specializes in developing
            high-performing mobile and
            web applications.
          </div>
        </div>
      </div>
      <div className='pt-5 md:pt-0 md:w-1/2'>
        <img src="/assets/Rectangle 2.svg" alt="Rectangle" className='h-[300px] md:h-[500px] w-full object-cover' />
      </div>
    </div>
  )
}

export default Header