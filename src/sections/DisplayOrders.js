import React from "react";
import Image from "next/image";

const DisplayOrders = () => {
  return (
    <section className="py-8 text-center">
      <h2 className="mb-5 text-center text-5xl font-bold leading-[62px]">
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
    </section>
  );
};

export default DisplayOrders;
