import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <h1 className="mb-6 text-7xl font-bold">Telemed.xyz</h1>
      <h3 className="mb-8 text-center text-3xl font-normal">
        An efficient kitchen display system you <br /> can rely on. Organize and
        fulfill orders <br /> from anywhere, in one affordable solution.
      </h3>
      <button className="mb-6 rounded bg-[#656EB3] px-5 py-3 text-white">
        Get started
      </button>
      <button className="mb-2 font-bold text-[#656EB3]">
        Connect with us -
      </button>
      <p>Starting at $20/mo per device</p>
    </section>
  );
};

export default Hero;
