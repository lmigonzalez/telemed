import React from "react";
import Image from "next/image";

const KitchenWorks = () => {
  return (
    <section className="w-[1200px] max-w-full px-4 py-24  flex flex-col  justify-start md:justify-center md:items-center">
      <h2 className="text-5xl font-bold  mb-5">
        Tailored to how your kitchen works.
      </h2>
      <p className="mb-16">
        Designed for flexibility, Square KDS works with your kitchen setup and
        processes to get the job done.
      </p>
      <ul className=" mb-16 flex items-start flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <li className="flex">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-6 w-6 text-[#A2D5A9]"
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
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-6 w-6 text-[#A2D5A9]"
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
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-6 w-6 text-[#A2D5A9]"
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
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-6 w-6 text-[#A2D5A9]"
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

      <div className="relative h-60 w-full">
        <Image src={"/kds-workflow.svg.svg"} alt="kds-workflow" fill />
      </div>

      <div className="mt-48 mb-16 w-full">
        <div className="flex w-full flex-col items-start justify-between">
          <div className="flex  w-full items-end justify-end">
            <div className="mr-5 flex flex-col items-center  justify-center">
              <p className="w-full text-2xl">Square KDS</p>
              <p className="w-full text-8xl font-bold  text-[#656EB3]">$20</p>
            </div>
            <div className="flex w-full items-end  justify-between">
              <p className="text-start">
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
      </div>

      <div className="flex w-full items-end justify-between">
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
    </section>
  );
};

export default KitchenWorks;
