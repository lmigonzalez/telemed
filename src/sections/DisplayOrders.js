import React from 'react';
import Image from 'next/image';

const DisplayOrders = () => {
  return (
    <section className="text-center py-8">
      <h2 className="text-5xl font-bold text-center leading-[62px] mb-5">
        Display orders from <br /> anywhere, on one screen.
      </h2>
      <p className='mb-14'>
        Whether you take orders through POS, Square Online site, or delivery
        apps like <br /> Postmates, everything is sent to and fulfilled directly
        from the kitchen.
      </p>
      <div className="w-full h-60 relative">
        <Image src={'/kds-orders.svg.svg'} alt="kds-orders" fill />
      </div>
    </section>
  );
};

export default DisplayOrders;
