import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-start md:items-center  justify-center py-20 px-4">
      <h1 className="mb-6 text-5xl font-bold md:text-7xl">Telemed.xyz</h1>
      <h3 className="mb-8 text-2xl md:text-3xl font-normal max-w-[500px] text-start md:text-center">
        An efficient kitchen display system you can rely on. Organize and
        fulfill orders from anywhere, in one affordable solution.
      </h3>
      <button className="mb-6 rounded bg-[#656EB3] px-5 py-4 text-white">
        Get started
      </button>
      <Link className="mb-2 font-bold text-[#656EB3] flex items-center" href={' '}>
        Connect with us <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>

      </Link>
      <p>Starting at $20/mo per device</p>
    </section>
  );
};

export default Hero;
