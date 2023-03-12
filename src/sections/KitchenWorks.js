import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const KitchenWorks = () => {
  return (
    <section className="m-auto flex w-[1200px] max-w-full  flex-col justify-start  px-4 py-24 md:items-center md:justify-center">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3 }}
        className="mb-5 text-5xl  font-bold"
      >
        Tailored to how your kitchen works.
      </motion.h2>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        Designed for flexibility, Square KDS works with your kitchen setup and
        processes to get the job done.
      </motion.p>
      <ul className=" mb-16 flex flex-col items-start space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.3 }}
          className="flex"
        >
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
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.4 }}
          className="flex"
        >
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
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.5 }}
          className="flex"
        >
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
        </motion.li>

        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.6 }}
          className="flex"
        >
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
        </motion.li>
      </ul>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3 }}
        className="relative h-60 w-full"
      >
        <Image src={"/kds-workflow.svg.svg"} alt="kds-workflow" fill />
      </motion.div>
    </section>
  );
};

export default KitchenWorks;
