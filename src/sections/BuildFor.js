import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BuildFor = () => {
  return (
    <section className="m-auto flex w-[1200px] max-w-full flex-col items-center justify-center py-24 px-4 text-center">
      <div className="order-2 mt-12 w-full lg:order-1 lg:mt-0  lg:mb-40">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.3 }}
          className="mb-16 w-full"
        >
          <div className="flex w-full flex-col  items-start justify-end lg:flex-row lg:items-end">
            <div className="mr-5 flex flex-col items-center  justify-center">
              <p className="w-full text-2xl">Square KDS</p>
              <p className="mt-3 w-full text-8xl  font-bold text-[#656EB3] lg:mt-0">
                $20
              </p>
            </div>
            <div className="flex w-full flex-col items-start  justify-between lg:flex-row  lg:items-end">
              <p className="mt-3 mb-8 text-start lg:mt-0 lg:mb-0">
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
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.3 }}
          className="flex w-full flex-col items-start justify-between space-y-4 lg:flex-row lg:items-end lg:space-y-0"
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3 }}
        className="order-1 flex flex-col items-start justify-center lg:order-2 lg:items-center"
      >
        <h2 className="mb-5 text-start text-4xl font-bold lg:ml-4">
          Built for your bottom line.
        </h2>
        <p className="mb-8 text-start lg:ml-4">
          Easy to set up in minutes, with no installation costs. Spend less time
          training your staff, and more time getting orders out.
        </p>
        <button className="mb-14 flex items-center text-[#656EB3]">
          Have questions? Connect with us{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
        <div className="relative h-auto w-auto max-w-full">
          <Image
            src={"/kds-setup_photo.png.png"}
            alt="kds-setup_photo"
            width={1200}
            height={600}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default BuildFor;
