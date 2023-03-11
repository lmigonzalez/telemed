import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <h1 className="text-7xl font-bold mb-6">Telemed.xyz</h1>
      <h3 className="text-3xl font-normal text-center mb-8">
        An efficient kitchen display system you <br /> can rely on. Organize and
        fulfill orders <br /> from anywhere, in one affordable solution.
      </h3>
      <button className="px-5 py-3 rounded bg-[#656EB3] text-white mb-6">
        Get started
      </button>
      <button className='text-[#656EB3] font-bold mb-2'>Connect with us -</button>
      <p>Starting at $20/mo per device</p>
    </section>
  );
};

export default Hero;
