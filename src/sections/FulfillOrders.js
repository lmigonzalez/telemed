import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FulfillOrders = () => {
  return (
    <section className="flex flex-col-reverse justify-between bg-white py-24 text-white md:flex-row md:items-center md:space-x-8 md:bg-black">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-col items-end md:mt-0 md:w-1/2"
      >
        <div className="px-4 text-black md:text-white">
          <h3 className="mb-8 text-5xl font-bold leading-[62px]">
            Fulfill orders accurately, every time.
          </h3>
          <ul className="list-disc flex-col space-y-5">
            <li className="flex">
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
              <p>
                Prioritize and organize orders with detailed ticket views,
                timers, and alerts.
              </p>
            </li>
            <li className="flex">
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
              <p>
                Send orders to the right prep stations to help boost order
                accuracy.
              </p>
            </li>
            <li className="flex">
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
              <p>
                Oversee order fulfillment and completion with Expeditor Mode.
              </p>
            </li>
          </ul>
        </div>
      </motion.div>

      <div className="flex justify-end bg-black py-24 md:py-0 ">
        <Image
          className="my-2"
          src="/kds-tickets.png"
          alt="kds-tickets-m"
          width={640}
          height={270}
        />
      </div>
    </section>
  );
};

export default FulfillOrders;
