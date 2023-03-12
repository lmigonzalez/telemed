import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DisplayOrders = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay: 0.3 }}
      className="py-8 px-4 text-start md:text-center"
    >
      <h2 className="mb-5 text-5xl font-bold leading-[62px]">
        Display orders from <br /> anywhere, on one screen.
      </h2>
      <p className="mb-14">
        Whether you take orders through POS, Square Online site, or delivery
        apps like <br /> Postmates, everything is sent to and fulfilled directly
        from the kitchen.
      </p>
      <div className="relative h-60 w-full">
        <Image src={"/kds-orders.svg.svg"} alt="kds-orders" fill />
      </div>
    </motion.section>
  );
};

export default DisplayOrders;
