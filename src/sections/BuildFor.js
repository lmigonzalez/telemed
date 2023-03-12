import React from 'react';
import Image from 'next/image';

const BuildFor = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4 w-[1200px] max-w-full m-auto">

      <div className='order-2 w-full mt-12 lg:mt-0 lg:order-1  lg:mb-40'>
        <div className="mb-16 w-full">

          <div className="flex flex-col lg:flex-row  w-full items-start lg:items-end justify-end">
            <div className="mr-5 flex flex-col items-center  justify-center">
              <p className="w-full text-2xl">Square KDS</p>
              <p className="w-full text-8xl font-bold  text-[#656EB3] mt-3 lg:mt-0">$20</p>
            </div>
            <div className="flex flex-col lg:flex-row w-full  items-start lg:items-end  justify-between">
              <p className="text-start mt-3 mb-8 lg:mt-0 lg:mb-0">
                Per month per device <br /> Free for 30 days. Square for
                Restaurants Free included.
              </p>
              <div className="">
                <button className="mr-8 rounded bg-[#656EB3] px-5 py-3 text-white">
                  Get started
                </button>
                <button className="rounded border-[1px]  border-[#656EB3] px-2 py-3 text-[#656EB3]">
                  Contact sales
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row w-full items-start space-y-4 lg:space-y-0 lg:items-end justify-between">
          <div className="text-left">
            <p className="mb-4 text-2xl">Multiple devices?</p>
            <p>
              Add unlimited KDS devices when you sign up for Square for
              Restaurants Plus and unlock all the features of our POS.
            </p>
          </div>
          <button className="rounded border-[1px]  border-[#656EB3] px-2 py-3 text-[#656EB3]">
            Learn More
          </button>
        </div>
      </div>


      <div className='order-1 lg:order-2 flex flex-col items-start lg:items-center justify-center'>
        <h2 className="text-4xl font-bold text-start mb-5 lg:ml-4">
          Built for your bottom line.
        </h2>
        <p className="mb-8 text-start lg:ml-4">
          Easy to set up in minutes, with no installation costs. Spend less time
          training your staff, and more time getting orders out.
        </p>
        <button className="mb-14 text-[#656EB3] flex items-center">
          Have questions? Connect with us{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
        <div className="relative w-auto max-w-full h-auto">
          <Image src={'/kds-setup_photo.png.png'} alt="kds-setup_photo" width={1200} height={600} />
        </div>
      </div>


    </section>
  );
};

export default BuildFor;
