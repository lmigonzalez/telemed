import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion} from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-start justify-center  py-20 px-4 md:items-center"
    >
      <h1 className="mb-6 text-5xl font-bold md:text-7xl">
        Telemed.xyz
      </h1>
      <h3 className="mb-8 max-w-[500px] text-start text-2xl font-normal md:text-center md:text-3xl">
        An efficient kitchen display system you can rely on. Organize and
        fulfill orders from anywhere, in one affordable solution.
      </h3>
      <button className="mb-6 rounded bg-[#656EB3] px-5 py-4 text-white">
        Get started
      </button>
      <Link
        className="mb-2 flex items-center font-bold text-[#656EB3]"
        href={" "}
      >
        Connect with us{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Link>
      <p>Starting at $20/mo per device</p>
    </motion.section>
  );
};

export default Hero;
