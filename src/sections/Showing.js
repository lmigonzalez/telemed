import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Showing = () => {
  return (
    <section className="">
      <div className="relative flex w-auto h-auto 2xl:justify-center ">
        <Image src="/image1.png" alt="showing" width={1920} height={1300} />
      </div>

      <motion.div className="m-auto flex w-[1200px] max-w-full flex-col items-center justify-between py-24 px-4 md:flex-row md:space-x-8">
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.3 }}
          className="mb-8 w-full text-5xl font-bold leading-[62px] md:mb-0 md:w-1/2"
        >
          No matter what’s cooking, efficiency matters.
        </motion.h3>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.3 }}
          className="w-full space-y-5 md:w-1/2"
        >
          <div className="flex items-center">
            <div className="mr-5 text-white">
              <Image
                src={"/kds-benefit-one.svg.svg"}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="rounded bg-black"
              />
            </div>
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/kds-benefit-two.svg.svg"}
              alt="kds-benefit-one"
              width={40}
              height={40}
              className="rounded bg-black whitespace-nowrap"
            />
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/kds-benefit-three.svg.svg"}
              alt="kds-benefit-one"
              width={40}
              height={40}
              className="rounded bg-black whitespace-nowrap"
            />
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Showing;
