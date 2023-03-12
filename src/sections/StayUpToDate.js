import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion';
const StayUpToDate = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col items-center gap-1 px-4 py-24 "
    >
      <div>
        <div className=" justify-center text-center">
          <h2 className="mb-5 text-5xl  font-bold">Stay up to date</h2>
          <p className="mb-16">
            Learn about updated features, stories from other businesses, and the
            latest promotions.
          </p>
        </div>
        <form className="flex flex-col justify-between gap-2 md:flex-row">
          <input
            className="form-input w-full rounded-md border-none bg-[#6666666E] shadow-md"
            type="email"
            defaultValue={"Email address"}
          />
          <button className="whitespace-nowrap rounded bg-[#656EB3] p-2 text-white">
            Get more info
          </button>
        </form>
        <p className="mt-7 before:content-['*']">
          Please refer to our{" "}
          <Link href={""} className=" text-[#656EB3]">
            Privacy Policy
          </Link>{" "}
          for more details.
        </p>
      </div>
    </motion.section>
  );
};

export default StayUpToDate;
