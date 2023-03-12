import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col  justify-center py-20 px-4">
      <h1 className="mb-6 text-5xl font-bold md:text-7xl">Telemed.xyz</h1>
      <h3 className="mb-8 text-xl font-normal md:3xl">
        An efficient kitchen display system you can rely on. Organize and
        fulfill orders from anywhere, in one affordable solution.
      </h3>
      <button className="mb-6 rounded bg-[#656EB3] w-24 h-10 text-white">
        Get started
      </button>
      <Link className="mb-2 font-bold text-[#656EB3] flex" href={' '}>
        Connect with us <img src='right-blue-arrow-svgrepo-com.svg' width={15} />
      </Link>
      <p>Starting at $20/mo per device</p>
    </section>
  );
};

export default Hero;
