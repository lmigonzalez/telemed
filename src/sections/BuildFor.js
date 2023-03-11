import React from 'react';
import Image from 'next/image';

const BuildFor = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">
      <h2 className="text-5xl font-bold text-center mb-5">
        Built for your bottom line.
      </h2>
      <p className="mb-8">
        Easy to set up in minutes, with no installation costs. Spend less time
        training your <br /> staff, and more time getting orders out.
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
      <div className="relative w-[1200px] max-w-full h-[600px]">
        <Image src={'/kds-setup_photo.png.png'} alt="kds-setup_photo" fill />
      </div>
    </section>
  );
};

export default BuildFor;
