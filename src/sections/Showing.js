import React from 'react';
import Image from 'next/image';
const Showing = () => {
  return (
    <section className=''>
      <div className="w-full h-[600px] relative">
        <Image src="/image1.png" alt="showing" fill />
      </div>
      <div className="flex justify-between items-center py-24 px-8 m-auto w-[1200px] max-w-full">
        <h3 className="text-5xl font-bold leading-[62px] w-1/2">
          No matter what’s <br /> cooking, <br /> efficiency matters.
        </h3>
        <div className='space-y-5 w-1/2'>
          <div className="flex items-center">
            <div className="text-white mr-5">
              <Image
                src={'/kds-benefit-one.svg.svg'}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="bg-black rounded"
              />
            </div>
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-white mr-5">
              <Image
                src={'/kds-benefit-two.svg.svg'}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="bg-black rounded"
              />
            </div>
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-white mr-5">
              <Image
                src={'/kds-benefit-three.svg.svg'}
                alt="kds-benefit-one"
                width={40}
                height={40}
                className="bg-black rounded"
              />
            </div>
            <p>
              Keep orders synced with a direct link between front and back of
              house.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showing;
