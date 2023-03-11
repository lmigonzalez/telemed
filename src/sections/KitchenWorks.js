import React from 'react';
import Image from 'next/image';

const KitchenWorks = () => {
  return (
    <section className="w-[1200px] max-w-full p-8   m-auto flex flex-col justify-center items-center text-center">
      <h2 className="text-5xl font-bold  mb-5">
        Tailored to how your kitchen works.
      </h2>
      <p className="mb-16">
        Designed for flexibility, Square KDS works with your kitchen setup and
        processes <br /> to get the job done.
      </p>
      <ul className=" flex space-x-6 mb-16">
        <li className="flex">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#A2D5A9] mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <p>Online orders</p>
        </li>

        <li className="flex">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#A2D5A9] mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <p>Prep station</p>
        </li>

        <li className="flex">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#A2D5A9] mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <p>Expeditor station</p>
        </li>

        <li className="flex">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#A2D5A9] mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <p>Multiple stations</p>
        </li>
      </ul>

      <div className="w-full h-60 relative">
        <Image src={'/kds-workflow.svg.svg'} alt="kds-workflow" fill />
      </div>

      <div className="w-full mt-48 mb-16">
        <div className="w-full flex flex-col justify-between items-start">
          <div className="flex  justify-end items-end w-full">
            <div className="flex flex-col items-center justify-center  mr-5">
              <p className="text-2xl w-full">Square KDS</p>
              <p className="text-8xl font-bold text-[#656EB3]  w-full">$20</p>
            </div>
            <div className="flex justify-between items-end  w-full">
              <p className="text-start">
                Per month per device <br /> Free for 30 days. Square for
                Restaurants Free included.
              </p>
              <div className="">
                <button className="px-5 py-3 rounded bg-[#656EB3] text-white mr-8">
                  Get started
                </button>
                <button className="px-2 py-3  border-[1px] rounded border-[#656EB3] text-[#656EB3]">
                  Contact sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex justify-between items-end w-full'>
        <div className='text-left'>
          <p className='text-2xl mb-4'>Multiple devices?</p>
          <p>
            Add unlimited KDS devices when you sign up for Square for
            Restaurants Plus and unlock all the features of our POS.
          </p>
        </div>
        <button className="px-2 py-3  border-[1px] rounded border-[#656EB3] text-[#656EB3]">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default KitchenWorks;
